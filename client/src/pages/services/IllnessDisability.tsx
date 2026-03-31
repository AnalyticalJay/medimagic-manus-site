import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Heart, Users, Lightbulb } from "lucide-react";
import { useLocation } from "wouter";

export default function IllnessDisability() {
  const [, navigate] = useLocation();

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
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/illness-disability-hero-85DJ9LTpRzR7zEqFX2fsgd.webp)'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent mb-4">
              SOCIAL WORK SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Illness & Disability Support
            </h1>
            <p className="text-xl text-white/90">
              Compassionate support helping individuals and families navigate the challenges of illness and disability.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
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

            {/* Right Column - Image and CTA */}
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/illness-disability-content-LYZMPav9drhb22dCT5ncBa.webp" 
                  alt="Healthcare support and compassionate care" 
                  className="w-full h-auto"
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
                    <span className="text-muted-foreground"><strong>Empowering:</strong> Building your agency and resilience</span>
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
          </div>
        </div>
      </section>

      {/* The Support Process */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Your Health Support Journey</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
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
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Benefits of Illness & Disability Support</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <Heart className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Emotional Healing</h3>
              <p className="text-muted-foreground">Process difficult emotions in a safe, supportive environment with professional guidance.</p>
            </Card>

            <Card className="p-8">
              <Lightbulb className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Practical Strategies</h3>
              <p className="text-muted-foreground">Develop actionable plans for managing daily challenges and healthcare navigation.</p>
            </Card>

            <Card className="p-8">
              <Users className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Family Support</h3>
              <p className="text-muted-foreground">Strengthen family relationships and communication through health challenges.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-accent/10 via-teal-500/5 to-accent/10">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Navigate Your Health Journey with Support?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you adapt and thrive. Book a consultation with Cornelia today.
          </p>
          <Button 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
            onClick={() => navigate("/booking")}
          >
            Book Your Consultation Now
          </Button>
        </div>
      </section>
    </div>
  );
}
