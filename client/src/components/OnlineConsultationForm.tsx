import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";


export function OnlineConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "mediation" as "mediation" | "social-work",
    specificService: "",
    briefDescription: "",
    urgency: "medium" as "low" | "medium" | "high",
    preferredContactMethod: "email" as "email" | "phone" | "both",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitMutation = trpc.onlineConsultation.submit.useMutation();

  const mediationServices = [
    "Divorce Settlement Agreements",
    "Parenting Plan",
    "Maintenance Agreements",
    "Voice of the Child Assessments",
  ];

  const socialWorkServices = [
    "Adult Divorce Preparation",
    "Illness & Disability Support",
    "Palliative & End-of-Life Care",
    "Health Education & Promotion",
  ];

  const specificServices = formData.serviceType === "mediation" ? mediationServices : socialWorkServices;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value as any }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.serviceType,
        specificService: formData.specificService,
        briefDescription: formData.briefDescription,
        urgency: formData.urgency,
        preferredContactMethod: formData.preferredContactMethod,
      });

      alert("Submission Successful!\n\nYour consultation request has been submitted. Cornelia will review it and send you available time slots if approved.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "mediation",
        specificService: "",
        briefDescription: "",
        urgency: "medium",
        preferredContactMethod: "email",
      });
    } catch (error: any) {
      alert("Submission Failed\n\n" + (error.message || "There was an error submitting your request. Please try again."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-8 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#0F3D4C]">Your Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+27 (0) 21 XXX XXXX"
                  required
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Service Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#0F3D4C]">Service Selection</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
              <Select value={formData.serviceType} onValueChange={(value) => handleSelectChange("serviceType", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mediation">Family Law Mediation</SelectItem>
                  <SelectItem value="social-work">Social Work Support</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Specific Service *</label>
              <Select value={formData.specificService} onValueChange={(value) => handleSelectChange("specificService", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a specific service" />
                </SelectTrigger>
                <SelectContent>
                  {specificServices.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Consultation Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#0F3D4C]">Consultation Details</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brief Description of Your Situation *
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Please provide a brief overview of your situation and why you need this consultation (minimum 10 characters).
              </p>
              <Textarea
                name="briefDescription"
                value={formData.briefDescription}
                onChange={handleChange}
                placeholder="Describe your situation and what you hope to achieve..."
                required
                minLength={10}
                className="w-full min-h-32"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level *</label>
                <Select value={formData.urgency} onValueChange={(value) => handleSelectChange("urgency", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select urgency level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Can wait a few weeks</SelectItem>
                    <SelectItem value="medium">Medium - Within 1-2 weeks</SelectItem>
                    <SelectItem value="high">High - Urgent, within days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method *</label>
                <Select value={formData.preferredContactMethod} onValueChange={(value) => handleSelectChange("preferredContactMethod", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select contact method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="both">Both Email and Phone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Terms & Submission */}
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              By submitting this form, you agree that Cornelia will review your request and contact you to discuss whether an online consultation is appropriate for your situation. If approved, she will send you available time slots to select from.
            </p>

            <Button
              type="submit"
              disabled={isSubmitting || submitMutation.isPending}
              className="w-full medimagic-button"
            >
              {isSubmitting || submitMutation.isPending ? "Submitting..." : "Submit Consultation Request"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
