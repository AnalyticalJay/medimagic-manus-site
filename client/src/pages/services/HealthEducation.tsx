import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Heart, Users, Lightbulb } from "lucide-react";
import { useLocation } from "wouter";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageWithSidebar from "@/components/ServicePageWithSidebar";

export default function HealthEducation() {
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
        { label: 'Health Education & Promotion' },
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
                Health Education and Promotion:
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8">
                A supportive and informative service that equips individuals, groups and families with the knowledge and tools to make informed health decisions and enhance overall well-being.
              </p>
            </div>

            {/* Service Image */}
            <div className="flex justify-center mt-8 lg:mt-0">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/medimagic_hero_illustration_home_page.webp" 
                alt="Health Education & Wellness" 
                className="w-full max-w-sm sm:max-w-md h-auto rounded-2xl sm:rounded-3xl shadow-lg border-4 border-[#5DBB63]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <ServicePageWithSidebar
        category="social-work"
        currentService="Health Education"
        services={[
          { name: "Adult Divorce Prep", path: "/services/adult-divorce-prep" },
          { name: "Illness & Disability", path: "/services/illness-disability" },
          { name: "Palliative Care", path: "/services/palliative-care" },
          { name: "Health Education", path: "/services/health-education" },
        ]}
      >
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Empowering Health Through Knowledge & Skills</h2>
                <p className="text-lg text-muted-foreground">
                  Health is not just the absence of illness—it's a state of physical, mental, and social wellbeing. At MediMagic, our Health Education & Promotion service empowers individuals and communities with knowledge, skills, and resources to make informed health decisions and build healthier, more resilient lives.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">What Is Health Education & Promotion?</h3>
                <p className="text-muted-foreground mb-4">
                  Health Education & Promotion is a professional social work service focused on increasing health literacy, building healthy behaviors, and creating supportive environments for wellbeing. We provide evidence-based education, skill-building, and resource connection to help individuals and communities achieve optimal health.
                </p>
                <p className="text-muted-foreground">
                  This service recognizes that health is influenced by knowledge, skills, environment, and access to resources—and we address all of these dimensions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Areas We Support</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Health Literacy</h4>
                      <p className="text-sm text-muted-foreground">Building understanding of health conditions, treatment options, and health systems.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Lifestyle Skills</h4>
                      <p className="text-sm text-muted-foreground">Developing skills for nutrition, exercise, stress management, and healthy relationships.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Disease Prevention</h4>
                      <p className="text-sm text-muted-foreground">Education on preventing common health conditions and managing risk factors.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Resource Connection</h4>
                      <p className="text-sm text-muted-foreground">Connecting individuals to health services, support groups, and community resources.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Treatment Adherence</h4>
                      <p className="text-sm text-muted-foreground">Supporting individuals to understand, manage, and consistently follow their treatment plans to improve health outcomes and overall wellbeing.</p>
                    </div>
                  </div>
                </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/health-education-content-5Hc3Rvq8VXgSZYnGz4XYQH.webp" 
              alt="Health education and wellness resources" 
              className="w-full h-auto"
            />
          </div>

          <Card className="p-8 bg-accent/5 border border-accent/20">
            <h3 className="text-xl font-bold text-foreground mb-4">Our Empowering Approach</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Evidence-based:</strong> Information grounded in current research</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Practical:</strong> Actionable strategies for real-world application</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Inclusive:</strong> Culturally sensitive and accessible to all</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Empowering:</strong> Building confidence and agency in health decisions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground"><strong>Flexible:</strong> Individual, group or community set-up</span>
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

      {/* The Education Process */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Your Health Education Journey</h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-6 md:gap-6 md:gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Assessment & Planning</h3>
                <p className="text-muted-foreground">Understanding your health goals, current knowledge, and learning preferences.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Health Education</h3>
                <p className="text-muted-foreground">Evidence-based education tailored to your specific health needs and interests.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Skill Development</h3>
                <p className="text-muted-foreground">Building practical skills for healthy lifestyle changes and behavior management.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Resource Connection</h3>
                <p className="text-muted-foreground">Connecting you to health services, support groups, and community resources.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Benefits of Health Education & Promotion</h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-6 md:gap-6 md:gap-8">
            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/benefit_emotional_support_icon_f6013bdb.png" alt="Emotional Support" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Informed Decisions</h3>
              <p className="text-muted-foreground">Make confident, informed health decisions based on evidence and your personal values.</p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/benefit_practical_planning_icon_75cd656d.png" alt="Practical Planning" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Practical Skills</h3>
              <p className="text-muted-foreground">Develop actionable skills for nutrition, exercise, stress management, and healthy living.</p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/benefit_social_reintegration_icon_0d42095e.png" alt="Social Reintegration" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Family Support</h3>
              <p className="text-muted-foreground">Supporting families to stay connected and communicate effectively through health challenges.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a3a52]">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Invest in Your Health & Wellbeing?</h2>
          <p className="text-lg text-white/90 mb-8">
            Let us empower you with knowledge, skills, and resources for a healthier, more resilient life. Book a consultation with Cornelia today.
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
