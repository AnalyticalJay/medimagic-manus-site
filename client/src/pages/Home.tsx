import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => {
            if (!prev.includes(entry.target.id)) {
              return [...prev, entry.target.id];
            }
            return prev;
          });
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('[data-scroll-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleBooking = () => {
    setLocation("/booking");
  };

  const mediationServices = [
    { 
      name: "Divorce Settlement Agreements", 
      path: "/services/divorce-settlement", 
      desc: "Structured mediation to help couples reach fair, legally sound divorce agreements.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/pasted_file_fcM4sa_divorce-settleent_e4ada8cb.png"
    },
    { 
      name: "Parenting Plan", 
      path: "/services/parenting-plans", 
      desc: "Child-centred co-parenting frameworks prioritising children's wellbeing.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/pasted_file_onhlOo_ParentingPLans_c3fa36c8.png"
    },
    { 
      name: "Maintenance Agreements", 
      path: "/services/maintenance-agreements", 
      desc: "Structured mediation to help couples reach fair, legally sound divorce agreements.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/pasted_file_zQexNL_MaintenanceAgreements_32fcc08a.png"
    },
    { 
      name: "Voice of the Child Assessments", 
      path: "/services/voice-of-child", 
      desc: "Structured mediation to help couples reach fair, legally sound divorce agreements.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/pasted_file_Nj9mcO_Voiceofchildinterviews_d8b25c08.png"
    },
  ];

  const socialWorkServices = [
    { name: "Adult Divorce Preparation", path: "/services/adult-divorce-prep", desc: "Emotional and practical support for adults navigating the complexities of divorce and separation.", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/adult-divorce-prep-hdiAXYVUZdPW3m8urReFKL.webp" },
    { name: "Illness & Disability Support", path: "/services/illness-disability", desc: "Compassionate guidance for individuals and families coping with illness, disability, and life transitions.", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/illness-disability-BUDZwUcbhbA5Z3fUUjjZHQ.webp" },
    { name: "Palliative & End-of-Life Care", path: "/services/palliative-care", desc: "Holistic support for patients, families, and caregivers during end-of-life journeys.", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/palliative-care-8v5vkQgC9LPzGCeQSk3dJY.webp" },
    { name: "Health Education & Promotion", path: "/services/health-education", desc: "Educational programs promoting mental health, wellbeing, and healthy life transitions.", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/health-education-JaYkB6NtYHP2RzBMhjfDNE.webp" },
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
          <div className="absolute top-8 right-8 w-36 h-36 rounded-full border-4 border-[#5DBB63] bg-white flex items-center justify-center shadow-lg">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/LogoMedi_a41f255a.png" 
              alt="MediMagic Logo" 
              className="w-24 h-24 object-contain"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="bg-[#5DBB63] rounded-2xl sm:rounded-3xl px-3 py-2 inline-block mb-4 sm:mb-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">MEDI MAGIC</h1>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                STEADY SUPPORT THROUGH LIFE'S MOST DIFFICULT TRANSITIONS
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8">
                Medi Magic offers Professional Family Law Mediation and Social Work Services, bringing structure, fairness and calm direction to times of change.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={handleBooking}
                  className="medimagic-button text-sm sm:text-base"
                >
                  Book a Consultation
                </button>
                <button 
                  onClick={() => setLocation("/about")}
                  className="medimagic-button-outline text-sm sm:text-base"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Illustration - SCARS to STARS Image */}
            <div className="flex justify-center mt-8 lg:mt-0">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/ChatGPTImageMar23,2026,10_49_26AM_eb0483f5.png" 
                alt="SCARS to STARS Illustration" 
                className="w-full max-w-sm sm:max-w-md h-auto rounded-2xl sm:rounded-3xl shadow-lg border-4 border-[#5DBB63]"
              />
            </div>
          </div>

          {/* SCARS to STARS Tagline - Bottom of Hero */}
          <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-4 sm:py-6 border-2 border-[#5DBB63] shadow-md text-center relative">
            <div className="absolute -left-4 sm:-left-8 top-1/2 transform -translate-y-1/2 text-4xl sm:text-6xl text-[#5DBB63]">★</div>
            <div className="absolute -right-4 sm:-right-8 top-1/2 transform -translate-y-1/2 text-4xl sm:text-6xl text-[#5DBB63]">★</div>
            <p className="text-lg sm:text-2xl md:text-3xl font-bold text-[#5DBB63] px-4">
              Changing SCARS into STARS - One BATTLE at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F3D4C] mb-6">Welcome to MediMagic</h2>
              <p className="text-gray-600 mb-4">
                MediMagic is a uniquely integrated practice combining family law mediation and professional social work support. Our approach addresses both the <strong>practical decisions</strong> and the <strong>emotional realities</strong> that arise during conflict, separation, illness, or major life change.
              </p>
              <p className="text-gray-600 mb-8">
                We focus on helping individuals move forward with clarity, dignity, and stability through structured, ethical, and client-centred care.
              </p>
              <button 
                onClick={() => setLocation("/about")}
                className="text-[#5DBB63] font-semibold hover:underline"
              >
                Learn About Cornelia →
              </button>
            </div>

            {/* Right Column - Feature Boxes */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#5DBB63]">
                    <span className="text-white text-xl">🛡️</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F3D4C]">Confidential & Safe</h3>
                  <p className="text-gray-600">All sessions are conducted with strict confidentiality and professional ethics.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#5DBB63]">
                    <span className="text-white text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F3D4C]">Emotionally Intelligent</h3>
                  <p className="text-gray-600">We address both practical decisions and emotional wellbeing throughout your journey.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#5DBB63]">
                    <span className="text-white text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F3D4C]">Highly Qualified</h3>
                  <p className="text-gray-600">FAMAC Accredited Mediator and SASW Registered Social Worker with 20+ years experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mediation Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" data-scroll-animate id="mediation-section">        <div className="max-w-7xl mx-auto">
          {/* Section Title with Green Line and Navy Bar */}
          <div className="border-t-8 border-[#5DBB63] mb-12">
            <div className="bg-[#0F3D4C] py-6 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Mediation Services</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {mediationServices.map((service, idx) => (
              <div 
                key={idx}
                className="bg-[#0F3D4C] rounded-lg overflow-hidden shadow-lg hover:shadow-xl active:shadow-md transition-all cursor-pointer flex flex-col h-full transform hover:scale-105 active:scale-100"
                onClick={() => setLocation(service.path)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLocation(service.path)}
              >
                {/* Image with Green Border */}
                <div className="border-4 border-[#5DBB63] overflow-hidden h-48 flex-shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-white mb-3 text-center">{service.name}</h3>
                  <p className="text-gray-200 mb-6 text-center text-sm flex-grow">{service.desc}</p>
                  <div className="flex justify-center">
                    <button className="bg-[#5DBB63] hover:bg-[#7FD17F] active:bg-[#5DBB63] text-white font-semibold py-2 px-6 rounded-full transition-all shadow-lg hover:shadow-xl active:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0F3D4C]" aria-label={`Learn more about ${service.name}`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Work Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-scroll-animate id="social-work-section">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Green Line and Navy Bar */}
          <div className="border-t-8 border-[#5DBB63] mb-12">
            <div className="bg-[#0F3D4C] py-6 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Social Work Services</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {socialWorkServices.map((service, idx) => (
              <div 
                key={idx}
                className="bg-[#0F3D4C] rounded-lg overflow-hidden shadow-lg hover:shadow-xl active:shadow-md transition-all cursor-pointer flex flex-col h-full transform hover:scale-105 active:scale-100"
                onClick={() => setLocation(service.path)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLocation(service.path)}
              >
                {/* Image with Green Border */}
                <div className="border-4 border-[#5DBB63] overflow-hidden h-48 flex-shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-white mb-3 text-center">{service.name}</h3>
                  <p className="text-gray-200 mb-6 text-center text-sm flex-grow">{service.desc}</p>
                  <div className="flex justify-center">
                    <button className="bg-[#5DBB63] hover:bg-[#7FD17F] active:bg-[#5DBB63] text-white font-semibold py-2 px-6 rounded-full transition-all shadow-lg hover:shadow-xl active:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0F3D4C]" aria-label={`Learn more about ${service.name}`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MediMagic Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-scroll-animate id="why-choose-section">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Green Line and Navy Bar */}
          <div className="border-t-8 border-[#5DBB63] mb-12">
            <div className="bg-[#0F3D4C] py-6 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Why Choose MediMagic</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#5DBB63] text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-[#0F3D4C] mb-3">Confidential & Safe</h3>
              <p className="text-gray-600">All sessions are conducted with strict confidentiality and professional ethics.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#5DBB63] text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-[#0F3D4C] mb-3">Emotionally Intelligent</h3>
              <p className="text-gray-600">We address both practical decisions and emotional wellbeing throughout your journey.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#5DBB63] text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-[#0F3D4C] mb-3">Highly Qualified</h3>
              <p className="text-gray-600">FAMAC Accredited Mediator and SASW Registered Social Worker with 20+ years experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" data-scroll-animate id="faq-section">
        <div className="max-w-3xl mx-auto">
          {/* Section Title with Green Line and Navy Bar */}
          <div className="border-t-8 border-[#5DBB63] mb-12">
            <div className="bg-[#0F3D4C] py-6 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Frequently Asked Questions</h2>
            </div>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden bg-[#0F3D4C]">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 bg-[#0F3D4C] hover:bg-[#1a4d5f] text-left font-semibold text-white flex justify-between items-center transition"
                >
                  {faq.q}
                  <span className="text-[#5DBB63] text-2xl font-bold">{expandedFAQ === idx ? "−" : "+"}</span>
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 py-4 bg-[#0a2a33] text-gray-100 border-t border-[#5DBB63]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
