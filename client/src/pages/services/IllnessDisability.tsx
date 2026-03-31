import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function IllnessDisability() {
  return (
    <ServicePageTemplate
      title="Illness & Disability Support"
      description="Navigate health challenges with professional support. Our social workers provide comprehensive assistance for individuals and families dealing with illness and disability."
      benefits={[
        "Comprehensive needs assessment",
        "Resource and service coordination",
        "Emotional support and coping strategies",
        "Family communication facilitation",
        "Access to community resources",
        "Improved quality of life",
      ]}
      process={[
        "Initial consultation and needs assessment",
        "Development of support plan",
        "Coordination of services and resources",
        "Regular check-ins and adjustments",
        "Ongoing monitoring and support",
      ]}
    />
  );
}
