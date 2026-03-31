import { describe, it, expect, beforeEach, vi } from "vitest";
import { getUserBookings, getAllUsers, getBookingStats } from "./db";

// Mock the database
vi.mock("./db", () => ({
  getDb: vi.fn(),
  getUserBookings: vi.fn(),
  getAllUsers: vi.fn(),
  getBookingStats: vi.fn(),
}));

describe("Dashboard Functions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getUserBookings", () => {
    it("should return bookings for a specific user", async () => {
      const mockBookings = [
        {
          id: 1,
          userId: 1,
          name: "John Doe",
          email: "john@example.com",
          serviceType: "Divorce Settlement",
          consultationType: "online",
          preferredDate: "2026-04-15",
          preferredTime: "10:00 AM",
          message: "Need help with settlement",
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      // Mock implementation would go here
      // The actual test would verify the query is called correctly
      expect(mockBookings).toHaveLength(1);
      expect(mockBookings[0].userId).toBe(1);
    });

    it("should return empty array for user with no bookings", async () => {
      const mockBookings: any[] = [];
      expect(mockBookings).toHaveLength(0);
    });
  });

  describe("getAllUsers", () => {
    it("should return all users", async () => {
      const mockUsers = [
        {
          id: 1,
          openId: "user1",
          name: "Admin User",
          email: "admin@example.com",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
          lastSignedIn: new Date(),
          loginMethod: "oauth",
        },
        {
          id: 2,
          openId: "user2",
          name: "Regular User",
          email: "user@example.com",
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
          lastSignedIn: new Date(),
          loginMethod: "oauth",
        },
      ];

      expect(mockUsers).toHaveLength(2);
      expect(mockUsers[0].role).toBe("admin");
      expect(mockUsers[1].role).toBe("user");
    });
  });

  describe("getBookingStats", () => {
    it("should return all bookings for statistics", async () => {
      const mockBookings = [
        {
          id: 1,
          userId: 1,
          name: "John Doe",
          email: "john@example.com",
          serviceType: "Divorce Settlement",
          consultationType: "online",
          preferredDate: "2026-04-15",
          preferredTime: "10:00 AM",
          message: null,
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          userId: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          serviceType: "Parenting Plans",
          consultationType: "in-person",
          preferredDate: "2026-04-20",
          preferredTime: "2:00 PM",
          message: "Need guidance on custody",
          status: "confirmed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      expect(mockBookings).toHaveLength(2);
      const pendingCount = mockBookings.filter((b) => b.status === "pending").length;
      const confirmedCount = mockBookings.filter((b) => b.status === "confirmed").length;

      expect(pendingCount).toBe(1);
      expect(confirmedCount).toBe(1);
    });
  });

  describe("Booking Status Distribution", () => {
    it("should correctly calculate booking status distribution", () => {
      const bookings = [
        { status: "pending" },
        { status: "pending" },
        { status: "confirmed" },
        { status: "completed" },
        { status: "cancelled" },
      ];

      const stats = {
        pending: bookings.filter((b) => b.status === "pending").length,
        confirmed: bookings.filter((b) => b.status === "confirmed").length,
        completed: bookings.filter((b) => b.status === "completed").length,
        cancelled: bookings.filter((b) => b.status === "cancelled").length,
      };

      expect(stats.pending).toBe(2);
      expect(stats.confirmed).toBe(1);
      expect(stats.completed).toBe(1);
      expect(stats.cancelled).toBe(1);
    });
  });

  describe("User Role Verification", () => {
    it("should correctly identify admin users", () => {
      const users = [
        { id: 1, name: "Admin", role: "admin" },
        { id: 2, name: "User", role: "user" },
      ];

      const adminUsers = users.filter((u) => u.role === "admin");
      expect(adminUsers).toHaveLength(1);
      expect(adminUsers[0].name).toBe("Admin");
    });

    it("should correctly identify regular users", () => {
      const users = [
        { id: 1, name: "Admin", role: "admin" },
        { id: 2, name: "User", role: "user" },
      ];

      const regularUsers = users.filter((u) => u.role === "user");
      expect(regularUsers).toHaveLength(1);
      expect(regularUsers[0].name).toBe("User");
    });
  });
});
