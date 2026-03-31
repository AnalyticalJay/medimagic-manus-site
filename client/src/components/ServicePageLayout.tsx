import { ReactNode } from "react";
import ServiceSidebar from "./ServiceSidebar";

interface RelatedService {
  name: string;
  path: string;
}

interface ServicePageLayoutProps {
  children: ReactNode;
  category: "mediation" | "social-work";
  currentService: string;
  services: RelatedService[];
}

export default function ServicePageLayout({
  children,
  category,
  currentService,
  services,
}: ServicePageLayoutProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 order-2 md:order-1">
            <ServiceSidebar
              category={category}
              currentService={currentService}
              services={services}
            />
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 order-1 md:order-2">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
