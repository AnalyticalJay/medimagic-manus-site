import { useLocation } from "wouter";

export default function Footer() {
  const [, setLocation] = useLocation();

  return (
    <footer className="medimagic-footer py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">MediMagic</h3>
            <p className="text-gray-300 text-sm">
              Professional Family Law Mediation and Social Work Services
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => setLocation("/services/divorce-settlement")}
                  className="hover:text-[#5DBB63] transition-colors"
                >
                  Divorce Settlement
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation("/services/parenting-plans")}
                  className="hover:text-[#5DBB63] transition-colors"
                >
                  Parenting Plans
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation("/services/maintenance-agreements")}
                  className="hover:text-[#5DBB63] transition-colors"
                >
                  Maintenance Agreements
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => setLocation("/")}
                  className="hover:text-[#5DBB63] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation("/about")}
                  className="hover:text-[#5DBB63] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation("/contact")}
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
    </footer>
  );
}
