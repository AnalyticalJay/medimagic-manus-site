import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Heart, Award, Lightbulb, Users } from "lucide-react";
import { useLocation } from "wouter";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section with Professional Image */}
      <section className="medimagic-hero py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="bg-[#5DBB63] rounded-2xl sm:rounded-3xl px-3 py-2 inline-block mb-4 sm:mb-8">
              <h3 className="text-sm sm:text-base font-bold text-white">ABOUT OUR TEAM</h3>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Cornelia Griessel
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-100">
              NABFAM Accredited Mediator, SACSSP Registered Social Worker, Masters Degree holder with 20+ years of experience in family mediation, medical social work, and family-centred practice.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column: Biography */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Professional Journey</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Cornelia is a uniquely qualified professional with dual expertise in family law mediation and social work. With over 20 years of experience, she has dedicated her career to supporting individuals and families through complex life transitions with compassion, structure, and professionalism.
                </p>
                <p className="text-lg text-muted-foreground">
                  Her integrated approach combines the practical, fair-minded structure of mediation with the emotional intelligence and holistic support of social work—addressing both the decisions that need to be made and the emotional realities that accompany them.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Professional Qualifications</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/accreditation_icon_c452b9ba.png" alt="Accreditation" className="w-16 h-16 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">NABFAM Accredited Mediator</h4>
                      <p className="text-muted-foreground">Accredited by the National Accreditation Board for Family Mediators through the Social Justice Association (SJA), with active membership in the South African Association of Mediators (SAAM) and the Mediation Society of South Africa (MSSA).</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/registration_icon_ee223c9e.png" alt="Registration" className="w-16 h-16 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">SACSSP Registered Social Worker</h4>
                      <p className="text-muted-foreground">Registered as a Social Worker with the South African Council for Social Service Professions (SACSSP), and a member of the South African Association of Social Workers in Private Practice (SAASWIPP).</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/education_icon_c63705a3.png" alt="Education" className="w-16 h-16 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Additional Qualifications & Professional Development</h4>
                      <p className="text-muted-foreground">Master's Degree in Early Childhood Intervention, qualified Facilitator and Assessor, and registered Voice of the Child Practitioner—reflecting specialised expertise and a continued commitment to excellence in social work and family support services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Image and Key Stats */}
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden shadow-2xl hover:shadow-2xl hover:drop-shadow-lg transition-all border-4 border-[#5DBB63]">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/corniliaimage_e720662f.jpeg"
                  alt="Cornelia Griessel - Professional Portrait"
                  className="w-full h-auto"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-accent/5 border border-accent/20 text-center">
                  <div className="flex justify-center mb-3">
                    <img src="/manus-storage/20-years-icon_6fe71d69.png" alt="Years of Experience" className="w-24 h-24" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Years of Experience</p>
                </Card>

                <Card className="p-6 bg-accent/5 border border-accent/20 text-center">
                  <div className="flex justify-center mb-3">
                    <img src="/manus-storage/1k-clients-icon_bb5a4044.png" alt="Clients Supported" className="w-24 h-24" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Clients Supported</p>
                </Card>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <ScrollAnimationWrapper>
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">CORE VALUES & APPROACH</h2>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/compassion-care-icon_c2b8f2c7.png" alt="Compassion & Care" className="w-24 h-24" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Compassion & Care</h3>
                  <p className="text-sm text-muted-foreground">Genuine empathy and respect for each person's unique journey and emotional experience.</p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/collaboration-icon_2c7a9c5c.png" alt="Collaboration" className="w-24 h-24" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">Working together with all parties to find solutions that honour everyone's needs and values.</p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/clarity-icon_a1c8f3e2.png" alt="Clarity" className="w-24 h-24" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Clarity</h3>
                  <p className="text-sm text-muted-foreground">Clear communication and transparent processes that help people understand their options and outcomes.</p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/support-icon_f4b9d2a1.png" alt="Support" className="w-24 h-24" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Support</h3>
                  <p className="text-sm text-muted-foreground">Holistic support that addresses both practical decisions and emotional wellbeing throughout transitions.</p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/integrated-approach-icon_e3d7c1b5.png" alt="Integrated Approach" className="w-24 h-24" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Integrated Approach</h3>
                  <p className="text-sm text-muted-foreground">A balanced approach that supports clear, practical decisions while also caring for the people navigating them.</p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Why Choose Cornelia */}
          <ScrollAnimationWrapper>
            <div className="bg-gradient-to-r from-[#5DBB63]/10 to-[#1a3a52]/10 rounded-lg p-8 md:p-12 mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Why Choose Cornelia</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Check className="w-6 h-6 text-[#5DBB63] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Dual Expertise</h3>
                      <p className="text-muted-foreground">Combines mediation and social work for comprehensive, holistic support.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Check className="w-6 h-6 text-[#5DBB63] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Extensive Experience</h3>
                      <p className="text-muted-foreground">20+ years supporting individuals and families through complex transitions.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Check className="w-6 h-6 text-[#5DBB63] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Professional Accreditation</h3>
                      <p className="text-muted-foreground">NABFAM accredited mediator and SACSSP registered social worker.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Check className="w-6 h-6 text-[#5DBB63] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Child-Centred Practice</h3>
                      <p className="text-muted-foreground">Registered Voice of the Child Practitioner prioritizing children's wellbeing.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Check className="w-6 h-6 text-[#5DBB63] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Confidential & Safe</h3>
                      <p className="text-muted-foreground">All sessions are strictly confidential and protected by professional privilege.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Check className="w-6 h-6 text-[#5DBB63] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Flexible Options</h3>
                      <p className="text-muted-foreground">Online and in-person consultations tailored to your needs and schedule.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* CTA Section */}
          <ScrollAnimationWrapper>
            <div className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a consultation with Cornelia to discuss your situation and explore how her integrated approach can support you and your family.
              </p>
              <Button 
                size="lg" 
                className="bg-[#5DBB63] hover:bg-[#4a9a52] text-white"
                onClick={() => navigate("/booking")}
              >
                Book a Consultation
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
}
