import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [, setLocation] = useLocation();

  const mediationServices = [
    { name: "Divorce Settlement", path: "/services/divorce-settlement" },
    { name: "Maintenance Agreements", path: "/services/maintenance-agreements" },
    { name: "Parenting Plans", path: "/services/parenting-plans" },
    { name: "Voice of Child", path: "/services/voice-of-child" },
  ];

  const socialWorkServices = [
    { name: "Adult Divorce Prep", path: "/services/adult-divorce-prep" },
    { name: "Illness & Disability", path: "/services/illness-disability" },
    { name: "Palliative Care", path: "/services/palliative-care" },
    { name: "Health Education", path: "/services/health-education" },
  ];

  const handleNavigation = (path: string) => {
    setLocation(path);
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 font-bold text-2xl text-green-600 cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            MediMagic
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => handleNavigation("/")}
              className="px-3 py-2 rounded-md text-gray-700 hover:text-green-600 transition-colors"
            >
              Home
            </button>

            {/* Mediation Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-gray-700 hover:text-green-600 transition-colors flex items-center">
                Mediation Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {mediationServices.map((service) => (
                  <button
                    key={service.path}
                    onClick={() => handleNavigation(service.path)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 first:rounded-t-md last:rounded-b-md transition-colors"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Work Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-gray-700 hover:text-green-600 transition-colors flex items-center">
                Social Work Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {socialWorkServices.map((service) => (
                  <button
                    key={service.path}
                    onClick={() => handleNavigation(service.path)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 first:rounded-t-md last:rounded-b-md transition-colors"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavigation("/about")}
              className="px-3 py-2 rounded-md text-gray-700 hover:text-green-600 transition-colors"
            >
              About
            </button>

            <button
              onClick={() => handleNavigation("/contact")}
              className="px-3 py-2 rounded-md text-gray-700 hover:text-green-600 transition-colors"
            >
              Contact
            </button>

            <Button 
              onClick={() => handleNavigation("/booking")}
              className="ml-4 bg-green-600 hover:bg-green-700 text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600"
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
              className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-green-50"
            >
              Home
            </button>

            {/* Mobile Mediation Dropdown */}
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === "mediation" ? null : "mediation")}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 flex items-center justify-between"
              >
                Mediation Services
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "mediation" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "mediation" && (
                <div className="pl-4">
                  {mediationServices.map((service) => (
                    <button
                      key={service.path}
                      onClick={() => handleNavigation(service.path)}
                      className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-600"
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
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 flex items-center justify-between"
              >
                Social Work Services
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "socialwork" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "socialwork" && (
                <div className="pl-4">
                  {socialWorkServices.map((service) => (
                    <button
                      key={service.path}
                      onClick={() => handleNavigation(service.path)}
                      className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-600"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation("/about")}
              className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-green-50"
            >
              About
            </button>

            <button
              onClick={() => handleNavigation("/contact")}
              className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-green-50"
            >
              Contact
            </button>

            <Button 
              onClick={() => handleNavigation("/booking")}
              className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
