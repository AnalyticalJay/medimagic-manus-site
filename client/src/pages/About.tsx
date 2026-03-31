import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Menu, X, ChevronDown, Heart, Award, Lightbulb, Users } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

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
              <div className="absolute left-0 mt-0 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
              <div className="absolute left-0 mt-0 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
      <section className="relative py-16 md:py-32 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/about-us-hero-N3DE8aE9QsgurTR7RoALRH.webp)'}}>
        <div className="absolute inset-0 bg-black/35" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent mb-4">
              ABOUT CORNELIA
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cornelia Griessel
            </h1>
            <p className="text-xl text-white/90">
              FAMAC Accredited Mediator & SASW Registered Social Worker with 20+ years of experience in family mediation, medical social work, and child-centred practice.
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
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/qualifications-icon-MVKZawTS6NWhXw59YaCkU4.webp" alt="Qualifications" className="w-16 h-16 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">FAMAC Accredited Mediator</h4>
                      <p className="text-muted-foreground">Accredited by the Family Mediation Association of South Africa (FAMAC) with specialized training in family law mediation and conflict resolution.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Award className="w-16 h-16 text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">SASW Registered Social Worker</h4>
                      <p className="text-muted-foreground">Registered with the South African Society of Social Workers (SASW) with extensive experience in medical social work and family support.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Image and Key Stats */}
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/CorneliaGrissel_58ab5064.png"
                  alt="Cornelia Griessel - Professional Portrait"
                  className="w-full h-auto"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-accent/5 border border-accent/20 text-center">
                  <div className="flex justify-center mb-3">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/experience-icon-LmPPxUi6eShTqJSiM4shKQ.webp" alt="Experience" className="w-12 h-12" />
                  </div>
                  <p className="text-3xl font-bold text-accent mb-2">20+</p>
                  <p className="text-sm font-semibold text-foreground">Years of Experience</p>
                </Card>

                <Card className="p-6 bg-accent/5 border border-accent/20 text-center">
                  <div className="flex justify-center mb-3">
                    <Users className="w-12 h-12 text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-accent mb-2">1000+</p>
                  <p className="text-sm font-semibold text-foreground">Clients Supported</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Core Values & Approach</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/values-icon-RQH2woVS7EB4SyorScn4b6.webp" alt="Compassion" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Compassion & Care</h3>
              <p className="text-muted-foreground">
                Every client is treated with dignity, respect, and genuine care. Cornelia creates a safe, non-judgmental space where clients feel heard and supported.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/approach-icon-6euxnyxfisY5c3P6C3DLno.webp" alt="Integrated Approach" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Integrated Approach</h3>
              <p className="text-muted-foreground">
                Combining mediation's structure with social work's emotional intelligence to address both practical decisions and emotional wellbeing holistically.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <Lightbulb className="w-16 h-16 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Professional Excellence</h3>
              <p className="text-muted-foreground">
                Bound by strict professional ethical codes and regulatory standards. Continuous professional development ensures current, evidence-based practice.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <Heart className="w-16 h-16 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Client-Centred Care</h3>
              <p className="text-muted-foreground">
                Every client's unique circumstances, values, and needs are central to the process. Solutions are tailored to individual situations, not one-size-fits-all.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Areas of Expertise</h2>
          
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
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-accent/10 via-teal-500/5 to-accent/10">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Work With Cornelia?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a consultation to discuss your needs and explore how MediMagic's integrated approach can support you through your life transition.
          </p>
          <Button 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
            onClick={() => navigate("/booking")}
          >
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
