import React from "react";
import ServiceSidebar from "./ServiceSidebar";

interface Service {
  name: string;
  path: string;
}

interface ServicePageWithSidebarProps {
  category: "mediation" | "social-work";
  currentService: string;
  services: Service[];
  children: React.ReactNode;
}

/**
 * Wrapper component that provides consistent 3-column layout with sidebar
 * for all service pages. Handles the grid structure and sidebar positioning.
 */
export default function ServicePageWithSidebar({
  category,
  currentService,
  services,
  children,
}: ServicePageWithSidebarProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar - Left Column */}
          <div className="md:col-span-1 order-2 md:order-1">
            <ServiceSidebar
              category={category}
              currentService={currentService}
              services={services}
            />
          </div>

          {/* Main Content - Right Column */}
          <div className="md:col-span-2 order-1 md:order-2">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
