import { useLocation } from "wouter";

export default function Footer() {
  const [, setLocation] = useLocation();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">MediMagic</h3>
            <p className="text-sm">
              Professional mediation and social work services dedicated to transforming challenges into opportunities.
            </p>
          </div>

          {/* Mediation Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Mediation Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => setLocation("/services/divorce-settlement")}
                  className="hover:text-green-400 transition-colors"
                >
                  Divorce Settlement
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation("/services/maintenance-agreements")}
                  className="hover:text-green-400 transition-colors"
                >
                  Maintenance Agreements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation("/services/parenting-plans")}
                  className="hover:text-green-400 transition-colors"
                >
                  Parenting Plans
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation("/services/voice-of-child")}
                  className="hover:text-green-400 transition-colors"
                >
                  Voice of Child
                </button>
              </li>
            </ul>
          </div>

          {/* Social Work Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social Work Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => setLocation("/services/adult-divorce-prep")}
                  className="hover:text-green-400 transition-colors"
                >
                  Adult Divorce Prep
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation("/services/illness-disability")}
                  className="hover:text-green-400 transition-colors"
                >
                  Illness & Disability
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation("/services/palliative-care")}
                  className="hover:text-green-400 transition-colors"
                >
                  Palliative Care
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation("/services/health-education")}
                  className="hover:text-green-400 transition-colors"
                >
                  Health Education
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => setLocation("/about")}
                  className="hover:text-green-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation("/contact")}
                  className="hover:text-green-400 transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation("/booking")}
                  className="hover:text-green-400 transition-colors"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 MediMagic. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
