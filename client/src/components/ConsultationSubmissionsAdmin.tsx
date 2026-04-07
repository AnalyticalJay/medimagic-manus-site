import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { ChevronDown, ChevronUp, Eye, CheckCircle, XCircle } from "lucide-react";

interface Submission {
  id: number;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  specificService: string | null;
  briefDescription: string;
  urgency: "low" | "medium" | "high";
  preferredContactMethod: "email" | "phone" | "both";
  status: "pending" | "approved" | "rejected" | "scheduled" | "completed";
  createdAt: Date | string;
  adminNotes?: string | null;
}

export function ConsultationSubmissionsAdmin() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterUrgency, setFilterUrgency] = useState("all");
  const [filterService, setFilterService] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: submissions = [], isLoading, refetch } = trpc.onlineConsultation.getSubmissions.useQuery();
  const statusMutation = trpc.onlineConsultation.updateStatus.useMutation();

  // Filter submissions
  const filteredSubmissions = submissions.filter((submission: Submission) => {
    const matchesStatus = filterStatus === "all" || submission.status === filterStatus;
    const matchesUrgency = filterUrgency === "all" || submission.urgency === filterUrgency;
    const matchesService = filterService === "all" || submission.specificService === filterService;
    const matchesSearch = submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesUrgency && matchesService && matchesSearch;
  });

  // Get unique services for filter
  const uniqueServices = Array.from(new Set(submissions.map((s: Submission) => s.specificService).filter(Boolean)));

  const handleApprove = async (id: number) => {
    try {
      await statusMutation.mutateAsync({ id, status: "approved" });
      refetch();
      alert("Submission approved! You can now send time slots to the client.");
    } catch (error) {
      alert("Error approving submission");
    }
  };

  const handleReject = async (id: number) => {
    try {
      await statusMutation.mutateAsync({ id, status: "rejected" });
      refetch();
      alert("Submission rejected.");
    } catch (error) {
      alert("Error rejecting submission");
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case "high":
        return <Badge className="bg-red-100 text-red-800">High</Badge>;
      case "medium":
        return <Badge className="bg-orange-100 text-orange-800">Medium</Badge>;
      case "low":
        return <Badge className="bg-blue-100 text-blue-800">Low</Badge>;
      default:
        return <Badge>{urgency}</Badge>;
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading submissions...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#0F3D4C] mb-2">Consultation Submissions</h1>
        <p className="text-gray-600">Review and manage client consultation requests</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-sm text-gray-600">Total Submissions</div>
          <div className="text-2xl font-bold text-[#0F3D4C]">{submissions.length}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Pending Review</div>
          <div className="text-2xl font-bold text-yellow-600">
            {submissions.filter((s: Submission) => s.status === "pending").length}
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Approved</div>
          <div className="text-2xl font-bold text-green-600">
            {submissions.filter((s: Submission) => s.status === "approved").length}
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Rejected</div>
          <div className="text-2xl font-bold text-red-600">
            {submissions.filter((s: Submission) => s.status === "rejected").length}
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4 space-y-4">
        <h3 className="font-semibold text-gray-700">Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search by Name or Email</label>
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
            <Select value={filterUrgency} onValueChange={setFilterUrgency}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Urgencies</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
            <Select value={filterService} onValueChange={setFilterService}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                {uniqueServices.map((service) => (
                  <SelectItem key={service} value={service || ""}>
                    {service || "Unknown"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Submissions List */}
      <div className="space-y-3">
        {filteredSubmissions.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-gray-600">No submissions found matching your filters.</p>
          </Card>
        ) : (
          filteredSubmissions.map((submission: Submission) => (
            <Card
              key={submission.id}
              className="p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setExpandedId(expandedId === submission.id ? null : submission.id)}
            >
              {/* Submission Summary */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-[#0F3D4C]">{submission.name}</h3>
                    {getStatusBadge(submission.status)}
                    {getUrgencyBadge(submission.urgency)}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Email:</span> {submission.email}
                    </div>
                    <div>
                      <span className="font-medium">Service:</span> {submission.specificService}
                    </div>
                    <div>
                      <span className="font-medium">Date:</span>{" "}
                      {new Date(submission.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  {expandedId === submission.id ? (
                    <ChevronUp className="text-gray-400" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </div>
              </div>

              {/* Expanded Details */}
              {expandedId === submission.id && (
                <div className="mt-6 pt-6 border-t space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <p className="text-gray-600">{submission.phone}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Contact Method
                      </label>
                      <p className="text-gray-600">{submission.preferredContactMethod}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Brief Description
                    </label>
                    <p className="text-gray-600 bg-gray-50 p-3 rounded">{submission.briefDescription}</p>
                  </div>

                  {/* Action Buttons */}
                  {submission.status === "pending" && (
                    <div className="flex gap-3 pt-4">
                      <Button
                        onClick={() => handleApprove(submission.id)}
                        disabled={statusMutation.isPending}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button
                        onClick={() => handleReject(submission.id)}
                        disabled={statusMutation.isPending}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  )}

                  {submission.status === "approved" && (
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-sm text-green-800">
                        ✓ This submission has been approved. You can send available time slots to the client.
                      </p>
                    </div>
                  )}

                  {submission.status === "rejected" && (
                    <div className="bg-red-50 border border-red-200 rounded p-3">
                      <p className="text-sm text-red-800">
                        ✗ This submission has been rejected.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
