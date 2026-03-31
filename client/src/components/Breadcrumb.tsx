import { useLocation } from "wouter";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const [, navigate] = useLocation();

  return (
    <nav className="bg-gray-50 py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 flex-wrap">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
              )}
              {item.href ? (
                <button
                  onClick={() => navigate(item.href!)}
                  className="text-[#5DBB63] hover:text-[#7FD17F] font-medium transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-gray-600 font-medium">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
