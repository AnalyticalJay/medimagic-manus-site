import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, TrendingUp, Scale, Shield } from "lucide-react";
import { useLocation } from "wouter";

export default function MaintenanceAgreements() {
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
      <section className="relative py-16 md:py-24 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/maintenance-agreements-hero-3J2LjXmKPqEQfYNvWjXNXX.webp)'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent mb-4">
              MEDIATION SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Maintenance Agreements
            </h1>
            <p className="text-xl text-white/90">
              Fair and sustainable financial support arrangements that adapt to changing circumstances.
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
                <h2 className="text-3xl font-bold text-foreground mb-4">Understanding Maintenance Agreements</h2>
                <p className="text-lg text-muted-foreground">
                  Maintenance (also known as alimony or spousal support) is a critical component of many divorce and separation agreements. It addresses the financial support one spouse may provide to the other during or after separation. At MediMagic, we help couples negotiate fair, sustainable maintenance arrangements through structured mediation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">What Is Maintenance?</h3>
                <p className="text-muted-foreground mb-4">
                  Maintenance is financial support provided by one spouse to another to help maintain a reasonable standard of living after separation or divorce. Unlike child support (which is focused on children's needs), maintenance addresses the financial needs and capacity of each spouse.
                </p>
                <p className="text-muted-foreground">
                  The goal is to help the lower-earning spouse achieve financial independence while ensuring fairness to the higher-earning spouse.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Factors Considered</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Income & Earning Capacity</h4>
                      <p className="text-sm text-muted-foreground">Current income of both parties and their ability to earn in the future.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Duration of Marriage</h4>
                      <p className="text-sm text-muted-foreground">Length of the marriage and the financial interdependence established during that time.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Standard of Living</h4>
                      <p className="text-sm text-muted-foreground">The lifestyle established during the marriage and each party's need to maintain it.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Age & Health</h4>
                      <p className="text-sm text-muted-foreground">Age, health status, and ability to work or become self-sufficient.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image and CTA */}
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/maintenance-agreements-content-cDvZ8HX2vLRQfqJhBKPXDX.webp" 
                  alt="Financial planning for maintenance" 
                  className="w-full h-auto"
                />
              </div>

              <Card className="p-8 bg-accent/5 border border-accent/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Types of Maintenance</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <div>
                      <strong className="text-foreground">Temporary:</strong>
                      <p className="text-sm text-muted-foreground">Support during divorce proceedings</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <div>
                      <strong className="text-foreground">Rehabilitative:</strong>
                      <p className="text-sm text-muted-foreground">Short-term to help spouse retrain</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <div>
                      <strong className="text-foreground">Permanent:</strong>
                      <p className="text-sm text-muted-foreground">Long-term in long marriages</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <div>
                      <strong className="text-foreground">Lump Sum:</strong>
                      <p className="text-sm text-muted-foreground">One-time payment for finality</p>
                    </div>
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

      {/* The Mediation Process */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How We Help You Reach Fair Agreements</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Financial Disclosure</h3>
                <p className="text-muted-foreground">Both parties provide complete financial information, including income, expenses, assets, and liabilities.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Analysis & Discussion</h3>
                <p className="text-muted-foreground">The mediator helps both parties understand the relevant factors and discuss what maintenance arrangement is fair and sustainable.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Negotiation & Agreement</h3>
                <p className="text-muted-foreground">Through structured discussion, both parties work toward an agreement on the amount, duration, and terms of maintenance.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Documentation</h3>
                <p className="text-muted-foreground">The agreed maintenance arrangement is documented in a formal agreement that can be incorporated into the divorce decree.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Benefits of Mediated Maintenance Agreements</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <TrendingUp className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Fair & Equitable</h3>
              <p className="text-muted-foreground">Both parties have input into what is fair, rather than having a judge decide.</p>
            </Card>

            <Card className="p-8">
              <Scale className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Sustainable</h3>
              <p className="text-muted-foreground">Agreements reached through mediation are more likely to be followed because both parties agreed to them.</p>
            </Card>

            <Card className="p-8">
              <Shield className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Flexible & Confidential</h3>
              <p className="text-muted-foreground">Creative solutions tailored to each couple's unique circumstances with complete privacy.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-accent/10 via-teal-500/5 to-accent/10">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Secure Your Financial Future?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you negotiate fair maintenance arrangements. Book a consultation with Cornelia today.
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
