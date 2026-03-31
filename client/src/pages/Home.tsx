import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Heart, Star } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleBooking = () => {
    setLocation("/booking");
  };

  const mediationServices = [
    { name: "Divorce Settlement Agreements", path: "/services/divorce-settlement", desc: "Structured mediation to help couples reach fair, legally sound divorce agreements." },
    { name: "Parenting Plan", path: "/services/parenting-plans", desc: "Child-centred co-parenting frameworks prioritising children's wellbeing." },
    { name: "Maintenance Agreements", path: "/services/maintenance-agreements", desc: "Structured mediation to help couples reach fair, legally sound divorce agreements." },
    { name: "Voice of the Child Assessments", path: "/services/voice-of-child", desc: "Structured mediation to help couples reach fair, legally sound divorce agreements." },
  ];

  const socialWorkServices = [
    { name: "Adult Divorce Preparation", path: "/services/adult-divorce-prep", desc: "Emotional and practical support for adults navigating the complexities of divorce and separation." },
    { name: "Illness & Disability Support", path: "/services/illness-disability", desc: "Compassionate guidance for individuals and families coping with illness, disability, and life transitions." },
    { name: "Palliative & End-of-Life Care", path: "/services/palliative-care", desc: "Holistic support for patients, families, and caregivers during end-of-life journeys." },
    { name: "Health Education & Promotion", path: "/services/health-education", desc: "Educational programs promoting mental health, wellbeing, and healthy life transitions." },
  ];

  const faqs = [
    { q: "What is the difference between mediation and social work support?", a: "Mediation focuses on helping parties reach agreements on specific issues, while social work support addresses emotional wellbeing and practical life transitions." },
    { q: "Is mediation confidential?", a: "Yes, all mediation sessions are strictly confidential and protected by professional privilege." },
    { q: "How long does the mediation process typically take?", a: "Most mediation processes take between 3-6 months, depending on complexity." },
    { q: "Can children be involved in the mediation process?", a: "Yes, through our Voice of the Child services, children's perspectives can be professionally represented." },
    { q: "What if we cannot reach agreement through mediation?", a: "If mediation doesn't resolve all issues, you can pursue litigation for remaining matters." },
    { q: "Are online consultations as effective as in-person sessions?", a: "Yes, we offer both online and in-person consultations with equal effectiveness." },
    { q: "How do I know if mediation is right for my situation?", a: "Contact us for a free consultation to discuss your specific circumstances." },
    { q: "What qualifications does Cornelia hold?", a: "Cornelia is a FAMAC Accredited Mediator and SASW Registered Social Worker with 20+ years experience." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="medimagic-hero py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* MediMagic Logo Circle - Top Right */}
          <div className="absolute top-8 right-8 w-32 h-32 rounded-full border-4 border-[#5DBB63] bg-white flex items-center justify-center shadow-lg">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/LogoMedi_a41f255a.png" 
              alt="MediMagic Logo" 
              className="w-24 h-24 object-contain"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="bg-[#5DBB63] rounded-3xl px-8 py-4 inline-block mb-8 border-4 border-dashed border-white">
                <h1 className="text-4xl md:text-5xl font-bold text-white">MEDI MAGIC</h1>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                STEADY SUPPORT THROUGH LIFE'S MOST DIFFICULT TRANSITIONS
              </h2>
              
              <p className="text-lg text-gray-100 mb-8">
                Medi Magic offers Professional Family Law Mediation and Social Work Services, bringing structure, fairness and calm direction to times of change.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleBooking}
                  className="medimagic-button"
                >
                  Book a Consultation
                </button>
                <button 
                  onClick={() => setLocation("/about")}
                  className="medimagic-button-outline"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Illustration - SCARS to STARS Image */}
            <div className="flex justify-center">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/ChatGPTImageMar23,2026,10_49_26AM_eb0483f5.png" 
                alt="SCARS to STARS Illustration" 
                className="w-full max-w-md h-auto rounded-3xl shadow-lg border-4 border-[#5DBB63]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0F3D4C]">Why Choose MediMagic?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#5DBB63]">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-[#0F3D4C] mb-3">Professional Expertise</h3>
              <p className="text-gray-600">FAMAC Accredited Mediator and SASW Registered Social Worker with 20+ years of experience.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#5DBB63]">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-bold text-[#0F3D4C] mb-3">Compassionate Approach</h3>
              <p className="text-gray-600">We understand the emotional complexity of life transitions and provide empathetic, non-judgmental support.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#5DBB63]">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-[#0F3D4C] mb-3">Holistic Support</h3>
              <p className="text-gray-600">From legal mediation to emotional support, we address all aspects of your wellbeing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mediation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0F3D4C]">Mediation Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Professional family law mediation to help you reach fair, sustainable agreements.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediationServices.map((service, idx) => (
              <div 
                key={idx}
                onClick={() => setLocation(service.path)}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border-t-4 border-[#5DBB63]"
              >
                <h3 className="text-xl font-bold text-[#0F3D4C] mb-3">{service.name}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <div className="mt-4 text-[#5DBB63] font-semibold">Learn More →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Social Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0F3D4C]">Social Work Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Compassionate support for life's most challenging transitions.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialWorkServices.map((service, idx) => (
              <div 
                key={idx}
                onClick={() => setLocation(service.path)}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border-t-4 border-[#2F6F73]"
              >
                <h3 className="text-xl font-bold text-[#0F3D4C] mb-3">{service.name}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <div className="mt-4 text-[#2F6F73] font-semibold">Learn More →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0F3D4C]">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 bg-white hover:bg-gray-50 text-left font-semibold text-[#0F3D4C] flex justify-between items-center transition"
                >
                  {faq.q}
                  <span className="text-[#5DBB63]">{expandedFAQ === idx ? "−" : "+"}</span>
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0F3D4C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-200 mb-8">
            Contact us today for a free consultation to discuss how we can support you through life's transitions.
          </p>
          <button 
            onClick={handleBooking}
            className="medimagic-button"
          >
            Book a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
