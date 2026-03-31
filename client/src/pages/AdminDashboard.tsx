import { useState, useMemo } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Filter, RefreshCw, ChevronLeft, LogOut } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SERVICE_TYPES = [
  "Divorce Settlement Agreements",
  "Maintenance Agreements",
  "Parenting Plans",
  "Voice of the Child",
  "Adult Divorce Preparation",
  "Illness & Disability Support",
  "Palliative & End-of-Life Care",
  "Health Education & Promotion",
];

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const [, setLocation] = useLocation();
  const [filterService, setFilterService] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [selectedBookingId, setSelectedBookingId] = useState<number | null>(null);
  const [newStatus, setNewStatus] = useState<string>("");
  
  // Logout mutation
  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      setLocation("/");
    },
  });

  // Query all bookings
  const { data: allBookings = [], isLoading: loadingBookings, refetch } = trpc.bookings.list.useQuery();

  // Mutations
  const updateStatusMutation = trpc.bookings.updateStatus.useMutation({
    onSuccess: () => {
      refetch();
      setSelectedBookingId(null);
      setNewStatus("");
    },
  });

  // Determine which bookings to display
  const displayBookings = useMemo(() => {
    let bookings = allBookings;

    if (filterService && filterService !== "") {
      bookings = bookings.filter((b: any) => b.serviceType === filterService);
    }

    if (filterStatus && filterStatus !== "") {
      bookings = bookings.filter((b: any) => b.status === filterStatus);
    }

    return bookings;
  }, [allBookings, filterStatus, filterService]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex justify-center items-center min-h-[60vh]">Loading...</div>
        <Footer />
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex justify-center items-center min-h-[60vh]">
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-bold text-[#0F3D4C] mb-4">Access Denied</h1>
            <p className="text-gray-600 mb-6">You do not have permission to access this page.</p>
            <Button onClick={() => setLocation("/")} className="bg-[#5DBB63] hover:bg-[#4a9a52]">
              Return to Home
            </Button>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => setLocation("/")}
              className="flex items-center text-[#5DBB63] hover:text-[#4a9a52] mb-4 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-[#0F3D4C] mb-2">Admin Dashboard</h1>
                <p className="text-gray-600">Manage bookings and view analytics</p>
              </div>
              <button
                onClick={() => logoutMutation.mutate()}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>

        {/* Filters Section */}
        <Card className="p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-accent" />
            <h2 className="text-xl font-bold text-foreground">Filters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Service Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Service Type</label>
              <Select value={filterService} onValueChange={setFilterService}>
                <SelectTrigger>
                  <SelectValue placeholder="All Services" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Services</SelectItem>
                  {SERVICE_TYPES.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Status</label>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Button
              onClick={() => refetch()}
              variant="outline"
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
            <Button
              onClick={() => {
                setFilterService("");
                setFilterStatus("");
              }}
              variant="ghost"
            >
              Clear Filters
            </Button>
          </div>
        </Card>

        {/* Bookings Table */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Bookings ({displayBookings.length})</h2>

          {loadingBookings ? (
            <div className="text-center py-8 text-muted-foreground">Loading bookings...</div>
          ) : displayBookings.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">No bookings found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Email</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Service</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Time</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {displayBookings.map((booking: any) => (
                    <tr key={booking.id} className="border-b border-border hover:bg-card/50 transition">
                      <td className="py-3 px-4 text-foreground">{booking.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{booking.email}</td>
                      <td className="py-3 px-4 text-muted-foreground text-xs max-w-xs truncate">
                        {booking.serviceType}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {booking.preferredDate}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{booking.preferredTime}</td>
                      <td className="py-3 px-4 text-muted-foreground">
                        <Badge variant="outline">{booking.consultationType}</Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={STATUS_COLORS[booking.status] || "bg-gray-100 text-gray-800"}>
                          {booking.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        {selectedBookingId === booking.id ? (
                          <div className="flex gap-2">
                            <Select value={newStatus} onValueChange={setNewStatus}>
                              <SelectTrigger className="w-32">
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="confirmed">Confirmed</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button
                              size="sm"
                              onClick={() => {
                                if (newStatus) {
                                  updateStatusMutation.mutate({
                                    id: booking.id,
                                    status: newStatus as "pending" | "confirmed" | "completed" | "cancelled",
                                  });
                                }
                              }}
                              disabled={!newStatus || updateStatusMutation.isPending}
                            >
                              Save
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => {
                                setSelectedBookingId(null);
                                setNewStatus("");
                              }}
                            >
                              Cancel
                            </Button>
                          </div>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setSelectedBookingId(booking.id);
                              setNewStatus(booking.status);
                            }}
                          >
                            Update Status
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
