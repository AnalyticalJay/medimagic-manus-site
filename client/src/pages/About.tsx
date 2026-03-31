import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="medimagic-hero py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Cornelia
          </h1>
          <p className="text-lg text-gray-100">
            Meet the founder and lead professional behind MediMagic
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <span className="text-gray-500">Professional Photo</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">
                Cornelia - Founder & Lead Professional
              </h2>
              <p className="text-gray-700 mb-4">
                With over 15 years of experience in mediation and social work, Cornelia has dedicated her career to helping families navigate life's most challenging transitions. Her compassionate approach combined with professional expertise has transformed countless lives.
              </p>
              <p className="text-gray-700 mb-4">
                Cornelia founded MediMagic with a simple mission: to provide accessible, professional mediation and social work services that help people transform challenges into opportunities for growth.
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="mb-12">
            <h3 className="medimagic-section-title mb-8">
              Qualifications & Credentials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="medimagic-card p-6">
                <h4 className="font-semibold text-[#1a3a52] mb-4">Education</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Master's Degree in Social Work</li>
                  <li>• Certification in Family Mediation</li>
                  <li>• Advanced Training in Conflict Resolution</li>
                </ul>
              </div>
              <div className="medimagic-card p-6">
                <h4 className="font-semibold text-[#1a3a52] mb-4">Professional Affiliations</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Registered Social Worker</li>
                  <li>• Certified Mediator</li>
                  <li>• Member of Professional Mediation Association</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mb-12">
            <h3 className="medimagic-section-title mb-6">
              Our Philosophy: SCARS to STARS
            </h3>
            <p className="text-gray-700 mb-4">
              The SCARS to STARS approach represents our core belief that challenges can be transformed into opportunities. Just as a scar shows where healing has occurred, we help individuals and families turn their difficult experiences into strength, resilience, and positive growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="medimagic-card p-6 bg-blue-50">
                <h4 className="font-semibold text-[#1a3a52] mb-3">SCARS Represents:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Separation challenges</li>
                  <li>• Conflict and complexity</li>
                  <li>• Adjustment difficulties</li>
                  <li>• Relationship stress</li>
                </ul>
              </div>
              <div className="medimagic-card p-6 bg-green-50">
                <h4 className="font-semibold text-[#1a3a52] mb-3">STARS Represents:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Strength and resilience</li>
                  <li>• Transformation and growth</li>
                  <li>• Agreements and solutions</li>
                  <li>• Resolution and success</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">
              Ready to Transform Your Situation?
            </h3>
            <button 
              onClick={() => setLocation("/booking")}
              className="medimagic-button"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
