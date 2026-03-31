import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function MaintenanceAgreements() {
  return (
    <ServicePageTemplate
      title="Maintenance Agreements Mediation"
      description="Establish fair and sustainable maintenance arrangements. Our mediators help both parties reach agreements on spousal and child maintenance that work for everyone."
      benefits={[
        "Fair calculation of maintenance obligations",
        "Flexible payment arrangements",
        "Consideration of changing circumstances",
        "Reduced conflict and stress",
        "Faster than court proceedings",
        "Customized solutions for your situation",
      ]}
      process={[
        "Review of financial circumstances and obligations",
        "Discussion of maintenance needs and capacity",
        "Negotiation of fair terms",
        "Agreement on payment schedule and conditions",
        "Documentation and implementation",
      ]}
    />
  );
}
