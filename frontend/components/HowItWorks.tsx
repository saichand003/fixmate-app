
// import { Search, UserCheck, Wrench } from "lucide-react";

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: Search,
//       number: "01",
//       title: "Search & Compare",
//       description: "Enter your location and browse nearby mechanics with ratings, reviews, and pricing."
//     },
//     {
//       icon: UserCheck,
//       number: "02", 
//       title: "Book Instantly",
//       description: "Choose your preferred mechanic and book an appointment that fits your schedule."
//     },
//     {
//       icon: Wrench,
//       number: "03",
//       title: "Get Fixed",
//       description: "Meet your mechanic and get your car serviced with transparent pricing and quality guarantee."
//     }
//   ];

//   return (
//     <section className="py-20 px-4 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             How <span className="text-blue-600">FixMate</span> Works
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Getting your car fixed has never been easier. Follow these simple steps to connect with trusted mechanics.
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-3 gap-8 relative">
//           {/* Connection Lines */}
//           <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500"></div>
          
//           {steps.map((step, index) => (
//             <div key={index} className="text-center relative">
//               <div className="relative mb-8">
//                 <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
//                   <step.icon className="w-10 h-10 text-white" />
//                 </div>
//                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
//                   {step.number}
//                 </div>
//               </div>
              
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
//               <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
//             </div>
//           ))}
//         </div>
        
//         <div className="text-center mt-16">
//           <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
//             Get Started Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;

import { Search, UserCheck, Wrench } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Search & Compare",
      description:
        "Enter your location and browse nearby mechanics with ratings, reviews, and pricing.",
    },
    {
      icon: UserCheck,
      title: "Book Instantly",
      description:
        "Choose your preferred mechanic and book an appointment that fits your schedule.",
    },
    {
      icon: Wrench,
      title: "Get Fixed",
      description:
        "Meet your mechanic and get your car serviced with transparent pricing and quality guarantee.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-blue-600">FixMate</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting your car fixed has never been easier. Follow these simple steps to connect with trusted mechanics.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-3 gap-10 text-center items-start">
          {/* Animated Line */}
          <div className="absolute top-10 left-[16.6%] w-2/3 h-1 bg-gray-300 z-0 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-blue-500 to-orange-400 animate-flow" />
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center px-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
