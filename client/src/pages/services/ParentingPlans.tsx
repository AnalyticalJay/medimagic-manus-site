import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function ParentingPlans() {
  return (
    <ServicePageTemplate
      title="Parenting Plans Mediation"
      description="Create a parenting plan that prioritizes your children's wellbeing. Our mediators help parents develop practical, child-focused arrangements that work for the whole family."
      benefits={[
        "Child-centered approach to arrangements",
        "Flexible scheduling that adapts to needs",
        "Clear communication guidelines",
        "Reduced conflict for children",
        "Maintains strong parent-child relationships",
        "Sustainable long-term arrangements",
      ]}
      process={[
        "Assessment of children's needs and preferences",
        "Discussion of parenting values and goals",
        "Development of custody and access arrangements",
        "Creation of communication protocols",
        "Agreement on decision-making responsibilities",
      ]}
    />
  );
}
