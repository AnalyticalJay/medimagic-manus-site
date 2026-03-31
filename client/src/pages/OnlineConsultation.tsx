import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { OnlineConsultationForm } from "@/components/OnlineConsultationForm";
import { PageTransition } from "@/components/PageTransition";

export default function OnlineConsultation() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="medimagic-hero py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Online Consultation Request
            </h1>
            <p className="text-lg text-white/90 mb-8 drop-shadow-md">
              Request a professional online consultation with Cornelia. Fill out the form below with details about your situation, and she will review your request to determine if an online consultation is appropriate for your needs.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D4C] mb-4">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#5DBB63] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-[#0F3D4C] mb-2">Submit Request</h3>
                  <p className="text-gray-600">Fill out the consultation request form with details about your situation.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#5DBB63] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-[#0F3D4C] mb-2">Review & Approval</h3>
                  <p className="text-gray-600">Cornelia will review your submission and determine if an online consultation is suitable.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#5DBB63] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-[#0F3D4C] mb-2">Book Your Slot</h3>
                  <p className="text-gray-600">If approved, you'll receive available time slots to select from.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <OnlineConsultationForm />

            {/* FAQ Section */}
            <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#0F3D4C] mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-[#5DBB63] pl-4">
                  <h4 className="font-semibold text-[#0F3D4C] mb-2">How long does it take to get a response?</h4>
                  <p className="text-gray-600">Cornelia typically reviews submissions within 2-3 business days and will contact you with her decision.</p>
                </div>

                <div className="border-l-4 border-[#5DBB63] pl-4">
                  <h4 className="font-semibold text-[#0F3D4C] mb-2">What if my request is not approved?</h4>
                  <p className="text-gray-600">If an online consultation is not suitable for your situation, Cornelia will explain why and may suggest alternative options or in-person services.</p>
                </div>

                <div className="border-l-4 border-[#5DBB63] pl-4">
                  <h4 className="font-semibold text-[#0F3D4C] mb-2">What platform will be used for the consultation?</h4>
                  <p className="text-gray-600">Cornelia will use a secure, professional video conferencing platform. Details will be provided once you book your time slot.</p>
                </div>

                <div className="border-l-4 border-[#5DBB63] pl-4">
                  <h4 className="font-semibold text-[#0F3D4C] mb-2">Is my information confidential?</h4>
                  <p className="text-gray-600">Yes, all information provided is strictly confidential and protected by professional privilege. Your privacy is our priority.</p>
                </div>

                <div className="border-l-4 border-[#5DBB63] pl-4">
                  <h4 className="font-semibold text-[#0F3D4C] mb-2">Can I reschedule if the time slot doesn't work?</h4>
                  <p className="text-gray-600">If you need to reschedule, please contact Cornelia as soon as possible. She will do her best to accommodate alternative times.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
