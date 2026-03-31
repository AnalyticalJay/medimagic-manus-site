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
      <section className="medimagic-hero py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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

            {/* Right Illustration */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 w-full max-w-md h-96 flex items-center justify-center border-4 border-[#5DBB63]">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📖✨</div>
                  <p className="text-2xl font-bold mb-2">Old Story</p>
                  <p className="text-sm mb-6">SCARS, Regret, Fear, Pain</p>
                  <div className="border-t-2 border-white my-4"></div>
                  <p className="text-2xl font-bold mb-2">New Story</p>
                  <p className="text-sm">Transformation, Growth, Hope</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="medimagic-section-title text-center mb-4">
            Changing SCARS into STARS - One BATTLE at a time.
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Welcome to MediMagic</h3>
            <p className="text-gray-700 mb-4">
              MediMagic is a uniquely integrated practice combining family law mediation and professional social work support. Our approach addresses both the practical decisions and the emotional realities that arise during conflict, separation, illness, or major life change.
            </p>
            <p className="text-gray-700">
              We focus on helping individuals move forward with clarity, dignity, and stability through structured, ethical, and client-centred care.
            </p>
            <button 
              onClick={() => setLocation("/about")}
              className="mt-6 text-[#5DBB63] hover:text-[#4a9a52] font-semibold transition-colors"
            >
              Learn About Cornelia →
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="medimagic-section-title text-center mb-12">
            WHY CHOOSE MEDIMAGIC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Confidential & Safe</h3>
              <p className="text-gray-600">All sessions are conducted with strict confidentiality and professional ethics.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Emotionally Intelligent</h3>
              <p className="text-gray-600">We address both practical decisions and emotional wellbeing throughout your journey.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Highly Qualified</h3>
              <p className="text-gray-600">FAMAC Accredited Mediator and SASW Registered Social Worker with 20+ years experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mediation Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="medimagic-section-title text-center mb-12">MEDIATION SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediationServices.map((service) => (
              <div key={service.name} className="medimagic-card p-6">
                <h3 className="text-lg font-bold text-[#1a3a52] mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <button 
                  onClick={() => setLocation(service.path)}
                  className="text-[#5DBB63] hover:text-[#4a9a52] font-semibold transition-colors"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Work Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="medimagic-section-title text-center mb-12">SOCIAL WORK SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialWorkServices.map((service) => (
              <div key={service.name} className="medimagic-card p-6">
                <h3 className="text-lg font-bold text-[#1a3a52] mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <button 
                  onClick={() => setLocation(service.path)}
                  className="text-[#5DBB63] hover:text-[#4a9a52] font-semibold transition-colors"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="medimagic-section-title text-center mb-12">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="medimagic-card">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-semibold text-[#1a3a52] hover:bg-gray-50 transition-colors flex justify-between items-center"
                >
                  {faq.q}
                  <span className={`transition-transform ${expandedFAQ === idx ? "rotate-180" : ""}`}>▼</span>
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 pb-4 text-gray-600 border-t border-gray-200 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Move Forward?</h2>
          <p className="text-lg text-gray-100 mb-8">
            Take the first step towards clarity and resolution. Book a consultation with Cornelia today.
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
