import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function DivorceSettlement() {
  return (
    <ServicePageTemplate
      title="Divorce Settlement Mediation"
      description="Navigate your divorce with confidence. Our expert mediators help you reach fair and mutually beneficial settlements while minimizing conflict and protecting your interests."
      benefits={[
        "Fair and equitable division of assets",
        "Reduced legal costs compared to litigation",
        "Faster resolution process",
        "Confidential and private proceedings",
        "Customized solutions tailored to your needs",
        "Reduced emotional stress for all parties",
      ]}
      process={[
        "Initial consultation to understand your situation and goals",
        "Gathering financial information from both parties",
        "Mediation sessions to discuss key issues",
        "Negotiation of settlement terms",
        "Documentation and finalization of agreement",
      ]}
      faq={[
        {
          question: "How long does the divorce settlement process typically take?",
          answer: "The timeline varies depending on complexity, but mediation typically takes 3-6 months, compared to 1-2 years for litigation.",
        },
        {
          question: "Is mediation legally binding?",
          answer: "The settlement agreement reached through mediation becomes legally binding once both parties sign and it's approved by the court.",
        },
        {
          question: "What if we can't agree on everything?",
          answer: "Our mediators are skilled at finding creative solutions. If certain issues remain unresolved, you can still pursue litigation for those specific matters.",
        },
      ]}
    />
  );
}
