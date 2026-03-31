import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Heart, Users, Calendar } from "lucide-react";
import { useLocation } from "wouter";

export default function ParentingPlans() {
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
      <section className="relative py-16 md:py-24 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/parenting-plans-hero-8Qjz9KPqEQfYNvWjXNXX.webp)'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent mb-4">
              MEDIATION SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Parenting Plans
            </h1>
            <p className="text-xl text-white/90">
              Child-centred mediation to create parenting arrangements that prioritize children's wellbeing and stability.
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
                <h2 className="text-3xl font-bold text-foreground mb-4">Creating Child-Centred Parenting Plans</h2>
                <p className="text-lg text-muted-foreground">
                  When parents separate or divorce, one of the most important decisions is determining parenting arrangements. At MediMagic, we facilitate mediation to help parents create comprehensive parenting plans that prioritize children's wellbeing, maintain strong relationships with both parents, and provide stability during this transition.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">What Is a Parenting Plan?</h3>
                <p className="text-muted-foreground mb-4">
                  A parenting plan is a detailed agreement that outlines how parents will share responsibility for their children after separation or divorce. It covers custody, visitation schedules, decision-making authority, and other arrangements designed to ensure children's physical, emotional, and developmental needs are met.
                </p>
                <p className="text-muted-foreground">
                  A well-crafted parenting plan provides clarity, reduces conflict, and gives children the security of knowing what to expect.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Key Elements Addressed</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Custody Arrangements</h4>
                      <p className="text-sm text-muted-foreground">Determination of primary residence and shared custody arrangements that work for the family.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Visitation Schedules</h4>
                      <p className="text-sm text-muted-foreground">Clear, detailed schedules for time with each parent, including weekdays, weekends, holidays, and school breaks.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Decision-Making Authority</h4>
                      <p className="text-sm text-muted-foreground">Who makes decisions about education, healthcare, religion, and other important matters affecting the children.</p>
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

            {/* Right Column - Image and CTA */}
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/parenting-plans-content-7Qjz9KPqEQfYNvWjXNXX.webp" 
                  alt="Happy co-parenting family" 
                  className="w-full h-auto"
                />
              </div>

              <Card className="p-8 bg-accent/5 border border-accent/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Our Child-Centred Approach</h3>
                <ul className="space-y-3 mb-6">
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
          </div>
        </div>
      </section>

      {/* The Mediation Process */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Creating Your Parenting Plan</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
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
                <p className="text-muted-foreground">Structured meetings where both parents discuss parenting arrangements, focusing on children's needs and practical logistics.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Problem-Solving & Negotiation</h3>
                <p className="text-muted-foreground">Working through specific issues (schedules, holidays, decision-making) to find solutions that work for the whole family.</p>
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
                <p className="text-muted-foreground">The agreed parenting plan is documented in a formal agreement that can be incorporated into the divorce decree.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Benefits of Mediated Parenting Plans</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <Heart className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Children's Wellbeing</h3>
              <p className="text-muted-foreground">Plans designed with children's best interests at the centre, ensuring stability and meaningful relationships with both parents.</p>
            </Card>

            <Card className="p-8">
              <Users className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Reduced Conflict</h3>
              <p className="text-muted-foreground">Clear agreements reduce ongoing disputes, creating a more peaceful environment for children and parents.</p>
            </Card>

            <Card className="p-8">
              <Calendar className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Practical & Flexible</h3>
              <p className="text-muted-foreground">Plans that work in real life and can adapt as children grow and circumstances change.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-accent/10 via-teal-500/5 to-accent/10">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Create a Parenting Plan That Works?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you develop a parenting plan that prioritizes your children's wellbeing. Book a consultation with Cornelia today.
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
