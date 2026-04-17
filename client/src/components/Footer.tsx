import { useLocation } from "wouter";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Footer() {
  const [, setLocation] = useLocation();
  const [expandedMediation, setExpandedMediation] = useState(false);
  const [expandedSocialWork, setExpandedSocialWork] = useState(false);

  const mediationServices = [
    { name: "Divorce Settlement", path: "/services/divorce-settlement" },
    { name: "Parenting Plans", path: "/services/parenting-plans" },
    { name: "Maintenance Agreements", path: "/services/maintenance-agreements" },
  ];

  const socialWorkServices = [
    { name: "Voice of the Child", path: "/services/voice-of-child" },
    { name: "Adult Divorce Preparation", path: "/services/adult-divorce-prep" },
    { name: "Illness & Disability Support", path: "/services/illness-disability" },
    { name: "Palliative Care Support", path: "/services/palliative-care" },
    { name: "Health Education", path: "/services/health-education" },
  ];

  const handleServiceClick = (path: string) => {
    setLocation(path);
    // Scroll to top after navigation
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  const handleNavClick = (path: string) => {
    setLocation(path);
    // Scroll to top after navigation
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  return (
    <footer className="medimagic-footer">
      {/* Green line at top */}
      <div className="h-1 bg-[#5DBB63]"></div>
      
      <div className="bg-[#1a3a52] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info with Logo */}
            <div className="flex flex-col items-center justify-center">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663346956907/m34URbdUs5hQJ7HCnuFYLq/pasted_file_pTZa1S_image_849e5472.png" 
                alt="MediMagic Logo" 
                className="h-32 w-auto mb-4"
              />
              <p className="text-gray-300 text-sm text-center">
                Professional Family Law Mediation and Social Work Services
              </p>
            </div>

            {/* Services with Dropdowns */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-300">
                {/* Mediation Services Dropdown */}
                <div>
                  <button
                    onClick={() => setExpandedMediation(!expandedMediation)}
                    className="flex items-center gap-2 hover:text-[#5DBB63] transition-colors w-full"
                  >
                    <span>Mediation Services</span>
                    <ChevronDown size={16} className={`transform transition-transform ${expandedMediation ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedMediation && (
                    <ul className="ml-4 mt-2 space-y-1">
                      {mediationServices.map((service) => (
                        <li key={service.path}>
                          <button
                            onClick={() => handleServiceClick(service.path)}
                            className="hover:text-[#5DBB63] transition-colors text-xs"
                          >
                            {service.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Social Work Services Dropdown */}
                <div>
                  <button
                    onClick={() => setExpandedSocialWork(!expandedSocialWork)}
                    className="flex items-center gap-2 hover:text-[#5DBB63] transition-colors w-full"
                  >
                    <span>Social Work Services</span>
                    <ChevronDown size={16} className={`transform transition-transform ${expandedSocialWork ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedSocialWork && (
                    <ul className="ml-4 mt-2 space-y-1">
                      {socialWorkServices.map((service) => (
                        <li key={service.path}>
                          <button
                            onClick={() => handleServiceClick(service.path)}
                            className="hover:text-[#5DBB63] transition-colors text-xs"
                          >
                            {service.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <button 
                    onClick={() => handleNavClick("/")}
                    className="hover:text-[#5DBB63] transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("/about")}
                    className="hover:text-[#5DBB63] transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("/contact")}
                    className="hover:text-[#5DBB63] transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="text-sm text-gray-300 space-y-2">
                <p>
                  <strong>Email:</strong><br />
                  <a href="mailto:corneliagriessel@medimagic.co.za" className="hover:text-[#5DBB63] transition-colors">
                    corneliagriessel@medimagic.co.za
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong><br />
                  <a href="tel:+27640344575" className="hover:text-[#5DBB63] transition-colors">
                    +27 64 034 4575
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm text-gray-400 text-center">
              © 2026 MediMagic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
