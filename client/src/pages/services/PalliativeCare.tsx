import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function PalliativeCare() {
  return (
    <ServicePageTemplate
      title="Palliative Care Support"
      description="Provide compassionate support during end-of-life care. Our social workers help families navigate palliative care with dignity and comfort."
      benefits={[
        "Compassionate end-of-life support",
        "Family communication and planning",
        "Grief and bereavement support",
        "Coordination of care services",
        "Spiritual and emotional support",
        "Dignity and comfort focus",
      ]}
      process={[
        "Initial consultation with patient and family",
        "Development of care plan",
        "Coordination of medical and social services",
        "Regular support and check-ins",
        "Bereavement support after passing",
      ]}
    />
  );
}
