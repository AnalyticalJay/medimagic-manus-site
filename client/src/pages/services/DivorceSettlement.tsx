import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Clock, Users, FileText, Heart, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceSidebar from "@/components/ServiceSidebar";

export default function DivorceSettlement() {
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

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Mediation Services', href: '/#mediation' },
        { label: 'Divorce Settlement Agreements' },
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
                Divorce Settlement Agreements
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8">
                Structured mediation to help couples reach fair, legally sound divorce agreements with clarity and mutual understanding.
              </p>
            </div>

            {/* Service Image */}
            <div className="flex justify-center mt-8 lg:mt-0">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/pasted_file_fcM4sa_divorce-settleent_e4ada8cb.png" 
                alt="Divorce Settlement Agreements" 
                className="w-full max-w-sm sm:max-w-md h-auto rounded-2xl sm:rounded-3xl shadow-lg border-4 border-[#5DBB63]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Three Column Layout with Sidebar */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1 order-2 md:order-1">
              <ServiceSidebar
                category="mediation"
                currentService="Divorce Settlement Agreements"
                services={[
                  { name: "Divorce Settlement Agreements", path: "/services/divorce-settlement" },
                  { name: "Parenting Plans", path: "/services/parenting-plans" },
                  { name: "Maintenance Agreements", path: "/services/maintenance-agreements" },
                  { name: "Voice of the Child", path: "/services/voice-of-child" },
                ]}
              />
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 order-1 md:order-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Understanding Divorce Settlement Mediation</h2>
                <p className="text-lg text-muted-foreground">
                  Divorce is one of life's most significant transitions. Beyond the emotional complexity, there are critical legal and financial decisions that must be made—decisions that will affect your future and that of your children. At MediMagic, we provide structured mediation to help you navigate these decisions with clarity, fairness, and mutual respect.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">What Is Divorce Settlement Mediation?</h3>
                <p className="text-muted-foreground mb-4">
                  Divorce settlement mediation is a structured process in which a neutral, trained mediator helps both spouses communicate effectively and reach agreement on the key issues in their divorce. Rather than adversarial litigation, mediation focuses on collaborative problem-solving—allowing both parties to maintain control over the outcome and preserve dignity throughout the process.
                </p>
                <p className="text-muted-foreground">
                  This approach is not only more cost-effective than litigation but also typically faster, less emotionally draining, and results in agreements that both parties feel invested in—creating a stronger foundation for post-divorce relationships, especially when children are involved.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Key Areas Addressed</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Asset & Property Division</h4>
                      <p className="text-sm text-muted-foreground">Fair and equitable division of marital property, including real estate, investments, and personal assets.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Financial Support</h4>
                      <p className="text-sm text-muted-foreground">Determination of spousal maintenance or alimony arrangements that are sustainable and fair.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Parenting Arrangements</h4>
                      <p className="text-sm text-muted-foreground">Development of child-centred parenting plans that prioritise children's wellbeing and stability.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Child Support</h4>
                      <p className="text-sm text-muted-foreground">Fair determination of financial support for children based on both parents' circumstances.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/divorce-settlement-content-DmHrPDmfmbWrYivJ4TUKze.webp" 
                  alt="Professional divorce mediation" 
                  className="w-full h-auto"
                />
              </div>

              <Card className="p-8 bg-accent/5 border border-accent/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Mediation?</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>Cost-effective:</strong> Significantly less expensive than litigation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>Faster resolution:</strong> Typically resolved in weeks, not years</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>Control:</strong> Both parties maintain control over decisions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>Confidentiality:</strong> Private process, not public court records</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>Dignity:</strong> Respectful, non-adversarial approach</span>
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
        <div className="container max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">The Mediation Process</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Initial Consultation</h3>
                <p className="text-muted-foreground">Individual confidential meetings with each spouse to understand their perspective, concerns, and goals. This helps establish whether mediation is appropriate and what issues need to be addressed.</p>
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
                <p className="text-muted-foreground">Structured meetings where both spouses meet with the mediator to discuss issues, exchange information, and work toward agreements. The mediator facilitates communication and ensures both parties are heard.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Information Gathering</h3>
                <p className="text-muted-foreground">Full financial disclosure and documentation of all assets, liabilities, income, and expenses. This transparency is essential for fair decision-making and creating legally sound agreements.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Agreement & Documentation</h3>
                <p className="text-muted-foreground">Once agreements are reached, they are documented in a Memorandum of Understanding. Both parties can then have their lawyers review before finalising the divorce settlement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Benefits of Our Approach</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <FileText className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Legally Sound Agreements</h3>
              <p className="text-muted-foreground">Our mediated agreements are comprehensive and legally enforceable, protecting your interests and ensuring compliance.</p>
            </Card>

            <Card className="p-8">
              <Users className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Collaborative Approach</h3>
              <p className="text-muted-foreground">We foster cooperation rather than conflict, creating a foundation for positive post-divorce relationships, especially important when children are involved.</p>
            </Card>

            <Card className="p-8">
              <Clock className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Time & Cost Efficient</h3>
              <p className="text-muted-foreground">Mediation typically takes weeks rather than years, and costs a fraction of contested litigation—saving money and emotional energy.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-accent/10 via-teal-500/5 to-accent/10">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Move Forward?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take the first step toward a fair, respectful divorce settlement. Book a consultation with Cornelia today.
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
