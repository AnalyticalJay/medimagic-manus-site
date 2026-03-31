import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Settings, LayoutDashboard } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [, setLocation] = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mediationServices = [
    { name: "Divorce Settlement Agreements", path: "/services/divorce-settlement" },
    { name: "Parenting Plan", path: "/services/parenting-plans" },
    { name: "Maintenance Agreements", path: "/services/maintenance-agreements" },
    { name: "Voice of the Child Assessments", path: "/services/voice-of-child" },
  ];

  const socialWorkServices = [
    { name: "Adult Divorce Preparation", path: "/services/adult-divorce-prep" },
    { name: "Illness & Disability Support", path: "/services/illness-disability" },
    { name: "Palliative & End-of-Life Care", path: "/services/palliative-care" },
    { name: "Health Education & Promotion", path: "/services/health-education" },
  ];

  const handleNavigation = (path: string) => {
    setLocation(path);
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className={`medimagic-nav sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-xl" : "shadow-lg"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 font-bold text-2xl text-white cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleNavigation("/")}
          >
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => handleNavigation("/")}
              className="px-3 py-2 rounded-md text-white hover:bg-[#4a9a52] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5DBB63]"
              aria-label="Home"
            >
              Home
            </button>

            <button
              onClick={() => handleNavigation("/about")}
              className="px-3 py-2 rounded-md text-white hover:bg-[#4a9a52] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5DBB63]"
              aria-label="About"
            >
              About
            </button>

            {/* Mediation Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-white hover:bg-[#4a9a52] transition-all flex items-center font-medium group-hover:scale-105">
                Mediation
                <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 z-50">
                {mediationServices.map((service) => (
                  <button
                    key={service.path}
                    onClick={() => handleNavigation(service.path)}
                    className="block w-full text-left px-4 py-3 text-[#1a3a52] hover:bg-[#e8f5e9] hover:text-[#5DBB63] first:rounded-t-md last:rounded-b-md transition-all duration-200 font-medium hover:translate-x-1"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Work Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-white hover:bg-[#4a9a52] transition-all flex items-center font-medium group-hover:scale-105">
                Social Work
                <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 z-50">
                {socialWorkServices.map((service) => (
                  <button
                    key={service.path}
                    onClick={() => handleNavigation(service.path)}
                    className="block w-full text-left px-4 py-3 text-[#1a3a52] hover:bg-[#e8f5e9] hover:text-[#5DBB63] first:rounded-t-md last:rounded-b-md transition-all duration-200 font-medium hover:translate-x-1"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavigation("/contact")}
              className="px-3 py-2 rounded-md text-white hover:bg-[#4a9a52] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5DBB63]"
              aria-label="Contact"
            >
              Contact
            </button>

            {user ? (
              <>
                {user.role === "admin" && (
                  <button
                    onClick={() => handleNavigation("/admin")}
                    className="ml-2 px-4 py-2 bg-[#1a3a52] text-white hover:bg-[#0f2438] rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Settings className="w-4 h-4" />
                    Admin
                  </button>
                )}
                <button
                  onClick={() => handleNavigation("/dashboard")}
                  className="ml-4 px-6 py-2 bg-[#1a3a52] text-white hover:bg-[#0f2438] rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </button>
              </>
            ) : (
              <button
                onClick={() => handleNavigation("/portal")}
                className="ml-4 px-6 py-2 bg-white text-[#5DBB63] hover:bg-gray-100 rounded-full font-semibold transition-colors"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#4a9a52]"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <button
              onClick={() => handleNavigation("/")}
              className="block w-full text-left px-3 py-2 rounded-md text-white hover:bg-[#4a9a52] font-medium"
            >
              Home
            </button>

            <button
              onClick={() => handleNavigation("/about")}
              className="block w-full text-left px-3 py-2 rounded-md text-white hover:bg-[#4a9a52] font-medium"
            >
              About
            </button>

            {/* Mobile Mediation Dropdown */}
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === "mediation" ? null : "mediation")}
                className="block w-full text-left px-3 py-2 rounded-md text-white hover:bg-[#4a9a52] flex items-center justify-between font-medium"
              >
                Mediation
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "mediation" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "mediation" && (
                <div className="pl-4 bg-[#4a9a52]">
                  {mediationServices.map((service) => (
                    <button
                      key={service.path}
                      onClick={() => handleNavigation(service.path)}
                      className="block w-full text-left px-3 py-2 text-white hover:bg-[#3d7a42] font-medium"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Social Work Dropdown */}
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === "socialwork" ? null : "socialwork")}
                className="block w-full text-left px-3 py-2 rounded-md text-white hover:bg-[#4a9a52] flex items-center justify-between font-medium"
              >
                Social Work
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "socialwork" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "socialwork" && (
                <div className="pl-4 bg-[#4a9a52]">
                  {socialWorkServices.map((service) => (
                    <button
                      key={service.path}
                      onClick={() => handleNavigation(service.path)}
                      className="block w-full text-left px-3 py-2 text-white hover:bg-[#3d7a42] font-medium"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation("/contact")}
              className="block w-full text-left px-3 py-2 rounded-md text-white hover:bg-[#4a9a52] font-medium"
            >
              Contact
            </button>

            {user ? (
              <>
                {user.role === "admin" && (
                  <button
                    onClick={() => handleNavigation("/admin")}
                    className="w-full mt-2 px-6 py-2 bg-[#1a3a52] text-white hover:bg-[#0f2438] rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Settings className="w-4 h-4" />
                    Admin
                  </button>
                )}
                <button
                  onClick={() => handleNavigation("/dashboard")}
                  className="w-full mt-4 px-6 py-2 bg-[#1a3a52] text-white hover:bg-[#0f2438] rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </button>
              </>
            ) : (
              <button
                onClick={() => handleNavigation("/portal")}
                className="w-full mt-4 px-6 py-2 bg-white text-[#5DBB63] hover:bg-gray-100 rounded-full font-semibold transition-colors"
              >
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
