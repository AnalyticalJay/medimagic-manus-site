import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Heart, Users, Lightbulb } from "lucide-react";
import { useLocation } from "wouter";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageWithSidebar from "@/components/ServicePageWithSidebar";

export default function PalliativeCare() {
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
        { label: 'Social Work Services', href: '/#social-work' },
        { label: 'Palliative & End-of-Life Care' },
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
                Palliative & End-of-Life Care
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8">
                Dignified, compassionate support for individuals and families during life's final chapter.
              </p>
            </div>

            {/* Service Image */}
            <div className="flex justify-center mt-8 lg:mt-0">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/palliative-care-8v5vkQgC9LPzGCeQSk3dJY.webp" 
                alt="Palliative & End-of-Life Care" 
                className="w-full max-w-sm sm:max-w-md h-auto rounded-2xl sm:rounded-3xl shadow-lg border-4 border-[#5DBB63]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <ServicePageWithSidebar
        category="social-work"
        currentService="Palliative Care"
        services={[
          { name: "Adult Divorce Prep", path: "/services/adult-divorce-prep" },
          { name: "Illness & Disability", path: "/services/illness-disability" },
          { name: "Palliative Care", path: "/services/palliative-care" },
          { name: "Health Education", path: "/services/health-education" },
        ]}
      >
        <div className="space-y-8">
          <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Supporting Dignity in Life's Final Chapter</h2>
                <p className="text-lg text-muted-foreground">
                  Facing a terminal diagnosis or end-of-life journey is profoundly challenging—not just medically, but emotionally, spiritually, and relationally. At MediMagic, our Palliative & End-of-Life Care service provides compassionate support to help individuals and families navigate this sacred time with dignity, peace, and meaningful connection.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">What Is Palliative & End-of-Life Care Support?</h3>
                <p className="text-muted-foreground mb-4">
                  Palliative & End-of-Life Care Support is professional social work guidance focused on quality of life, comfort, meaning-making, and family support during terminal illness or end-of-life transitions. We help individuals and families navigate medical decisions, emotional challenges, spiritual questions, and legacy planning.
                </p>
                <p className="text-muted-foreground">
                  This service honors the dignity and autonomy of the individual while supporting families through one of life's most profound experiences.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Areas We Support</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Emotional & Spiritual Support</h4>
                      <p className="text-sm text-muted-foreground">Processing fear, grief, meaning-making, and spiritual questions during end-of-life.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Medical Decision-Making</h4>
                      <p className="text-sm text-muted-foreground">Support navigating treatment options, advance directives, and end-of-life preferences.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Family Communication</h4>
                      <p className="text-sm text-muted-foreground">Facilitating honest, loving conversations between patients and family members.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Legacy & Meaning-Making</h4>
                      <p className="text-sm text-muted-foreground">Creating opportunities for legacy, closure, and meaningful final connections.</p>
                    </div>
                  </div>
                </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/palliative-care-content-kMKPDW7XnLk7CZZp3hyUZV.webp" 
              alt="Peaceful family gathering and dignified end-of-life care" 
              className="w-full h-auto"
            />
          </div>

          <Card className="p-8 bg-accent/5 border border-accent/20">
            <h3 className="text-xl font-bold text-foreground mb-4">Our Compassionate Approach</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Dignified:</strong> Honoring individual values and wishes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Holistic:</strong> Addressing physical, emotional, and spiritual needs</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Family-centered:</strong> Supporting loved ones throughout the journey</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Peaceful:</strong> Creating comfort and meaningful moments</span>
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

      {/* The Care Process */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Your End-of-Life Support Journey</h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-6 md:gap-6 md:gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Compassionate Assessment</h3>
                <p className="text-muted-foreground">Understanding your situation, wishes, and support needs with sensitivity and respect.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Emotional & Spiritual Support</h3>
                <p className="text-muted-foreground">Processing emotions, spiritual questions, and finding peace and meaning.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Family Facilitation</h3>
                <p className="text-muted-foreground">Facilitating meaningful conversations and connections between patient and family.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Ongoing Presence</h3>
                <p className="text-muted-foreground">Continuous support through the end-of-life journey and beyond for grieving families.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Benefits of Palliative & End-of-Life Support</h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-6 md:gap-6 md:gap-8">
            <Card className="p-8">
              <Heart className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Peaceful Transition</h3>
              <p className="text-muted-foreground">Navigate end-of-life with dignity, comfort, and emotional support in a safe environment.</p>
            </Card>

            <Card className="p-8">
              <Lightbulb className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Meaningful Connection</h3>
              <p className="text-muted-foreground">Create lasting memories and meaningful moments with loved ones during this sacred time.</p>
            </Card>

            <Card className="p-8">
              <Users className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Family Support</h3>
              <p className="text-muted-foreground">Help families navigate grief, communicate openly, and find peace and closure.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a3a52]">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Navigate This Journey with Compassionate Support?</h2>
          <p className="text-lg text-white/90 mb-8">
            Let us help you and your family find peace, dignity, and meaningful connection. Book a consultation with Cornelia today.
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
