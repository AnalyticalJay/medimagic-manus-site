import { getSessionCookieOptions } from "./_core/cookies";
import { COOKIE_NAME } from "@shared/const";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createBooking, getBookings, getBookingById, updateBookingStatus, getAvailability, getAvailabilityByDate, createAvailability, updateAvailability, getUserBookings, getAllUsers, getBookingStats, updateUser, getUserById, createOnlineConsultationSubmission, getOnlineConsultationSubmissions, getOnlineConsultationSubmissionById, updateOnlineConsultationSubmissionStatus, createConsultationTimeSlot, getConsultationTimeSlotsBySubmissionId, updateConsultationTimeSlotStatus, deleteConsultationTimeSlots } from "./db";
import { sendSubmissionNotificationToCornelia, sendSubmissionConfirmationToClient, sendApprovalEmailWithTimeSlots, sendRejectionEmailToClient } from "./_core/consultationEmail";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
    updateProfile: protectedProcedure
      .input(z.object({
        name: z.string().optional(),
        email: z.string().email().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (!ctx.user?.id) {
          throw new Error("User not found");
        }
        return updateUser(ctx.user.id, input);
      }),
  }),

  bookings: router({
    create: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().optional(),
        serviceType: z.string().min(1),
        consultationType: z.enum(["in-person", "online"]),
        preferredDate: z.string().min(1),
        preferredTime: z.string().min(1),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        return createBooking({
          name: input.name,
          email: input.email,
          phone: input.phone,
          serviceType: input.serviceType,
          consultationType: input.consultationType,
          preferredDate: input.preferredDate,
          preferredTime: input.preferredTime,
          message: input.message,
          status: "pending",
        });
      }),
    list: publicProcedure.query(() => getBookings()),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(({ input }) => getBookingById(input.id)),
    getUserBookings: protectedProcedure
      .input(z.object({ userId: z.number() }))
      .query(({ input }) => getUserBookings(input.userId)),
    updateStatus: protectedProcedure
      .input(z.object({ id: z.number(), status: z.string() }))
      .mutation(({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized");
        }
        return updateBookingStatus(input.id, input.status);
      }),
  }),
  availability: router({
    list: publicProcedure.query(() => getAvailability()),
    getByDate: publicProcedure
      .input(z.object({ date: z.string() }))
      .query(({ input }) => getAvailabilityByDate(input.date)),
    create: protectedProcedure
      .input(z.object({
        date: z.string(),
        timeSlot: z.string(),
        isAvailable: z.boolean().optional(),
      }))
      .mutation(({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized");
        }
        return createAvailability({
          date: input.date,
          timeSlot: input.timeSlot,
          isAvailable: input.isAvailable ? 1 : 0,
        });
      }),
    update: protectedProcedure
      .input(z.object({ id: z.number(), isAvailable: z.boolean() }))
      .mutation(({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized");
        }
        return updateAvailability(input.id, input.isAvailable);
      }),
  }),
  admin: router({
    getAllUsers: protectedProcedure.query(({ ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return getAllUsers();
    }),
    getBookingStats: protectedProcedure.query(({ ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return getBookingStats();
    }),
  }),
  onlineConsultation: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(1),
        serviceType: z.enum(["mediation", "social-work"]),
        specificService: z.string().min(1),
        briefDescription: z.string().min(10),
        urgency: z.enum(["low", "medium", "high"]).default("medium"),
        preferredContactMethod: z.enum(["email", "phone", "both"]).default("email"),
      }))
      .mutation(async ({ input }) => {
        const result = await createOnlineConsultationSubmission({
          name: input.name,
          email: input.email,
          phone: input.phone,
          serviceType: input.serviceType,
          specificService: input.specificService,
          briefDescription: input.briefDescription,
          urgency: input.urgency as any,
          preferredContactMethod: input.preferredContactMethod as any,
          status: "pending",
        });

        // Send notifications
        const submission = {
          id: (result as any).insertId || 0,
          name: input.name,
          email: input.email,
          phone: input.phone,
          serviceType: input.serviceType,
          specificService: input.specificService,
          briefDescription: input.briefDescription,
          urgency: input.urgency,
          preferredContactMethod: input.preferredContactMethod,
        };
        
        await sendSubmissionNotificationToCornelia(submission);
        await sendSubmissionConfirmationToClient(submission);

        return result;
      }),
    getSubmissions: protectedProcedure.query(({ ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return getOnlineConsultationSubmissions();
    }),
    getSubmissionById: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input, ctx }) => {
        const submission = await getOnlineConsultationSubmissionById(input.id);
        if (!submission) {
          throw new Error("Submission not found");
        }
        if (ctx.user?.role !== "admin" && submission.email !== ctx.user?.email) {
          throw new Error("Unauthorized");
        }
        const timeSlots = await getConsultationTimeSlotsBySubmissionId(input.id);
        return { submission, timeSlots };
      }),
    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["pending", "approved", "rejected", "scheduled", "completed"]),
        adminNotes: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized");
        }
        return updateOnlineConsultationSubmissionStatus(input.id, input.status, input.adminNotes);
      }),
    addTimeSlots: protectedProcedure
      .input(z.object({
        submissionId: z.number(),
        timeSlots: z.array(z.object({
          date: z.string(),
          startTime: z.string(),
          endTime: z.string(),
        })),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized");
        }
        await deleteConsultationTimeSlots(input.submissionId);
        const results = [];
        for (const slot of input.timeSlots) {
          const result = await createConsultationTimeSlot({
            submissionId: input.submissionId,
            date: slot.date,
            startTime: slot.startTime,
            endTime: slot.endTime,
            isBooked: 0,
          });
          results.push(result);
        }
        return results;
      }),
    bookTimeSlot: publicProcedure
      .input(z.object({
        timeSlotId: z.number(),
      }))
      .mutation(async ({ input }) => {
        return updateConsultationTimeSlotStatus(input.timeSlotId, true);
      }),
  }),
});

export type AppRouter = typeof appRouter;
