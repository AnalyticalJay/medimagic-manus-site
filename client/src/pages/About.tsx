import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Menu, X, ChevronDown, Heart, Award, Lightbulb, Users } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import Footer from "@/components/Footer";

export default function About() {
  const [, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border header-shadow">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/medimagic_logo_e9a0b25b.webp" 
              alt="MediMagic Logo"
              className="h-8 w-auto"
            />
          </button>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate("/")} className="text-foreground hover:text-accent transition-colors">Home</button>
            <button onClick={() => navigate("/about")} className="text-foreground hover:text-accent transition-colors font-semibold text-accent">About</button>
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                Mediation
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-background border border-border rounded-lg shadow-2xl hover:drop-shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/services/divorce-settlement" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Divorce Settlement Agreements</a>
                  <a href="/services/maintenance-agreements" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Maintenance Agreements</a>
                  <a href="/services/parenting-plans" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Parenting Plans</a>
                  <a href="/services/voice-of-child" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Voice of the Child</a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                Social Work
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-background border border-border rounded-lg shadow-2xl hover:drop-shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/services/adult-divorce-preparation" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Adult Divorce Preparation</a>
                  <a href="/services/illness-disability" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Illness & Disability Support</a>
                  <a href="/services/palliative-care" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Palliative & End-of-Life Care</a>
                  <a href="/services/health-education" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Health Education & Promotion</a>
                </div>
              </div>
            </div>
            <button onClick={() => navigate("/contact")} className="text-foreground hover:text-accent transition-colors">Contact</button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => navigate("/booking")}>
              Get Started
            </Button>
          </div>
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

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
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/years_experience_icon_fe223172.png" alt="Years of Experience" className="w-20 h-20" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Years of Experience</p>
                </Card>

                <Card className="p-6 bg-accent/5 border border-accent/20 text-center">
                  <div className="flex justify-center mb-3">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/clients_served_icon_ce9224fc.png" alt="Clients Served" className="w-20 h-20" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Clients Supported</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <ScrollAnimationWrapper animationType="slide-up" delay={100}>
          <div className="container max-w-6xl">
          {/* Section Title with Green Line and Navy Bar */}
          <div className="border-t-8 border-[#5DBB63] mb-12">
            <div className="bg-[#0F3D4C] py-6 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Core Values & Approach</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/compassion_icon_85090b26.png" alt="Compassion" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Compassion & Care</h3>
              <p className="text-muted-foreground">
                Every client is treated with dignity, respect, and genuine care. Cornelia creates a safe, non-judgmental space where clients feel heard and supported.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/collaboration_icon_0cc1666f.png" alt="Collaboration" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                Working together with clients to find solutions that work for everyone involved, building consensus and mutual understanding.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/clarity_icon_cbf87caa.png" alt="Clarity" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Clarity</h3>
              <p className="text-muted-foreground">
                Clear communication and transparent processes ensure clients understand their options and make informed decisions with confidence.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/support_icon_b58b6f9b.png" alt="Support" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Support</h3>
              <p className="text-muted-foreground">
                Holistic support that addresses both the practical and emotional aspects of life transitions, ensuring clients feel cared for throughout the process.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/ChatGPTImageApr17,2026,05_50_14PM_70226ed4.png" alt="Integrated Approach" className="w-24 h-24" style={{backgroundPosition: '0 0', backgroundSize: '300%', backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/ChatGPTImageApr17,2026,05_50_14PM_70226ed4.png)', backgroundRepeat: 'no-repeat'}} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Integrated Approach</h3>
              <p className="text-muted-foreground">
                A balanced approach that supports clear, practical decisions while also caring for the people navigating them.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/ChatGPTImageApr17,2026,05_50_14PM_70226ed4.png" alt="Professional Excellence" className="w-24 h-24" style={{backgroundPosition: '-100% 0', backgroundSize: '300%', backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/ChatGPTImageApr17,2026,05_50_14PM_70226ed4.png)', backgroundRepeat: 'no-repeat'}} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Professional Excellence</h3>
              <p className="text-muted-foreground">
                Bound by strict professional ethical codes and regulatory standards. Continuous professional development ensures current, evidence-based practice.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/ChatGPTImageApr17,2026,05_50_14PM_70226ed4.png" alt="Client-Centred Care" className="w-24 h-24" style={{backgroundPosition: '-200% 0', backgroundSize: '300%', backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/ChatGPTImageApr17,2026,05_50_14PM_70226ed4.png)', backgroundRepeat: 'no-repeat'}} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Client-Centred Care</h3>
              <p className="text-muted-foreground">
                Every client's unique circumstances, values, and needs are central to the process. Solutions are tailored to individual situations, not one-size-fits-all.
              </p>
            </Card>
          </div>
        </div>
        </ScrollAnimationWrapper>
      </section>

      {/* Why Choose Cornelia Section */}
      <section className="py-16 md:py-24 bg-background">
        <ScrollAnimationWrapper animationType="fade-in" delay={150}>
          <div className="container max-w-6xl">
            {/* Section Title with Green Line and Navy Bar */}
          <div className="border-t-8 border-[#5DBB63] mb-12">
            <div className="bg-[#0F3D4C] py-6 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Areas of Expertise</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-l-4 border-l-accent">
              <h3 className="text-xl font-bold text-foreground mb-4">Family Law Mediation</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Divorce settlements</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Maintenance agreements</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Parenting plans</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Child advocacy</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-l-4 border-l-accent">
              <h3 className="text-xl font-bold text-foreground mb-4">Medical Social Work</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Illness support</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Disability counselling</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">End-of-life care</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Health education</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-l-4 border-l-accent">
              <h3 className="text-xl font-bold text-foreground mb-4">Life Transitions</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Divorce preparation</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Emotional support</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Crisis counselling</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Wellness coaching</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
        </ScrollAnimationWrapper>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#1a3a52]">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Cornelia?</h2>
          <p className="text-lg text-white/90 mb-8">
            Schedule a consultation to discuss your needs and explore how MediMagic's integrated approach can support you through your life transition.
          </p>
          <button 
            className="medimagic-button"
            onClick={() => navigate("/booking")}
          >
            Book a Consultation
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
