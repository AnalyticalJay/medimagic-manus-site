import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, AlertCircle, Heart, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageWithSidebar from "@/components/ServicePageWithSidebar";

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

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Mediation Services', href: '/#mediation' },
        { label: 'Child Maintenance Agreements' },
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
                Child Maintenance Agreements
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8">
                Ensuring children's financial security and wellbeing through fair, sustainable maintenance arrangements.
              </p>
            </div>

            {/* Service Image */}
            <div className="flex justify-center mt-8 lg:mt-0">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/pasted_file_zQexNL_MaintenanceAgreements_32fcc08a.png" 
                alt="Child Maintenance Agreements" 
                className="w-full max-w-sm sm:max-w-md h-auto rounded-2xl sm:rounded-3xl shadow-lg border-4 border-[#5DBB63]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <ServicePageWithSidebar
        category="mediation"
        currentService="Maintenance Agreements"
        services={[
          { name: "Divorce Settlement Agreements", path: "/services/divorce-settlement" },
          { name: "Parenting Plans", path: "/services/parenting-plans" },
          { name: "Maintenance Agreements", path: "/services/maintenance-agreements" },
          { name: "Voice of the Child", path: "/services/voice-of-child" },
        ]}
      >
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Understanding Child Maintenance</h2>
            <p className="text-lg text-muted-foreground">
              Child maintenance is the financial support provided by both parents to ensure children's needs are met after separation or divorce. At MediMagic, we help parents establish fair, sustainable maintenance arrangements that prioritize children's wellbeing and provide the stability they need during family transitions.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-2">Understanding the Impact & Consequences</h3>
                <p className="text-red-800">
                  Child maintenance decisions have profound, long-lasting effects on children's physical health, emotional development, educational opportunities, and future prospects. Inadequate or disputed maintenance can create financial stress, limit access to essential services, and negatively impact children's sense of security and wellbeing.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">What Is Child Maintenance?</h3>
            <p className="text-muted-foreground mb-4">
              Child maintenance is the ongoing financial contribution both parents make toward raising their children. This includes essential expenses such as housing, food, education, healthcare, and other necessities. Unlike spousal maintenance, child maintenance focuses exclusively on meeting children's needs and is a legal obligation of both parents.
            </p>
            <p className="text-muted-foreground">
              Fair child maintenance ensures children maintain a consistent standard of living and have access to the opportunities and support they need to thrive.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Key Factors Considered</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Both Parents' Income & Earning Capacity</h4>
                  <p className="text-sm text-muted-foreground">Current income of both parents and their ability to earn, ensuring fair contribution from each parent.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Children's Actual Needs</h4>
                  <p className="text-sm text-muted-foreground">Age, health status, education requirements, and special needs of each child.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Parenting Time & Responsibility</h4>
                  <p className="text-sm text-muted-foreground">How parenting time is shared and direct costs each parent incurs for children's care.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground">Standard of Living During Marriage</h4>
                  <p className="text-sm text-muted-foreground">Maintaining children's accustomed lifestyle and opportunities as much as possible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/maintenance-agreements-content-cDvZ8HX2vLRQfqJhBKPXDX.webp" 
              alt="Children's wellbeing and security" 
              className="w-full h-auto"
            />
          </div>

          <Card className="p-8 bg-blue-50 border border-blue-200">
            <div className="flex gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <h3 className="text-xl font-bold text-blue-900">Consequences of Inadequate Child Maintenance</h3>
            </div>
            <ul className="space-y-3 mb-6 text-blue-900">
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>Educational Impact:</strong> Limited access to quality education, tutoring, and extracurricular activities</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>Health & Wellbeing:</strong> Reduced access to healthcare, nutrition, and mental health support</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>Emotional Security:</strong> Increased stress and anxiety about family financial stability</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>Long-term Outcomes:</strong> Reduced educational attainment and economic opportunities in adulthood</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>Family Conflict:</strong> Ongoing disputes and resentment affecting parent-child relationships</span>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">How We Establish Fair Child Maintenance</h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Complete Financial Disclosure</h3>
                <p className="text-muted-foreground">Both parents provide comprehensive financial information to ensure accurate assessment of maintenance capacity.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Children's Needs Assessment</h3>
                <p className="text-muted-foreground">Detailed discussion of children's actual needs, including education, healthcare, and lifestyle requirements.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Fair Contribution Calculation</h3>
                <p className="text-muted-foreground">Working with both parents to determine fair maintenance amounts based on income and children's needs.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Formal Documentation</h3>
                <p className="text-muted-foreground">Creating a legally binding agreement that ensures children's financial security and can adapt to future changes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Benefits of Fair Child Maintenance Agreements</h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-8">
              <Heart className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Children's Security</h3>
              <p className="text-muted-foreground">Ensures children have stable financial support and access to essential services and opportunities.</p>
            </Card>

            <Card className="p-8">
              <TrendingUp className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Reduced Conflict</h3>
              <p className="text-muted-foreground">Clear agreements eliminate ongoing disputes about financial responsibility, protecting children from family conflict.</p>
            </Card>

            <Card className="p-8">
              <Check className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Sustainable & Flexible</h3>
              <p className="text-muted-foreground">Agreements can adapt to changing circumstances while maintaining children's wellbeing and stability.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 medimagic-hero">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Protect Your Children's Financial Future</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you establish fair child maintenance that ensures your children's security and wellbeing. Book a consultation with Cornelia today.
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
