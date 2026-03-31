import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Heart, Lightbulb, Users } from "lucide-react";
import { useLocation } from "wouter";

export default function AdultDivorcePrep() {
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
      <section className="relative py-16 md:py-24 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/adult-divorce-prep-hero-DLtr8v98TVjnZq76hFx7Ls.webp)'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent mb-4">
              SOCIAL WORK SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Adult Divorce Preparation
            </h1>
            <p className="text-xl text-white/90">
              Compassionate support helping adults navigate the emotional and practical aspects of divorce.
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
                <h2 className="text-3xl font-bold text-foreground mb-4">Preparing for Life After Divorce</h2>
                <p className="text-lg text-muted-foreground">
                  Divorce is one of life's most challenging transitions. Beyond the legal and financial aspects, it involves significant emotional, social, and practical changes. At MediMagic, our Adult Divorce Preparation service provides comprehensive support to help you navigate this transition with confidence and resilience.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">What Is Adult Divorce Preparation?</h3>
                <p className="text-muted-foreground mb-4">
                  Adult Divorce Preparation is a social work service that helps adults process the emotional impact of divorce, develop practical coping strategies, and build resilience for life after divorce. Through individual sessions, we address emotional wellbeing, financial planning, social reintegration, and personal growth.
                </p>
                <p className="text-muted-foreground">
                  This service acknowledges that divorce affects not just legal status, but your entire life—and we're here to help you rebuild.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Areas We Support</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Emotional Processing</h4>
                      <p className="text-sm text-muted-foreground">Working through grief, anger, loss, and other emotions that arise during divorce.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Practical Planning</h4>
                      <p className="text-sm text-muted-foreground">Strategies for managing finances, housing, employment, and daily living arrangements.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Social Reintegration</h4>
                      <p className="text-sm text-muted-foreground">Rebuilding social networks, managing relationships, and redefining your identity.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Self-Care & Resilience</h4>
                      <p className="text-sm text-muted-foreground">Building healthy coping strategies and developing resilience for moving forward.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image and CTA */}
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/adult-divorce-prep-content-BpiLE6xBKiRVZshSMf7n8w.webp" 
                  alt="Emotional support and healing" 
                  className="w-full h-auto"
                />
              </div>

              <Card className="p-8 bg-accent/5 border border-accent/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Our Compassionate Approach</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>Non-judgmental:</strong> A safe space to express all your feelings</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>Holistic:</strong> Addressing emotional, practical, and social aspects</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>Empowering:</strong> Building your confidence and resilience</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>Practical:</strong> Actionable strategies you can use immediately</span>
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
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Your Divorce Preparation Journey</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Initial Assessment</h3>
                <p className="text-muted-foreground">Understanding your current situation, challenges, and goals for moving forward.</p>
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
                <p className="text-muted-foreground">Processing emotions, developing coping strategies, and building emotional resilience.</p>
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
                <p className="text-muted-foreground">Developing strategies for financial management, housing, and daily life adjustments.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Moving Forward</h3>
                <p className="text-muted-foreground">Building new identity, social connections, and creating a positive vision for your future.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Benefits of Divorce Preparation Support</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <Heart className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Emotional Healing</h3>
              <p className="text-muted-foreground">Process difficult emotions in a safe, supportive environment with professional guidance.</p>
            </Card>

            <Card className="p-8">
              <Lightbulb className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Practical Strategies</h3>
              <p className="text-muted-foreground">Develop actionable plans for managing finances, housing, employment, and daily challenges.</p>
            </Card>

            <Card className="p-8">
              <Users className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Social Reintegration</h3>
              <p className="text-muted-foreground">Rebuild your social network and create a positive new identity after divorce.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-accent/10 via-teal-500/5 to-accent/10">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Navigate Your Divorce with Support?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you process this transition and build a positive future. Book a consultation with Cornelia today.
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
