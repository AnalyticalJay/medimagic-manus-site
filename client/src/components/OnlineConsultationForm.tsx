import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { trpc } from "@/lib/trpc";

export function OnlineConsultationForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    // Page 1: Personal Details
    fullName: "",
    idNumber: "",
    gender: "",
    phoneNumber: "",
    emailAddress: "",
    homeAddress: "",
    preferredCommunication: [] as string[],
    preferredAdministration: "",

    // Page 2: Service Needs
    currentProblem: [] as string[],
    currentProblemOther: "",
    servicesRequired: [] as string[],
    servicesRequiredOther: "",
    historyOfProblem: "",
    historyOfProblemOther: "",

    // Page 3: Procedures and Fees
    paymentOption: "",
    paymentOptionOther: "",
    appointmentCancellation: false,
    telephoneConsultation: false,
    homeVisits: false,
    popiaAgreement: false,

    // Page 4: Appointment Scheduling
    urgencyLevel: "",
    urgencyDescription: "",
    availability: [] as string[],
    availabilitySpecific: "",
    consultationMethod: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitMutation = trpc.onlineConsultation.submit.useMutation();

  const currentProblemOptions = [
    "Divorce / Separation",
    "Parental Rights and Responsibilities (custody / maintenance / visitation)",
    "Illness / Disability",
  ];

  const servicesOptions = [
    "Divorce Settlement Mediation",
    "Maintenance Agreement",
    "Parenting Plan",
    "Voice of the Child Assessment",
    "Divorce Preparation",
    "Illness and Disability Support",
    "Palliative Support",
    "Health Education",
    "General Family Law Mediation Services",
  ];

  const historyOptions = [
    "New problem: No other services from professionals received yet",
    "Referral: Referred for intervention by another professional (Health Care Worker / Lawyer)",
    "Second opinion required: Existing / previous client of another professional",
  ];

  const urgencyOptions = [
    "Immediate / Crisis: High risk of harm to a child or vulnerable person",
    "Very urgent: I have a due date to meet (e.g. Court Date / Hospital Admission / Travel Plan)",
    "Urgent: High risk of emotional distress significantly affecting functioning",
    "High Priority: Escalating circumstances or drastic change in circumstances",
    "Standard: General mediation and guidance required",
    "Not time-sensitive",
  ];

  const availabilityOptions = [
    "Available during standard business hours",
    "Limited to specific timeframes (please specify below)",
    "Available after hours (late afternoons/evenings)",
    "Available on weekends",
    "Available on short notice if required",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const array = prev[name as keyof typeof prev] as string[];
      if (checked) {
        return { ...prev, [name]: [...array, value] };
      } else {
        return { ...prev, [name]: array.filter(item => item !== value) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitMutation.mutateAsync({
        // Flatten all form data for submission
        fullName: formData.fullName,
        idNumber: formData.idNumber,
        gender: formData.gender,
        phoneNumber: formData.phoneNumber,
        emailAddress: formData.emailAddress,
        homeAddress: formData.homeAddress,
        preferredCommunication: formData.preferredCommunication.join(", "),
        preferredAdministration: formData.preferredAdministration,
        currentProblem: formData.currentProblem.join(", "),
        currentProblemOther: formData.currentProblemOther,
        servicesRequired: formData.servicesRequired.join(", "),
        servicesRequiredOther: formData.servicesRequiredOther,
        historyOfProblem: formData.historyOfProblem,
        historyOfProblemOther: formData.historyOfProblemOther,
        paymentOption: formData.paymentOption,
        paymentOptionOther: formData.paymentOptionOther,
        appointmentCancellation: formData.appointmentCancellation,
        telephoneConsultation: formData.telephoneConsultation,
        homeVisits: formData.homeVisits,
        popiaAgreement: formData.popiaAgreement,
        urgencyLevel: formData.urgencyLevel,
        urgencyDescription: formData.urgencyDescription,
        availability: formData.availability.join(", "),
        availabilitySpecific: formData.availabilitySpecific,
        consultationMethod: formData.consultationMethod,
      });

      alert("Submission Successful!\n\nYour consultation request has been submitted. Cornelia will review it and send you available time slots if approved.");

      // Reset form
      setFormData({
        fullName: "",
        idNumber: "",
        gender: "",
        phoneNumber: "",
        emailAddress: "",
        homeAddress: "",
        preferredCommunication: [],
        preferredAdministration: "",
        currentProblem: [],
        currentProblemOther: "",
        servicesRequired: [],
        servicesRequiredOther: "",
        historyOfProblem: "",
        historyOfProblemOther: "",
        paymentOption: "",
        paymentOptionOther: "",
        appointmentCancellation: false,
        telephoneConsultation: false,
        homeVisits: false,
        popiaAgreement: false,
        urgencyLevel: "",
        urgencyDescription: "",
        availability: [],
        availabilitySpecific: "",
        consultationMethod: "",
      });
      setCurrentPage(1);
    } catch (error: any) {
      alert("Submission Failed\n\n" + (error.message || "There was an error submitting your request. Please try again."));
    } finally {
      setIsSubmitting(false);
    }
  };

  const isPage1Valid = formData.fullName && formData.idNumber && formData.gender && formData.phoneNumber && formData.emailAddress && formData.homeAddress && formData.preferredCommunication.length > 0 && formData.preferredAdministration;
  const isPage2Valid = formData.currentProblem.length > 0 && formData.servicesRequired.length > 0 && formData.historyOfProblem;
  const isPage3Valid = formData.paymentOption && formData.appointmentCancellation && formData.telephoneConsultation && formData.homeVisits && formData.popiaAgreement;
  const isPage4Valid = formData.urgencyLevel && formData.urgencyDescription && formData.availability.length > 0 && formData.consultationMethod;

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-8 shadow-lg">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-semibold text-gray-700">Step {currentPage} of 4</h3>
            <span className="text-sm font-semibold text-[#5DBB63]">{Math.round((currentPage / 4) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-[#5DBB63] h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${(currentPage / 4) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                currentPage >= 1 ? 'bg-[#5DBB63] text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                1
              </div>
              <span className="text-xs text-gray-600 mt-1 text-center">Personal</span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className={`h-0.5 flex-1 ${
                currentPage >= 2 ? 'bg-[#5DBB63]' : 'bg-gray-300'
              }`} />
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                currentPage >= 2 ? 'bg-[#5DBB63] text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                2
              </div>
              <span className="text-xs text-gray-600 mt-1 text-center">Services</span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className={`h-0.5 flex-1 ${
                currentPage >= 3 ? 'bg-[#5DBB63]' : 'bg-gray-300'
              }`} />
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                currentPage >= 3 ? 'bg-[#5DBB63] text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                3
              </div>
              <span className="text-xs text-gray-600 mt-1 text-center">Procedures</span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className={`h-0.5 flex-1 ${
                currentPage >= 4 ? 'bg-[#5DBB63]' : 'bg-gray-300'
              }`} />
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                currentPage >= 4 ? 'bg-[#5DBB63] text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                4
              </div>
              <span className="text-xs text-gray-600 mt-1 text-center">Scheduling</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Page 1: Personal Details */}
          {currentPage === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0F3D4C] mb-2">Personal Details</h2>
                <p className="text-gray-600 text-sm mb-6">Please provide your personal information</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name and Surname *</label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ID Number *</label>
                <Input
                  type="text"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleInputChange}
                  placeholder="Your ID number"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                <Select value={formData.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+27 (0) 21 XXX XXXX"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Home Address *</label>
                <Input
                  type="text"
                  name="homeAddress"
                  value={formData.homeAddress}
                  onChange={handleInputChange}
                  placeholder="Your home address"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Method of Communication *</label>
                <div className="space-y-2">
                  {["Phone", "WhatsApp", "Email"].map((method) => (
                    <div key={method} className="flex items-center">
                      <Checkbox
                        id={`comm-${method}`}
                        checked={formData.preferredCommunication.includes(method)}
                        onCheckedChange={(checked) => handleCheckboxChange("preferredCommunication", method, checked as boolean)}
                      />
                      <label htmlFor={`comm-${method}`} className="ml-2 text-sm text-gray-700 cursor-pointer">
                        {method}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Method of Administration *</label>
                <Select value={formData.preferredAdministration} onValueChange={(value) => handleSelectChange("preferredAdministration", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronic">Electronic Forms (completed online)</SelectItem>
                    <SelectItem value="fillable">Fillable Forms (hardcopy to be completed by hand and e-mailed back)</SelectItem>
                    <SelectItem value="no-preference">I have no specific preference</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Page 2: Service Needs */}
          {currentPage === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0F3D4C] mb-2">Service Needs</h2>
                <p className="text-gray-600 text-sm mb-6">We invite you to share a bit more about what has brought you here and the kind of support you are looking for.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Current Problem *</label>
                <div className="space-y-2">
                  {currentProblemOptions.map((option) => (
                    <div key={option} className="flex items-center">
                      <Checkbox
                        id={`problem-${option}`}
                        checked={formData.currentProblem.includes(option)}
                        onCheckedChange={(checked) => handleCheckboxChange("currentProblem", option, checked as boolean)}
                      />
                      <label htmlFor={`problem-${option}`} className="ml-2 text-sm text-gray-700 cursor-pointer">
                        {option}
                      </label>
                    </div>
                  ))}
                  <div className="flex items-center mt-3">
                    <Checkbox
                      id="problem-other"
                      checked={formData.currentProblem.includes("Other")}
                      onCheckedChange={(checked) => handleCheckboxChange("currentProblem", "Other", checked as boolean)}
                    />
                    <label htmlFor="problem-other" className="ml-2 text-sm text-gray-700 cursor-pointer">
                      Other:
                    </label>
                  </div>
                  {formData.currentProblem.includes("Other") && (
                    <Input
                      type="text"
                      name="currentProblemOther"
                      value={formData.currentProblemOther}
                      onChange={handleInputChange}
                      placeholder="Please specify"
                      className="w-full ml-6"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Services Required *</label>
                <div className="space-y-2">
                  {servicesOptions.map((service) => (
                    <div key={service} className="flex items-center">
                      <Checkbox
                        id={`service-${service}`}
                        checked={formData.servicesRequired.includes(service)}
                        onCheckedChange={(checked) => handleCheckboxChange("servicesRequired", service, checked as boolean)}
                      />
                      <label htmlFor={`service-${service}`} className="ml-2 text-sm text-gray-700 cursor-pointer">
                        {service}
                      </label>
                    </div>
                  ))}
                  <div className="flex items-center mt-3">
                    <Checkbox
                      id="service-other"
                      checked={formData.servicesRequired.includes("Other")}
                      onCheckedChange={(checked) => handleCheckboxChange("servicesRequired", "Other", checked as boolean)}
                    />
                    <label htmlFor="service-other" className="ml-2 text-sm text-gray-700 cursor-pointer">
                      Other:
                    </label>
                  </div>
                  {formData.servicesRequired.includes("Other") && (
                    <Input
                      type="text"
                      name="servicesRequiredOther"
                      value={formData.servicesRequiredOther}
                      onChange={handleInputChange}
                      placeholder="Please specify"
                      className="w-full ml-6"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">History of Problem *</label>
                <Select value={formData.historyOfProblem} onValueChange={(value) => handleSelectChange("historyOfProblem", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {historyOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {formData.historyOfProblem === "other" && (
                  <Input
                    type="text"
                    name="historyOfProblemOther"
                    value={formData.historyOfProblemOther}
                    onChange={handleInputChange}
                    placeholder="Please specify"
                    className="w-full mt-2"
                  />
                )}
              </div>
            </div>
          )}

          {/* Page 3: Procedures and Fees */}
          {currentPage === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0F3D4C] mb-2">Procedures and Fees</h2>
                <p className="text-gray-600 text-sm mb-6">Before we proceed, we'd like to guide you on our fees and the process of working together.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-700">
                  <strong>Consultations are billed per session at medical aid tariffs or per mediation outcome and are payable in advance.</strong>
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Please indicate your intended payment option below: *</label>
                <Select value={formData.paymentOption} onValueChange={(value) => handleSelectChange("paymentOption", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a payment option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash-10">I will be paying cash (10% discount)</SelectItem>
                    <SelectItem value="cash-medical-aid">I will pay cash but will require documentation for a medical aid claim (10% discount)</SelectItem>
                    <SelectItem value="medical-aid">I will fully rely on submission of a claim to my medical aid</SelectItem>
                    <SelectItem value="payment-plan">I will require a payment-plan</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {formData.paymentOption === "other" && (
                  <Input
                    type="text"
                    name="paymentOptionOther"
                    value={formData.paymentOptionOther}
                    onChange={handleInputChange}
                    placeholder="Please specify"
                    className="w-full mt-2"
                  />
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <Checkbox
                    id="cancellation"
                    checked={formData.appointmentCancellation}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, appointmentCancellation: checked as boolean }))}
                  />
                  <label htmlFor="cancellation" className="ml-2 text-sm text-gray-700 cursor-pointer">
                    I understand that appointments not kept or not cancelled at least 24 hours before the set time will still be billed as a full consultation. *
                  </label>
                </div>

                <div className="flex items-start">
                  <Checkbox
                    id="telephone"
                    checked={formData.telephoneConsultation}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, telephoneConsultation: checked as boolean }))}
                  />
                  <label htmlFor="telephone" className="ml-2 text-sm text-gray-700 cursor-pointer">
                    I understand that a telephonic consultation is billed as virtual consultation based on the time spend. (This excludes appointment scheduling or general enquiries, but includes seeking advice, case discussions and venting.) *
                  </label>
                </div>

                <div className="flex items-start">
                  <Checkbox
                    id="home-visits"
                    checked={formData.homeVisits}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, homeVisits: checked as boolean }))}
                  />
                  <label htmlFor="home-visits" className="ml-2 text-sm text-gray-700 cursor-pointer">
                    I understand that home-visits, hospital-visits and after-hour services can be arranged but attracts additional costs. *
                  </label>
                </div>

                <div className="flex items-start">
                  <Checkbox
                    id="popia"
                    checked={formData.popiaAgreement}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, popiaAgreement: checked as boolean }))}
                  />
                  <label htmlFor="popia" className="ml-2 text-sm text-gray-700 cursor-pointer">
                    I agree to POPIA data storage. (Data collection is governed by POPIA and implemented in this practice based on SACSSP guidelines.) *
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Page 4: Appointment Scheduling */}
          {currentPage === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0F3D4C] mb-2">Appointment Scheduling</h2>
                <p className="text-gray-600 text-sm mb-6">We believe in making services as accessible as possible for our clients. Kindly indicate your preference below.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How urgent is your need for an appointment? *</label>
                <Select value={formData.urgencyLevel} onValueChange={(value) => handleSelectChange("urgencyLevel", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select urgency level" />
                  </SelectTrigger>
                  <SelectContent>
                    {urgencyOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Please briefly describe why you selected this urgency level and any immediate concerns we should be aware of: *</label>
                <Textarea
                  name="urgencyDescription"
                  value={formData.urgencyDescription}
                  onChange={handleInputChange}
                  placeholder="Your answer"
                  required
                  className="w-full min-h-24"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Please indicate your general availability for appointments: *</label>
                <div className="space-y-2">
                  {availabilityOptions.map((option) => (
                    <div key={option} className="flex items-center">
                      <Checkbox
                        id={`avail-${option}`}
                        checked={formData.availability.includes(option)}
                        onCheckedChange={(checked) => handleCheckboxChange("availability", option, checked as boolean)}
                      />
                      <label htmlFor={`avail-${option}`} className="ml-2 text-sm text-gray-700 cursor-pointer">
                        {option}
                      </label>
                    </div>
                  ))}
                  <div className="flex items-center mt-3">
                    <Checkbox
                      id="avail-other"
                      checked={formData.availability.includes("Other")}
                      onCheckedChange={(checked) => handleCheckboxChange("availability", "Other", checked as boolean)}
                    />
                    <label htmlFor="avail-other" className="ml-2 text-sm text-gray-700 cursor-pointer">
                      Other:
                    </label>
                  </div>
                  {formData.availability.includes("Other") && (
                    <Input
                      type="text"
                      name="availabilitySpecific"
                      value={formData.availabilitySpecific}
                      onChange={handleInputChange}
                      placeholder="Please specify"
                      className="w-full ml-6"
                    />
                  )}
                  {formData.availability.includes("Limited to specific timeframes (please specify below)") && (
                    <Input
                      type="text"
                      name="availabilitySpecific"
                      value={formData.availabilitySpecific}
                      onChange={handleInputChange}
                      placeholder="Please specify your available timeframes"
                      className="w-full ml-6"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Please indicate your preferred method of consultation: *</label>
                <Select value={formData.consultationMethod} onValueChange={(value) => handleSelectChange("consultationMethod", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select consultation method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in-person">In Person</SelectItem>
                    <SelectItem value="virtual">Virtual (On-line via cell phone or laptop)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-6"
            >
              Back
            </Button>

            {currentPage < 4 ? (
              <Button
                type="button"
                onClick={() => {
                  if (currentPage === 1 && !isPage1Valid) {
                    alert("Please fill in all required fields on this page.");
                    return;
                  }
                  if (currentPage === 2 && !isPage2Valid) {
                    alert("Please fill in all required fields on this page.");
                    return;
                  }
                  if (currentPage === 3 && !isPage3Valid) {
                    alert("Please fill in all required fields on this page.");
                    return;
                  }
                  setCurrentPage(prev => Math.min(4, prev + 1));
                }}
                className="medimagic-button px-6"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting || submitMutation.isPending || !isPage4Valid}
                className="medimagic-button px-6"
              >
                {isSubmitting || submitMutation.isPending ? "Submitting..." : "Submit Consultation Request"}
              </Button>
            )}
          </div>

          {/* Page Indicator */}
          <div className="text-center text-sm text-gray-600 pt-4">
            Page {currentPage} of 4
          </div>
        </form>
      </Card>
    </div>
  );
}
