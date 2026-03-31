import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { useEffect } from "react";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      setLocation("/");
    }
  }, [user, setLocation]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <section className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
          <p className="text-lg text-gray-700">Coming soon: Booking management and availability configuration</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
