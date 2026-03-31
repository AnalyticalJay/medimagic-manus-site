import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ServicePageTemplateProps {
  title: string;
  description: string;
  benefits: string[];
  process: string[];
  faq?: { question: string; answer: string }[];
}

export default function ServicePageTemplate({
  title,
  description,
  benefits,
  process,
  faq,
}: ServicePageTemplateProps) {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            {description}
          </p>
          <Button 
            onClick={() => setLocation("/booking")}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
          >
            Book Now
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Section Title with Green Line and Navy Bar */}
          <div className="border-t-8 border-[#5DBB63] mb-12">
            <div className="bg-[#0F3D4C] py-6 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Key Benefits</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    ✓
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Section Title with Green Line and Navy Bar */}
          <div className="border-t-8 border-[#5DBB63] mb-12">
            <div className="bg-[#0F3D4C] py-6 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Our Process</h2>
            </div>
          </div>
          <div className="space-y-6">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg text-gray-700">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faq && faq.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Section Title with Green Line and Navy Bar */}
            <div className="border-t-8 border-[#5DBB63] mb-12">
              <div className="bg-[#0F3D4C] py-6 px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-700">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Schedule your consultation today and take the first step towards positive change.
          </p>
          <Button 
            onClick={() => setLocation("/booking")}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            Book Your Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
