import { invokeLLM } from "./llm";
import { notifyOwner } from "./notification";

interface SubmissionData {
  id: number;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  specificService: string;
  briefDescription: string;
  urgency: string;
  preferredContactMethod: string;
}

interface TimeSlot {
  date: string;
  startTime: string;
  endTime: string;
}

/**
 * Send email notification to Cornelia when a new consultation submission is received
 */
export async function sendSubmissionNotificationToCornelia(submission: SubmissionData) {
  try {
    // Notify via the built-in notification system
    await notifyOwner({
      title: `New Online Consultation Request: ${submission.name}`,
      content: `
A new consultation request has been submitted:

**Client Information:**
- Name: ${submission.name}
- Email: ${submission.email}
- Phone: ${submission.phone}
- Urgency: ${submission.urgency}

**Service Details:**
- Service Type: ${submission.serviceType}
- Specific Service: ${submission.specificService}

**Brief Description:**
${submission.briefDescription}

**Preferred Contact Method:** ${submission.preferredContactMethod}

Please log in to the admin dashboard to review this submission and decide whether to approve or reject it.
      `,
    });

    console.log(`Submission notification sent for: ${submission.name}`);
  } catch (error) {
    console.error("Error sending submission notification:", error);
  }
}

/**
 * Send confirmation email to client when their submission is received
 */
export async function sendSubmissionConfirmationToClient(submission: SubmissionData) {
  try {
    const emailContent = `
Dear ${submission.name},

Thank you for submitting your online consultation request with MediMagic.

We have received your request for ${submission.specificService}. Cornelia will review your submission and determine whether an online consultation is suitable for your situation.

**What happens next:**
1. Cornelia will review your submission (typically within 2-3 business days)
2. If approved, she will contact you via ${submission.preferredContactMethod} with available consultation time slots
3. You can then select a time that works best for you

**Your submission details:**
- Service Type: ${submission.serviceType}
- Specific Service: ${submission.specificService}
- Urgency Level: ${submission.urgency}

If you have any questions in the meantime, please don't hesitate to contact us.

Best regards,
Cornelia & the MediMagic Team
    `;

    // In a production environment, you would send this via an email service
    // For now, we're logging it
    console.log(`Confirmation email would be sent to: ${submission.email}`);
    console.log(emailContent);

    return true;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return false;
  }
}

/**
 * Send approval email to client with available time slots
 */
export async function sendApprovalEmailWithTimeSlots(
  submission: SubmissionData,
  timeSlots: TimeSlot[],
  clientPortalUrl: string
) {
  try {
    const timeSlotsHtml = timeSlots
      .map(
        (slot) =>
          `<li>${slot.date} from ${slot.startTime} to ${slot.endTime}</li>`
      )
      .join("");

    const emailContent = `
Dear ${submission.name},

Great news! Your consultation request has been approved by Cornelia.

**Next Step:** Please select your preferred consultation time from the available slots below:

${timeSlots.map((slot) => `- ${slot.date} from ${slot.startTime} to ${slot.endTime}`).join("\n")}

To book your consultation, please visit: ${clientPortalUrl}

**Consultation Details:**
- Service: ${submission.specificService}
- Format: Secure online video consultation
- Duration: Typically 60 minutes

Once you select a time slot, you will receive a confirmation email with the meeting link and any additional details.

If none of these times work for you, please reply to this email and we'll do our best to find an alternative.

Best regards,
Cornelia & the MediMagic Team
    `;

    // In a production environment, you would send this via an email service
    console.log(`Approval email with time slots would be sent to: ${submission.email}`);
    console.log(emailContent);

    return true;
  } catch (error) {
    console.error("Error sending approval email:", error);
    return false;
  }
}

/**
 * Send rejection email to client
 */
export async function sendRejectionEmailToClient(
  submission: SubmissionData,
  adminNotes?: string
) {
  try {
    const emailContent = `
Dear ${submission.name},

Thank you for submitting your consultation request to MediMagic.

After careful consideration, Cornelia has determined that an online consultation may not be the most suitable format for your situation at this time.

${adminNotes ? `\n**Reason:** ${adminNotes}\n` : ""}

**Alternative Options:**
We encourage you to contact us to discuss alternative service options that might better suit your needs:
- In-person consultations
- Other services that may be more appropriate for your situation
- Referrals to other professionals if needed

Please feel free to reach out if you have any questions or would like to discuss this further.

Best regards,
Cornelia & the MediMagic Team
    `;

    // In a production environment, you would send this via an email service
    console.log(`Rejection email would be sent to: ${submission.email}`);
    console.log(emailContent);

    return true;
  } catch (error) {
    console.error("Error sending rejection email:", error);
    return false;
  }
}

/**
 * Send booking confirmation email to client
 */
export async function sendBookingConfirmationToClient(
  submission: SubmissionData,
  timeSlot: TimeSlot,
  meetingLink?: string
) {
  try {
    const emailContent = `
Dear ${submission.name},

Your consultation has been successfully booked!

**Consultation Details:**
- Date: ${timeSlot.date}
- Time: ${timeSlot.startTime} - ${timeSlot.endTime}
- Service: ${submission.specificService}
- Format: Secure online video consultation

${meetingLink ? `\n**Meeting Link:** ${meetingLink}\n` : ""}

**Before Your Consultation:**
1. Ensure you have a quiet, private space
2. Test your internet connection and camera/microphone
3. Have any relevant documents or notes ready
4. Join 5 minutes early

**Important Reminders:**
- All consultations are confidential and protected by professional privilege
- The consultation will be conducted via secure video conferencing
- Please contact us at least 24 hours in advance if you need to reschedule

We look forward to supporting you through this process.

Best regards,
Cornelia & the MediMagic Team
    `;

    // In a production environment, you would send this via an email service
    console.log(`Booking confirmation email would be sent to: ${submission.email}`);
    console.log(emailContent);

    return true;
  } catch (error) {
    console.error("Error sending booking confirmation:", error);
    return false;
  }
}

/**
 * Send reminder email to client before consultation
 */
export async function sendConsultationReminderToClient(
  submission: SubmissionData,
  timeSlot: TimeSlot,
  meetingLink?: string
) {
  try {
    const emailContent = `
Dear ${submission.name},

This is a friendly reminder about your upcoming consultation with Cornelia.

**Consultation Details:**
- Date: ${timeSlot.date}
- Time: ${timeSlot.startTime}
- Service: ${submission.specificService}

${meetingLink ? `\n**Meeting Link:** ${meetingLink}\n` : ""}

**Preparation Tips:**
1. Ensure you have a quiet, private space
2. Test your internet connection and camera/microphone
3. Have any relevant documents or notes ready
4. Join 5 minutes early

If you need to reschedule or have any questions, please reply to this email or contact us as soon as possible.

We look forward to our session with you.

Best regards,
Cornelia & the MediMagic Team
    `;

    // In a production environment, you would send this via an email service
    console.log(`Reminder email would be sent to: ${submission.email}`);
    console.log(emailContent);

    return true;
  } catch (error) {
    console.error("Error sending reminder email:", error);
    return false;
  }
}
