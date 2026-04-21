import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#1a3a52] via-[#2d5a7b] to-[#1a3a52]">
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-white mb-6">
                Get in Touch
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Contact MediMagic
              </h1>
              <p className="text-lg text-white/90 max-w-lg">
                Reach out to discuss your situation, ask questions, or schedule a consultation with Cornelia.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img 
                src="/manus-storage/MediMagicLogoround_9660a174.png" 
                alt="MediMagic Logo" 
                className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Let's Connect</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:corneliagriessel@medimagic.co.za" className="hover:text-accent transition-colors">
                        corneliagriessel@medimagic.co.za
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="mailto:MediMagic.Cornelia@gmail.com" className="hover:text-accent transition-colors">
                        MediMagic.Cornelia@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Response time: Within 24 hours
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+27650603592" className="hover:text-accent transition-colors">
                        065 060 3592
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available for consultations
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Port Elizabeth, South Africa
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      In-person and online consultations available
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Consultation Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Afterhours / Weekends by appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-foreground mb-4">Send us a Message</h3>
                <p className="text-muted-foreground mb-6">
                  Have a question or want to discuss your situation? Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <ContactForm />
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            {/* Section Title with Green Line and Navy Bar */}
            <div className="border-t-8 border-[#5DBB63] mb-12">
              <div className="bg-[#0F3D4C] py-6 px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Frequently Asked Questions</h2>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-3">What should I prepare for my first consultation?</h3>
                <p className="text-muted-foreground">
                  Come with an open mind and a willingness to discuss your situation. You may want to bring any relevant documents (agreements, correspondence) if applicable to your case. Most importantly, be prepared to share what you hope to achieve.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-3">How long is a typical consultation?</h3>
                <p className="text-muted-foreground">
                  Initial consultations typically last 60 minutes. This allows time to understand your situation, discuss your needs, and outline next steps. Follow-up sessions may vary in length depending on the nature of the work.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-3">What is your cancellation policy?</h3>
                <p className="text-muted-foreground">
                  Cancellations made 48 hours in advance are free. Cancellations within 48 hours may incur a cancellation fee. We understand that circumstances change, so please contact us as soon as possible if you need to reschedule.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-3">Do you offer sliding scale fees or payment plans?</h3>
                <p className="text-muted-foreground">
                  Yes, we believe everyone deserves access to professional support. Please discuss your circumstances during your initial consultation, and we can explore options that work for your situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
