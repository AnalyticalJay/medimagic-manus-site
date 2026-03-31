import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Ear, Shield, Heart } from "lucide-react";
import { useLocation } from "wouter";

export default function VoiceOfChild() {
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
      <section className="relative py-16 md:py-24 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/voice-of-child-hero-JzZEFUeCT6m8iMpWQd4YXJ.webp)'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent mb-4">
              MEDIATION SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Voice of the Child
            </h1>
            <p className="text-xl text-white/90">
              Professional child advocacy ensuring children's perspectives are heard and valued in family decisions.
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
                </div>
              </div>
            </div>

            {/* Right Column - Image and CTA */}
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/voice-of-child-content-2kYjisopVkY6KkiQVGSH2T.webp" 
                  alt="Child empowerment and advocacy" 
                  className="w-full h-auto"
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
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Voice of the Child Process</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
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
                <h3 className="text-xl font-bold text-foreground mb-2">Professional Analysis</h3>
                <p className="text-muted-foreground">Careful analysis of children's perspectives and needs, considering their age and developmental stage.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Parent Consultation</h3>
                <p className="text-muted-foreground">Findings are shared with parents to inform mediation and help them make decisions that consider their children's needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Benefits of Voice of the Child</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <Ear className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Children Heard</h3>
              <p className="text-muted-foreground">Children feel their voices matter and their perspectives are valued in family decisions.</p>
            </Card>

            <Card className="p-8">
              <Shield className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Protected Wellbeing</h3>
              <p className="text-muted-foreground">Professional assessment ensures children's emotional and psychological wellbeing is prioritized.</p>
            </Card>

            <Card className="p-8">
              <Heart className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Better Outcomes</h3>
              <p className="text-muted-foreground">Arrangements that consider children's needs lead to more stable, successful family arrangements.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-accent/10 via-teal-500/5 to-accent/10">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Ensure Your Children's Voices Are Heard?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you incorporate your children's perspectives into family decisions. Book a consultation with Cornelia today.
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
