import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/_core/hooks/useAuth";

export default function ClientPortal() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <section className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Portal</h1>
          <p className="text-lg text-gray-700">Coming soon: Booking history and rescheduling</p>
          {user && <p className="text-gray-600 mt-4">Welcome, {user.name}!</p>}
        </div>
      </section>
      <Footer />
    </div>
  );
}
