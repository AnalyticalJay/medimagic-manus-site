import { publicProcedure, router } from "../_core/trpc";
import { z } from "zod";
import { notifyOwner } from "../_core/notification";

export const contactRouter = router({
  submit: publicProcedure
    .input(z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Invalid email address"),
      subject: z.string().min(1, "Subject is required"),
      message: z.string().min(10, "Message must be at least 10 characters"),
    }))
    .mutation(async ({ input }) => {
      try {
        const emailContent = `New Contact Form Submission

From: ${input.name}
Email: ${input.email}
Subject: ${input.subject}

Message:
${input.message}

---
Reply to: ${input.email}`;

        const success = await notifyOwner({
          title: `New Contact: ${input.subject}`,
          content: emailContent,
        });

        if (!success) {
          console.warn("Failed to send notification to owner");
        }

        return {
          success: true,
          message: "Your message has been sent successfully. We'll get back to you within 24 hours.",
        };
      } catch (error) {
        console.error("Error submitting contact form:", error);
        throw error;
      }
    }),
});
