import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function VoiceOfChild() {
  return (
    <ServicePageTemplate
      title="Voice of Child Services"
      description="Ensure your children's voices are heard. We provide professional services to help children express their wishes and preferences in family matters."
      benefits={[
        "Child's perspective considered in decisions",
        "Professional, neutral facilitation",
        "Age-appropriate communication",
        "Safe environment for expression",
        "Reduced pressure on children",
        "Better outcomes for family arrangements",
      ]}
      process={[
        "Initial consultation with parents",
        "Preparation and explanation for children",
        "Individual sessions with children",
        "Compilation of child's preferences",
        "Sharing findings with parents and mediators",
      ]}
    />
  );
}
