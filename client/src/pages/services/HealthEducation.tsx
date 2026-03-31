import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function HealthEducation() {
  return (
    <ServicePageTemplate
      title="Health Education Services"
      description="Empower yourself with health knowledge. Our programs provide education on health topics, wellness, and disease management."
      benefits={[
        "Evidence-based health information",
        "Practical wellness strategies",
        "Disease management education",
        "Preventive health knowledge",
        "Improved health outcomes",
        "Empowered decision-making",
      ]}
      process={[
        "Assessment of learning needs",
        "Development of educational program",
        "Delivery of health education sessions",
        "Resource provision and support",
        "Ongoing guidance and follow-up",
      ]}
    />
  );
}
