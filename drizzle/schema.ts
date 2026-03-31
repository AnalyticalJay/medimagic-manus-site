import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Bookings table for consultation requests
export const bookings = mysqlTable("bookings", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId"),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  serviceType: varchar("serviceType", { length: 255 }).notNull(),
  consultationType: mysqlEnum("consultationType", ["in-person", "online"]).default("online").notNull(),
  preferredDate: varchar("preferredDate", { length: 255 }).notNull(),
  preferredTime: varchar("preferredTime", { length: 255 }).notNull(),
  message: text("message"),
  status: mysqlEnum("status", ["pending", "confirmed", "cancelled", "completed"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = typeof bookings.$inferInsert;

// Availability management table for managing consultation slots
export const availability = mysqlTable("availability", {
  id: int("id").autoincrement().primaryKey(),
  date: varchar("date", { length: 255 }).notNull(),
  timeSlot: varchar("timeSlot", { length: 255 }).notNull(),
  isAvailable: int("isAvailable").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Availability = typeof availability.$inferSelect;
export type InsertAvailability = typeof availability.$inferInsert;

// Online consultation submissions table
export const onlineConsultationSubmissions = mysqlTable("onlineConsultationSubmissions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  serviceType: varchar("serviceType", { length: 255 }).notNull(), // e.g., "mediation", "social-work"
  specificService: varchar("specificService", { length: 255 }), // e.g., "Divorce Settlement", "Parenting Plan"
  briefDescription: text("briefDescription").notNull(), // Why they need consultation
  urgency: mysqlEnum("urgency", ["low", "medium", "high"]).default("medium").notNull(),
  preferredContactMethod: mysqlEnum("preferredContactMethod", ["email", "phone", "both"]).default("email").notNull(),
  status: mysqlEnum("status", ["pending", "approved", "rejected", "scheduled", "completed"]).default("pending").notNull(),
  adminNotes: text("adminNotes"), // Notes from Cornelia
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type OnlineConsultationSubmission = typeof onlineConsultationSubmissions.$inferSelect;
export type InsertOnlineConsultationSubmission = typeof onlineConsultationSubmissions.$inferInsert;

// Consultation time slots table
export const consultationTimeSlots = mysqlTable("consultationTimeSlots", {
  id: int("id").autoincrement().primaryKey(),
  submissionId: int("submissionId").notNull(), // Foreign key to onlineConsultationSubmissions
  date: varchar("date", { length: 255 }).notNull(), // ISO date format
  startTime: varchar("startTime", { length: 255 }).notNull(), // HH:mm format
  endTime: varchar("endTime", { length: 255 }).notNull(), // HH:mm format
  isBooked: int("isBooked").default(0).notNull(), // 0 = available, 1 = booked
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ConsultationTimeSlot = typeof consultationTimeSlots.$inferSelect;
export type InsertConsultationTimeSlot = typeof consultationTimeSlots.$inferInsert;
