import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Ear, Shield, Heart, Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageWithSidebar from "@/components/ServicePageWithSidebar";

export default function VoiceOfChild() {
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
        { label: 'Mediation Services', href: '/#mediation' },
        { label: 'Voice of the Child Assessments' },
      ]} />

      {/* Hero Section */}
      <section className="medimagic-hero py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="bg-[#5DBB63] rounded-2xl sm:rounded-3xl px-3 py-2 inline-block mb-4 sm:mb-8">
                <h3 className="text-sm sm:text-base font-bold text-white">MEDIATION SERVICE</h3>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Voice of the Child
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8">
                A thoughtfully facilitated outcome of mediation, capturing the child’s views and needs to guide decisions in their best interests.
              </p>
            </div>

            {/* Service Image */}
            <div className="flex justify-center mt-8 lg:mt-0">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/pasted_file_Nj9mcO_Voiceofchildinterviews_d8b25c08.png" 
                alt="Voice of the Child Practitioner" 
                className="w-full max-w-lg sm:max-w-xl h-auto rounded-2xl sm:rounded-3xl shadow-lg border-4 border-[#5DBB63]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <ServicePageWithSidebar
        category="mediation"
        currentService="Voice of the Child"
        services={[
          { name: "Divorce Settlement Agreements", path: "/services/divorce-settlement" },
          { name: "Parenting Plans", path: "/services/parenting-plans" },
          { name: "Maintenance Agreements", path: "/services/maintenance-agreements" },
          { name: "Voice of the Child", path: "/services/voice-of-child" },
        ]}
      >
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Ensuring Children's Voices Are Heard</h2>
            <p className="text-lg text-muted-foreground">
              When parents separate or divorce, children are often affected by decisions made about their future. At MediMagic, we believe children's perspectives matter. Our "Voice of the Child" service ensures that children's wishes, concerns, and needs are professionally gathered and considered in mediation and decision-making processes.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">What Is Voice of the Child?</h3>
            <p className="text-muted-foreground mb-4">
              Voice of the Child is a professional service where a trained mediator or social worker meets with children in a safe, neutral environment to understand their perspectives, preferences, and concerns regarding family arrangements. This information is then shared with parents and incorporated into mediation discussions.
            </p>
            <p className="text-muted-foreground">
              The process is age-appropriate, non-directive, and designed to empower children while protecting their emotional wellbeing.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">How We Listen to Children</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Safe & Confidential Meetings</h4>
                  <p className="text-sm text-muted-foreground">Individual sessions with children in a comfortable, neutral environment where they feel safe to express themselves.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Age-Appropriate Communication</h4>
                  <p className="text-sm text-muted-foreground">Tailored conversations using language and methods appropriate to each child's developmental stage.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Non-Directive Approach</h4>
                  <p className="text-sm text-muted-foreground">We don't influence children's views—we listen to their authentic perspectives and concerns.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Professional Reporting</h4>
                  <p className="text-sm text-muted-foreground">Findings are presented to parents in a way that respects children's privacy while informing decisions.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Prescribed by Law</h4>
                  <p className="text-sm text-muted-foreground">Our Voice of the Child assessments are conducted in accordance with legal requirements and best practices in family law.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="pt-8">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/pasted_file_lu2KJ6_image_3ec25ed4.png" 
              alt="Child empowerment and advocacy" 
              className="w-full max-w-md h-auto rounded-xl border-4 border-[#5DBB63]"
            />
          </div>

          <Card className="p-8 bg-accent/5 border border-accent/20">
            <h3 className="text-xl font-bold text-foreground mb-4">Why Voice of the Child Matters</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Empowerment:</strong> Children feel heard and valued in decisions affecting them</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Better outcomes:</strong> Arrangements that consider children's needs are more successful</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Emotional wellbeing:</strong> Children feel their concerns matter to their parents</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Reduced conflict:</strong> Understanding children's needs helps parents cooperate better</span>
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

      {/* The Process */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Our Voice of the Child Process</h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-6 md:gap-6 md:gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Preparation & Consent</h3>
                <p className="text-muted-foreground">Parents agree to the Voice of the Child process and provide consent for their children to participate.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Safe Meetings</h3>
                <p className="text-muted-foreground">Individual sessions with each child in a comfortable, neutral environment where they feel safe to express themselves.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Professional Report and Parent Feedback</h3>
                <p className="text-muted-foreground">Findings are documented in a formal report and shared with parents during mediation to help them make decisions that consider their children's needs.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Child Feedback</h3>
                <p className="text-muted-foreground">As a final step, the agreed parenting plan is explained to the children in an age-appropriate manner, supporting them in understanding and adjusting to the concept of two homes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Benefits of Voice of the Child</h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-6 md:gap-6 md:gap-8">
            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/benefit_voice_matters_icon_1019c8d9.png" alt="Children's Voice Matters" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Children Heard</h3>
              <p className="text-muted-foreground">Children feel their voices matter and their perspectives are valued in family decisions.</p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/benefit_child_protection_icon_29ad44a8.png" alt="Child Protection" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Protected Wellbeing</h3>
              <p className="text-muted-foreground">Professional assessment ensures children's emotional and psychological wellbeing is prioritized.</p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/benefit_family_wellbeing_icon_cb9ae43c.png" alt="Family Wellbeing" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Better Outcomes</h3>
              <p className="text-muted-foreground">Arrangements that consider children's needs lead to more stable, successful family arrangements.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a3a52]">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Ensure Your Children's Voices Are Heard?</h2>
          <p className="text-lg text-white/90 mb-8">
            Let us help you incorporate your children's perspectives into family decisions. Book a consultation with Cornelia today.
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
