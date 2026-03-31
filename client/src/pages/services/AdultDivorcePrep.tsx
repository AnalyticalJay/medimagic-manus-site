import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function AdultDivorcePrep() {
  return (
    <ServicePageTemplate
      title="Adult Divorce Preparation"
      description="Prepare for your divorce with professional support. Our social workers help adults navigate the emotional, practical, and legal aspects of divorce."
      benefits={[
        "Emotional support and coping strategies",
        "Practical planning and organization",
        "Understanding legal processes",
        "Financial planning guidance",
        "Support network development",
        "Reduced stress and anxiety",
      ]}
      process={[
        "Initial assessment of your situation",
        "Development of personalized support plan",
        "Regular counseling and guidance sessions",
        "Practical planning and problem-solving",
        "Ongoing support through the process",
      ]}
    />
  );
}
