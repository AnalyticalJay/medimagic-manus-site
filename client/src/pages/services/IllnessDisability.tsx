import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Heart, Users, Lightbulb, Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageWithSidebar from "@/components/ServicePageWithSidebar";

export default function IllnessDisability() {
  const [, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mediationOpen, setMediationOpen] = useState(false);
  const [socialWorkOpen, setSocialWorkOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/medimagic_logo_e9a0b25b.webp" 
              alt="MediMagic Logo"
              className="h-8 w-auto"
            />
          </button>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
            <div className="container py-4 space-y-2">
              <button onClick={() => handleNavigation("/")} className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent/10 hover:text-accent transition-colors rounded">
                Home
              </button>
              <button onClick={() => handleNavigation("/about")} className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent/10 hover:text-accent transition-colors rounded">
                About
              </button>
              
              {/* Mobile Mediation Dropdown */}
              <div className="px-4 py-2">
                <button onClick={() => setMediationOpen(!mediationOpen)} className="w-full text-left flex items-center justify-between text-foreground hover:text-accent transition-colors font-medium">
                  Mediation
                  <ChevronDown className={`w-4 h-4 transition-transform ${mediationOpen ? 'rotate-180' : ''}`} />
                </button>
                {mediationOpen && (
                  <div className="mt-2 space-y-1 pl-4 border-l-2 border-accent/30">
                    <a href="/services/divorce-settlement" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors rounded">Divorce Settlement Agreements</a>
                    <a href="/services/maintenance-agreements" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors rounded">Maintenance Agreements</a>
                    <a href="/services/parenting-plans" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors rounded">Parenting Plans</a>
                    <a href="/services/voice-of-child" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors rounded">Voice of the Child</a>
                  </div>
                )}
              </div>
              
              {/* Mobile Social Work Dropdown */}
              <div className="px-4 py-2">
                <button onClick={() => setSocialWorkOpen(!socialWorkOpen)} className="w-full text-left flex items-center justify-between text-foreground hover:text-accent transition-colors font-medium">
                  Social Work
                  <ChevronDown className={`w-4 h-4 transition-transform ${socialWorkOpen ? 'rotate-180' : ''}`} />
                </button>
                {socialWorkOpen && (
                  <div className="mt-2 space-y-1 pl-4 border-l-2 border-accent/30">
                    <a href="/services/adult-divorce-preparation" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors rounded">Adult Divorce Preparation</a>
                    <a href="/services/illness-disability" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors rounded">Illness & Disability Support</a>
                    <a href="/services/palliative-care" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors rounded">Palliative & End-of-Life Care</a>
                    <a href="/services/health-education" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors rounded">Health Education & Promotion</a>
                  </div>
                )}
              </div>
              
              <button onClick={() => handleNavigation("/contact")} className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent/10 hover:text-accent transition-colors rounded">
                Contact
              </button>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4" onClick={() => handleNavigation("/booking")}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Social Work Services', href: '/#social-work' },
        { label: 'Illness & Disability Support' },
      ]} />

      {/* Hero Section */}
      <section className="medimagic-hero py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="bg-[#5DBB63] rounded-2xl sm:rounded-3xl px-3 py-2 inline-block mb-4 sm:mb-8">
                <h3 className="text-sm sm:text-base font-bold text-white">SOCIAL WORK SERVICE</h3>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Illness and Disability Support:
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8">
                Compassionate support to help individuals and families adjust to illness or disability while maintaining dignity and quality of life.
              </p>
            </div>

            {/* Service Image */}
            <div className="flex justify-center mt-8 lg:mt-0">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/illness-disability-BUDZwUcbhbA5Z3fUUjjZHQ.webp" 
                alt="Illness & Disability Support" 
                className="w-full max-w-lg sm:max-w-xl h-auto max-h-96 object-cover rounded-2xl sm:rounded-3xl shadow-lg border-4 border-[#5DBB63]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <ServicePageWithSidebar
        category="social-work"
        currentService="Illness & Disability"
        services={[
          { name: "Divorce Preparation and Counselling", path: "/services/adult-divorce-prep" },
          { name: "Illness & Disability", path: "/services/illness-disability" },
          { name: "Palliative Care", path: "/services/palliative-care" },
          { name: "Health Education", path: "/services/health-education" },
        ]}
      >
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Supporting You Through Health Challenges</h2>
            <p className="text-lg text-muted-foreground">
              A diagnosis of serious illness or the onset of disability can be life-changing—not just medically, but emotionally, socially, and practically. At MediMagic, our Illness & Disability Support service provides comprehensive social work support to help individuals and families navigate these profound transitions with dignity, resilience, and hope.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">What Is Illness & Disability Support?</h3>
            <p className="text-muted-foreground mb-4">
              Illness & Disability Support is a professional social work service that helps individuals and families process the emotional impact of health challenges, develop practical coping strategies, and build resilience. We address emotional wellbeing, practical adjustments, family dynamics, and life planning.
            </p>
            <p className="text-muted-foreground">
              This service acknowledges that illness and disability affect not just physical health, but your entire life—and we're here to help you adapt and thrive.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Areas We Support</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Emotional Processing</h4>
                  <p className="text-sm text-muted-foreground">Working through grief, fear, anger, and adjustment to life with illness or disability.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Practical Adjustments</h4>
                  <p className="text-sm text-muted-foreground">Strategies for managing daily living, work, relationships, and healthcare navigation.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Family Support</h4>
                  <p className="text-sm text-muted-foreground">Helping families communicate, adapt, and support each other through health challenges.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Life Planning & Resilience</h4>
                  <p className="text-sm text-muted-foreground">Building resilience and creating meaningful life plans despite health limitations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="pt-8">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/illness-disability-content-LYZMPav9drhb22dCT5ncBa.webp" 
              alt="Healthcare support and compassionate care" 
              className="w-full max-w-md h-auto rounded-2xl border-4 border-[#5DBB63]"
            />
          </div>

          <Card className="p-8 bg-accent/5 border border-accent/20">
            <h3 className="text-xl font-bold text-foreground mb-4">Our Holistic Approach</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Person-centered:</strong> Respecting your values and goals</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Holistic:</strong> Addressing emotional, practical, and social aspects</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Empowering:</strong> Strengthening your sense of control and resilience</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Practical:</strong> Actionable strategies you can implement</span>
              </li>
            </ul>
          </Card>

          <Button 
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg"
            onClick={() => navigate("/booking")}
          >
            Book a Consultation
          </Button>
        </div>
      </ServicePageWithSidebar>

      {/* The Support Process */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Your Health Support Journey</h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-6 md:gap-6 md:gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Initial Assessment</h3>
                <p className="text-muted-foreground">Understanding your health situation, challenges, and goals for support.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Emotional Support</h3>
                <p className="text-muted-foreground">Processing emotions and developing healthy coping strategies.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Practical Planning</h3>
                <p className="text-muted-foreground">Developing strategies for daily living, work, and healthcare management.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground">Continued support as you navigate your health journey with resilience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Benefits of Illness & Disability Support</h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-6 md:gap-6 md:gap-8">
            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/benefit_emotional_support_icon_f6013bdb.png" alt="Emotional Support" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Emotional Healing</h3>
              <p className="text-muted-foreground">Process difficult emotions in a safe, supportive environment with professional guidance.</p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/benefit_practical_planning_icon_75cd656d.png" alt="Practical Planning" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Practical Strategies</h3>
              <p className="text-muted-foreground">Develop actionable plans for managing daily challenges and healthcare navigation.</p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/benefit_social_reintegration_icon_0d42095e.png" alt="Social Reintegration" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Family Support</h3>
              <p className="text-muted-foreground">Supporting families to stay connected and communicate effectively through health challenges.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a3a52]">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Navigate Your Health Journey with Support?</h2>
          <p className="text-lg text-white/90 mb-8">
            Let us help you adapt and thrive. Book a consultation with Cornelia today.
          </p>
          <button 
            className="medimagic-button"
            onClick={() => navigate("/booking")}
          >
            Book Your Consultation Now
          </button>
        </div>
      </section>
    </div>
  );
}
