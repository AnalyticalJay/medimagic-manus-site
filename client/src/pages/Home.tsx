import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Users, BookOpen, Lightbulb } from "lucide-react";

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  const handleBooking = () => {
    setLocation("/booking");
  };

  const mediationServices = [
    { name: "Divorce Settlement", path: "/services/divorce-settlement" },
    { name: "Maintenance Agreements", path: "/services/maintenance-agreements" },
    { name: "Parenting Plans", path: "/services/parenting-plans" },
    { name: "Voice of Child", path: "/services/voice-of-child" },
  ];

  const socialWorkServices = [
    { name: "Adult Divorce Prep", path: "/services/adult-divorce-prep" },
    { name: "Illness & Disability", path: "/services/illness-disability" },
    { name: "Palliative Care", path: "/services/palliative-care" },
    { name: "Health Education", path: "/services/health-education" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
                SCARS to STARS
              </h1>
              <p className="text-xl text-gray-600">
                Transforming Challenges into Opportunities
              </p>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Professional mediation and social work services dedicated to helping families navigate life's most challenging transitions with compassion, expertise, and proven results.
            </p>
            <Button 
              onClick={handleBooking}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            >
              Book Your Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Mediation Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Mediation Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Expert mediation to help resolve family disputes and create lasting agreements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediationServices.map((service) => (
              <div 
                key={service.name}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setLocation(service.path)}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600">
                  Professional mediation services tailored to your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Work Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Social Work Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive support for health, wellness, and life transitions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialWorkServices.map((service) => (
              <div 
                key={service.name}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow cursor-pointer bg-white"
                onClick={() => setLocation(service.path)}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600">
                  Compassionate social work support for your wellbeing.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose MediMagic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Compassionate Care
              </h3>
              <p className="text-gray-600">
                We understand your challenges and provide empathetic support.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Highly qualified professionals with years of experience.
              </p>
            </div>
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Proven Methods
              </h3>
              <p className="text-gray-600">
                Evidence-based approaches that deliver real results.
              </p>
            </div>
            <div className="text-center">
              <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Personalized Solutions
              </h3>
              <p className="text-gray-600">
                Tailored services designed for your unique situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Situation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Take the first step towards positive change. Schedule your consultation today.
          </p>
          <Button 
            onClick={handleBooking}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
