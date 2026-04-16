import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import Footer from "@/components/Footer";

export default function Contact() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
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
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/medimagic_logo_main_7f8b9c2a.png" 
                alt="MediMagic Logo" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg border-4 border-white"
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

            {/* Quick Booking Card */}
            <div>
              <Card className="p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Book a consultation directly through our online booking system. Choose your preferred service, date, and time.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/20">
                        <span className="text-xs font-semibold text-accent">1</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Select Your Service</p>
                      <p className="text-sm text-muted-foreground">Choose from mediation or social work services</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/20">
                        <span className="text-xs font-semibold text-accent">2</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Choose Your Slot</p>
                      <p className="text-sm text-muted-foreground">Pick a date and time that works for you</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/20">
                        <span className="text-xs font-semibold text-accent">3</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Confirm Your Details</p>
                      <p className="text-sm text-muted-foreground">Provide your contact information</p>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center gap-2"
                  onClick={() => navigate("/booking")}
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
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
