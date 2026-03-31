import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700">
            Get in touch with MediMagic. We're here to help you transform your situation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-700">contact@medimagic.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-700">
                      123 Mediation Street<br />
                      Professional Plaza<br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Ready to Get Started?
              </h2>
              
              <div className="space-y-4">
                <Button 
                  onClick={() => setLocation("/booking")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                >
                  Book a Consultation
                </Button>

                <div className="p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Prefer to Call?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Speak directly with our team about your needs and schedule an appointment.
                  </p>
                  <a 
                    href="tel:+15551234567"
                    className="text-green-600 hover:text-green-700 font-semibold"
                  >
                    Call Now →
                  </a>
                </div>

                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Send an Email
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Have questions? Send us an email and we'll respond within 24 hours.
                  </p>
                  <a 
                    href="mailto:contact@medimagic.com"
                    className="text-green-600 hover:text-green-700 font-semibold"
                  >
                    Email Us →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                How quickly can I schedule a consultation?
              </h3>
              <p className="text-gray-700">
                We typically have availability within 3-5 business days. For urgent matters, we can often accommodate same-week appointments.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you offer online consultations?
              </h3>
              <p className="text-gray-700">
                Yes, we offer both in-person and online consultations to accommodate your preferences and schedule.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                What is your cancellation policy?
              </h3>
              <p className="text-gray-700">
                We require 24 hours notice for cancellations. Cancellations made with less notice may incur a fee.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Is everything discussed confidential?
              </h3>
              <p className="text-gray-700">
                Yes, all consultations are confidential and protected by professional privilege. We maintain strict privacy standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
