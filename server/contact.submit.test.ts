import { describe, it, expect, vi, beforeEach } from "vitest";
import { contactRouter } from "./routers/contact";
import { notifyOwner } from "./_core/notification";

// Mock the notifyOwner function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn(),
}));

describe("Contact Form Submission", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should successfully submit a contact form with valid data", async () => {
    const mockNotifyOwner = vi.mocked(notifyOwner);
    mockNotifyOwner.mockResolvedValue(true);

    const caller = contactRouter.createCaller({});
    
    const result = await caller.submit({
      name: "John Doe",
      email: "john@example.com",
      subject: "Inquiry about mediation services",
      message: "I would like to learn more about your mediation services and how they can help with my situation.",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("sent successfully");
    expect(mockNotifyOwner).toHaveBeenCalledOnce();
    
    const callArgs = mockNotifyOwner.mock.calls[0][0];
    expect(callArgs.title).toContain("New Contact");
    expect(callArgs.content).toContain("John Doe");
    expect(callArgs.content).toContain("john@example.com");
    expect(callArgs.content).toContain("Inquiry about mediation services");
  });

  it("should reject submission with invalid email", async () => {
    const caller = contactRouter.createCaller({});
    
    try {
      await caller.submit({
        name: "John Doe",
        email: "invalid-email",
        subject: "Test Subject",
        message: "This is a test message with sufficient length",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should reject submission with message too short", async () => {
    const caller = contactRouter.createCaller({});
    
    try {
      await caller.submit({
        name: "John Doe",
        email: "john@example.com",
        subject: "Test",
        message: "Short",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should reject submission with missing name", async () => {
    const caller = contactRouter.createCaller({});
    
    try {
      await caller.submit({
        name: "",
        email: "john@example.com",
        subject: "Test Subject",
        message: "This is a test message with sufficient length",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should handle notification service failure gracefully", async () => {
    const mockNotifyOwner = vi.mocked(notifyOwner);
    mockNotifyOwner.mockResolvedValue(false);

    const caller = contactRouter.createCaller({});
    
    const result = await caller.submit({
      name: "John Doe",
      email: "john@example.com",
      subject: "Test Subject",
      message: "This is a test message with sufficient length",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("sent successfully");
    expect(mockNotifyOwner).toHaveBeenCalledOnce();
  });
});
