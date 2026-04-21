import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Heart, Users, Calendar, Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageWithSidebar from "@/components/ServicePageWithSidebar";

export default function ParentingPlans() {
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
        { label: 'Parenting Plans' },
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
                Parenting Plans
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8">
                A child-centred parenting plan developed through mediation, accommodating any co-parenting situation while defining care, contact, and shared decision-making arrangements.
              </p>
            </div>

            {/* Service Image */}
            <div className="flex justify-center mt-8 lg:mt-0">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/pasted_file_onhlOo_ParentingPLans_c3fa36c8.png" 
                alt="Parenting Plans Mediation" 
                className="w-full max-w-lg sm:max-w-xl h-auto rounded-2xl sm:rounded-3xl shadow-lg border-4 border-[#5DBB63]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <ServicePageWithSidebar
        category="mediation"
        currentService="Parenting Plans"
        services={[
          { name: "Divorce Settlement Agreements", path: "/services/divorce-settlement" },
          { name: "Parenting Plans", path: "/services/parenting-plans" },
          { name: "Maintenance Agreements", path: "/services/maintenance-agreements" },
          { name: "Voice of the Child", path: "/services/voice-of-child" },
        ]}
      >
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Creating Child-Centred Parenting Plans</h2>
            <p className="text-lg text-muted-foreground">
              When parents separate or divorce, one of the most important decisions is determining parenting arrangements. At MediMagic, we facilitate mediation to help parents create comprehensive parenting plans that prioritize children's wellbeing, maintain strong relationships with both parents, and provide stability during this transition. These plans can also be used to establish meaningful care and contact arrangements between children and extended family members, such as grandparents, where appropriate.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">What Is a Parenting Plan?</h3>
            <p className="text-muted-foreground mb-4">
              A parenting plan is a detailed agreement that outlines how parents or guardians will share the responsibility to raise and care for their children after separation, divorce or death. It covers care, residency and contact arrangements (previously known as custody and visitation schedules), decision-making authority, and other arrangements designed to ensure children's physical, emotional, and developmental needs are met. A well-crafted parenting plan provides clarity, reduces conflict, and gives children the security of knowing what to expect.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Key Elements Addressed</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Co-Parenting Arrangements</h4>
                  <p className="text-sm text-muted-foreground">Clear, detailed schedules and agreements for shared parenting responsibilities, including weekdays, weekends, holidays, and school breaks.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Decision-Making Authority</h4>
                  <p className="text-sm text-muted-foreground">How to make decisions about education, healthcare, religion, and other important matters affecting the children.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Relationships with Others</h4>
                  <p className="text-sm text-muted-foreground">Guidelines for introducing new partners and maintaining relationships with extended family members.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Communication & Flexibility</h4>
                  <p className="text-sm text-muted-foreground">Methods for parents to communicate about children and provisions for adjusting arrangements as children grow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="pt-8">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/pasted_file_oA9Jng_image_907d4496.png" 
              alt="Happy co-parenting family" 
              className="w-full max-w-md h-auto rounded-xl border-4 border-[#5DBB63]"
            />
          </div>

          <Card className="p-8 bg-accent/5 border border-accent/20">
            <h3 className="text-xl font-bold text-foreground mb-4">Our Child-Centred Approach</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Child Participation:</strong> Children have the right to participate in decisions affecting them, with their views considered in accordance with their age, maturity, and ability.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Children's best interests:</strong> All decisions prioritize children's wellbeing</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Both parents involved:</strong> Maintain meaningful relationships with both parents</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Stability & predictability:</strong> Clear schedules and expectations</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Flexibility:</strong> Plans that adapt as children grow and circumstances change</span>
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

      {/* The Mediation Process */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">The Process of Creating Your Parenting Plan</h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-6 md:gap-6 md:gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Individual Consultations</h3>
                <p className="text-muted-foreground">Separate meetings with each parent to understand their relationship with the children, work schedules, and parenting goals.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Joint Mediation Sessions</h3>
                <p className="text-muted-foreground">Structured meetings where both parents discuss parenting arrangements, focusing on children's needs and practical logistics. Working through specific issues (schedules, holidays, decision-making) to find solutions that work for the whole family.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Child Participation</h3>
                <p className="text-muted-foreground">Depending on the parties' preference, children may either be consulted directly by the mediator or referred to an independent Voice of the Child Practitioner to share their views. This input is then provided to the parties to consider and incorporate before making final decisions that significantly impact the children's lives.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Documentation & Legal Process</h3>
                <p className="text-muted-foreground">The agreements reached are recorded in a comprehensive parenting plan. Where applicable, confirmation of child participation is included. The parenting plan is then submitted to the Office of the Family Advocate for review and endorsement. Once endorsed, it may be made an order of court, giving it legal effect. In divorce matters, the parenting plan is typically incorporated into the final divorce order.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Implementation and Review</h3>
                <p className="text-muted-foreground">As a final step, the mediator may assist in explaining the parenting plan to the children in an age-appropriate manner. It is recommended that a follow-up mediation session be scheduled approximately six months later to review how well the arrangements are working in practice. Adjustments can then be made as needed, either in response to life changes or through periodic reviews over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Benefits of Mediated Parenting Plans</h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-6 md:gap-6 md:gap-8">
            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/benefit_children_best_interests_icon_a6ae8361.png" alt="Children's Best Interests" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Children's Wellbeing</h3>
              <p className="text-muted-foreground">Plans designed with children's best interests at the centre, ensuring stability and meaningful relationships with both parents.</p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/benefit_reduced_conflict_icon_5b9c4d37.png" alt="Reduced Conflict" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Reduced Conflict</h3>
              <p className="text-muted-foreground">Clear agreements reduce ongoing disputes, creating a more peaceful environment for children and parents.</p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/benefit_practical_flexible_icon_c2f20a86.png" alt="Practical & Flexible" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Practical & Flexible</h3>
              <p className="text-muted-foreground">Plans that work in real life and can adapt as children grow and circumstances change.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a3a52]">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Create a Parenting Plan That Works?</h2>
          <p className="text-lg text-white/90 mb-8">
            Let us help you develop a parenting plan that prioritizes your children's wellbeing. Book a consultation with Cornelia today.
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
