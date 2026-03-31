import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Calendar, Clock, MapPin, User, LogOut } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";

export default function UserDashboard() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<"bookings" | "profile">("bookings");

  // Fetch user bookings - using list for now since getUserBookings requires userId
  const { data: allBookings = [], isLoading: bookingsLoading } = trpc.bookings.list.useQuery();
  
  // Filter bookings by user email
  const bookings = allBookings.filter((booking: any) => booking.email === user?.email);

  // Logout mutation
  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      setLocation("/");
    },
  });

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#0F3D4C] mb-4">Access Denied</h1>
            <p className="text-gray-600 mb-6">Please log in to access your dashboard</p>
            <Button onClick={() => setLocation("/")} className="bg-[#5DBB63] hover:bg-[#4a9a52]">
              Return to Home
            </Button>
          </div>
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
            <h1 className="text-4xl font-bold text-[#0F3D4C] mb-2">Welcome, {user.name}</h1>
            <p className="text-gray-600">Manage your bookings and profile</p>
          </div>

          {/* Dashboard Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-white">
                <div className="space-y-4">
                  <button
                    onClick={() => setActiveTab("bookings")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeTab === "bookings"
                        ? "bg-[#5DBB63] text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <Calendar className="w-4 h-4 inline mr-2" />
                    My Bookings
                  </button>
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeTab === "profile"
                        ? "bg-[#5DBB63] text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <User className="w-4 h-4 inline mr-2" />
                    My Profile
                  </button>
                  <button
                    onClick={() => logoutMutation.mutate()}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 text-red-600 transition-all"
                  >
                    <LogOut className="w-4 h-4 inline mr-2" />
                    Logout
                  </button>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === "bookings" && (
                <div>
                  <h2 className="text-2xl font-bold text-[#0F3D4C] mb-6">My Bookings</h2>
                  {bookingsLoading ? (
                    <div className="text-center py-12">
                      <p className="text-gray-600">Loading your bookings...</p>
                    </div>
                  ) : bookings && bookings.length > 0 ? (
                    <div className="space-y-4">
                      {bookings.map((booking: any) => (
                        <Card key={booking.id} className="p-6 bg-white hover:shadow-lg transition-shadow">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-[#0F3D4C]">{booking.serviceType}</h3>
                              <p className="text-gray-600 text-sm mt-1">
                                Status:{" "}
                                <span
                                  className={`font-semibold ${
                                    booking.status === "confirmed"
                                      ? "text-green-600"
                                      : booking.status === "cancelled"
                                      ? "text-red-600"
                                      : booking.status === "completed"
                                      ? "text-blue-600"
                                      : "text-yellow-600"
                                  }`}
                                >
                                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                </span>
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-600">Booking ID: {booking.id}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center text-gray-700">
                              <Calendar className="w-4 h-4 mr-2 text-[#5DBB63]" />
                              <span>{booking.preferredDate}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <Clock className="w-4 h-4 mr-2 text-[#5DBB63]" />
                              <span>{booking.preferredTime}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <MapPin className="w-4 h-4 mr-2 text-[#5DBB63]" />
                              <span>{booking.consultationType}</span>
                            </div>
                            <div className="text-gray-700">
                              <span className="font-semibold">Contact:</span> {booking.email}
                            </div>
                          </div>

                          {booking.message && (
                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                              <p className="text-sm text-gray-600">
                                <span className="font-semibold">Message:</span> {booking.message}
                              </p>
                            </div>
                          )}

                          <div className="flex gap-2">
                            {booking.status === "pending" && (
                              <>
                                <Button className="bg-[#5DBB63] hover:bg-[#4a9a52]">Reschedule</Button>
                                <Button variant="outline">Cancel</Button>
                              </>
                            )}
                            {booking.status === "confirmed" && (
                              <Button variant="outline">View Details</Button>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="p-12 bg-white text-center">
                      <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">You haven't made any bookings yet</p>
                      <Button
                        onClick={() => setLocation("/booking")}
                        className="bg-[#5DBB63] hover:bg-[#4a9a52]"
                      >
                        Book a Consultation
                      </Button>
                    </Card>
                  )}
                </div>
              )}

              {activeTab === "profile" && (
                <div>
                  <h2 className="text-2xl font-bold text-[#0F3D4C] mb-6">My Profile</h2>
                  <Card className="p-8 bg-white">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                        <p className="text-lg text-gray-900">{user.name || "Not provided"}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <p className="text-lg text-gray-900">{user.email || "Not provided"}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Member Since</label>
                        <p className="text-lg text-gray-900">
                          {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Unknown"}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Sign In</label>
                        <p className="text-lg text-gray-900">
                          {user.lastSignedIn ? new Date(user.lastSignedIn).toLocaleDateString() : "Unknown"}
                        </p>
                      </div>
                      <div className="pt-6 border-t">
                        <Button variant="outline" className="text-gray-700">
                          Edit Profile
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
