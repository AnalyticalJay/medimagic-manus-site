import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";

export function ConsultationAdmin() {
  const [selectedSubmissionId, setSelectedSubmissionId] = useState<number | null>(null);
  const [newStatus, setNewStatus] = useState<string>("");
  const [adminNotes, setAdminNotes] = useState<string>("");
  const [timeSlots, setTimeSlots] = useState<Array<{ date: string; startTime: string; endTime: string }>>([
    { date: "", startTime: "", endTime: "" },
  ]);

  const { data: submissions, isLoading: isLoadingSubmissions } = trpc.onlineConsultation.getSubmissions.useQuery();
  const { data: submissionDetail } = trpc.onlineConsultation.getSubmissionById.useQuery(
    { id: selectedSubmissionId || 0 },
    { enabled: !!selectedSubmissionId }
  );

  const updateStatusMutation = trpc.onlineConsultation.updateStatus.useMutation();
  const addTimeSlotsMutation = trpc.onlineConsultation.addTimeSlots.useMutation();

  const handleUpdateStatus = async () => {
    if (!selectedSubmissionId) return;

    try {
      await updateStatusMutation.mutateAsync({
        id: selectedSubmissionId,
        status: newStatus as any,
        adminNotes: adminNotes || undefined,
      });
      alert("Status updated successfully!");
      setNewStatus("");
      setAdminNotes("");
    } catch (error: any) {
      alert("Error updating status: " + error.message);
    }
  };

  const handleAddTimeSlots = async () => {
    if (!selectedSubmissionId) return;

    const validSlots = timeSlots.filter(slot => slot.date && slot.startTime && slot.endTime);
    if (validSlots.length === 0) {
      alert("Please add at least one valid time slot");
      return;
    }

    try {
      await addTimeSlotsMutation.mutateAsync({
        submissionId: selectedSubmissionId,
        timeSlots: validSlots,
      });
      alert("Time slots added successfully!");
      setTimeSlots([{ date: "", startTime: "", endTime: "" }]);
    } catch (error: any) {
      alert("Error adding time slots: " + error.message);
    }
  };

  const addTimeSlotRow = () => {
    setTimeSlots([...timeSlots, { date: "", startTime: "", endTime: "" }]);
  };

  const updateTimeSlot = (index: number, field: string, value: string) => {
    const newSlots = [...timeSlots];
    newSlots[index] = { ...newSlots[index], [field]: value };
    setTimeSlots(newSlots);
  };

  return (
    <div className="space-y-6">
      {/* Submissions List */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-[#0F3D4C] mb-4">Online Consultation Submissions</h2>

        {isLoadingSubmissions ? (
          <p className="text-gray-600">Loading submissions...</p>
        ) : !submissions || submissions.length === 0 ? (
          <p className="text-gray-600">No submissions yet.</p>
        ) : (
          <div className="space-y-2">
            {submissions.map((submission: any) => (
              <button
                key={submission.id}
                onClick={() => setSelectedSubmissionId(submission.id)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedSubmissionId === submission.id
                    ? "border-[#5DBB63] bg-[#5DBB63]/10"
                    : "border-gray-200 hover:border-[#5DBB63]"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-[#0F3D4C]">{submission.name}</p>
                    <p className="text-sm text-gray-600">{submission.email}</p>
                    <p className="text-sm text-gray-600">{submission.specificService}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    submission.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                    submission.status === "approved" ? "bg-green-100 text-green-800" :
                    submission.status === "rejected" ? "bg-red-100 text-red-800" :
                    "bg-blue-100 text-blue-800"
                  }`}>
                    {submission.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </Card>

      {/* Submission Details */}
      {selectedSubmissionId && submissionDetail && (
        <Card className="p-6">
          <h3 className="text-xl font-bold text-[#0F3D4C] mb-4">Submission Details</h3>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
              <p className="text-gray-600">{submissionDetail.submission.name}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <p className="text-gray-600">{submissionDetail.submission.email}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
              <p className="text-gray-600">{submissionDetail.submission.phone}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type</label>
              <p className="text-gray-600">{submissionDetail.submission.serviceType}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Specific Service</label>
              <p className="text-gray-600">{submissionDetail.submission.specificService}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Brief Description</label>
              <p className="text-gray-600">{submissionDetail.submission.briefDescription}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Urgency</label>
              <p className="text-gray-600 capitalize">{submissionDetail.submission.urgency}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Contact Method</label>
              <p className="text-gray-600 capitalize">{submissionDetail.submission.preferredContactMethod}</p>
            </div>
          </div>

          {/* Status Update */}
          <div className="space-y-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-[#0F3D4C]">Update Status</h4>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Status</label>
              <Select value={newStatus} onValueChange={setNewStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select new status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Admin Notes</label>
              <Textarea
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                placeholder="Add notes about this submission..."
                className="w-full"
              />
            </div>
            <Button
              onClick={handleUpdateStatus}
              disabled={!newStatus || updateStatusMutation.isPending}
              className="medimagic-button w-full"
            >
              {updateStatusMutation.isPending ? "Updating..." : "Update Status"}
            </Button>
          </div>

          {/* Time Slots */}
          {newStatus === "approved" || submissionDetail.submission.status === "approved" ? (
            <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-[#0F3D4C]">Available Time Slots</h4>
              
              {submissionDetail.timeSlots && submissionDetail.timeSlots.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Current Slots:</p>
                  {submissionDetail.timeSlots.map((slot: any) => (
                    <p key={slot.id} className="text-sm text-gray-600">
                      {slot.date} - {slot.startTime} to {slot.endTime} {slot.isBooked ? "(BOOKED)" : "(Available)"}
                    </p>
                  ))}
                </div>
              )}

              <div className="space-y-3">
                {timeSlots.map((slot, index) => (
                  <div key={index} className="grid grid-cols-3 gap-2">
                    <Input
                      type="date"
                      value={slot.date}
                      onChange={(e) => updateTimeSlot(index, "date", e.target.value)}
                      placeholder="Date"
                    />
                    <Input
                      type="time"
                      value={slot.startTime}
                      onChange={(e) => updateTimeSlot(index, "startTime", e.target.value)}
                      placeholder="Start Time"
                    />
                    <Input
                      type="time"
                      value={slot.endTime}
                      onChange={(e) => updateTimeSlot(index, "endTime", e.target.value)}
                      placeholder="End Time"
                    />
                  </div>
                ))}
              </div>

              <Button
                onClick={addTimeSlotRow}
                variant="outline"
                className="w-full"
              >
                + Add Another Slot
              </Button>

              <Button
                onClick={handleAddTimeSlots}
                disabled={addTimeSlotsMutation.isPending}
                className="medimagic-button w-full"
              >
                {addTimeSlotsMutation.isPending ? "Adding..." : "Send Time Slots to Client"}
              </Button>
            </div>
          ) : null}
        </Card>
      )}
    </div>
  );
}
