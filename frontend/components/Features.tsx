
import { Shield, Clock, MapPin, Star, Wrench, CreditCard } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Find Nearby Mechanics",
      description: "Locate certified mechanics in your area with real-time availability and ratings."
    },
    {
      icon: Clock,
      title: "Quick Response Time",
      description: "Get connected with mechanics within minutes, not hours. Emergency services available 24/7."
    },
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All mechanics are background-checked, certified, and insured for your peace of mind."
    },
    {
      icon: Star,
      title: "Rated & Reviewed",
      description: "See real customer reviews and ratings to choose the best mechanic for your needs."
    },
    {
      icon: CreditCard,
      title: "Transparent Pricing",
      description: "Get upfront quotes with no hidden fees. Pay securely through the app."
    },
    {
      icon: Wrench,
      title: "All Services Covered",
      description: "From oil changes to major repairs, our mechanics handle all automotive services."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-orange-500">FixMate</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing how you find and connect with automotive professionals. 
            Here's what makes us different.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
