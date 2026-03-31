import { useLocation } from "wouter";
import { ChevronRight } from "lucide-react";

interface RelatedService {
  name: string;
  path: string;
  isActive?: boolean;
}

interface ServiceSidebarProps {
  category: "mediation" | "social-work";
  currentService: string;
  services: RelatedService[];
}

export default function ServiceSidebar({
  category,
  currentService,
  services,
}: ServiceSidebarProps) {
  const [, navigate] = useLocation();

  const categoryTitle =
    category === "mediation" ? "Mediation Services" : "Social Work Services";

  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="sticky top-20 bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        {/* Sidebar Header */}
        <div className="bg-[#0F3D4C] px-6 py-4">
          <h3 className="text-lg font-bold text-white">{categoryTitle}</h3>
        </div>

        {/* Services List */}
        <nav className="divide-y divide-gray-200">
          {services.map((service, idx) => (
            <button
              key={idx}
              onClick={() => navigate(service.path)}
              className={`w-full px-6 py-4 text-left font-medium transition-colors flex items-center justify-between group ${
                currentService === service.name
                  ? "bg-[#5DBB63]/10 text-[#0F3D4C] border-l-4 border-[#5DBB63]"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="flex-1">{service.name}</span>
              <ChevronRight
                className={`w-4 h-4 transition-transform ${
                  currentService === service.name
                    ? "text-[#5DBB63]"
                    : "text-gray-400 group-hover:text-gray-600"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <button
            onClick={() => navigate("/booking")}
            className="w-full bg-[#5DBB63] hover:bg-[#7FD17F] text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </aside>
  );
}
