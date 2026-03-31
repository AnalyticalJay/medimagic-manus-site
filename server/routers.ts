import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createBooking, getBookings, getBookingById, updateBookingStatus, getAvailability, getAvailabilityByDate, createAvailability, updateAvailability, getUserBookings, getAllUsers, getBookingStats } from "./db";

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
});

export type AppRouter = typeof appRouter;
