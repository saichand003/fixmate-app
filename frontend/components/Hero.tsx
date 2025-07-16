
// import { Search, MapPin, Clock } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "../components/ui/input";

// const Hero = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-4 overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-32 h-32 border-2 border-orange-400 rounded-full"></div>
//         <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-blue-400 rounded-full"></div>
//         <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-orange-300 rounded-full"></div>
//       </div>
      
//       <div className="max-w-6xl mx-auto text-center relative z-10">
//         <div className="animate-fade-in">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//             Find Trusted <span className="text-orange-400">Mechanics</span>
//             <br />
//             <span className="text-blue-400">Near You</span>
//           </h1>
          
//           <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
//             Connect with certified mechanics in minutes. Get your car fixed fast, fair, and hassle-free with FixMate.
//           </p>
          
//           {/* Search Bar */}
//           <div className="max-w-2xl mx-auto mb-8">
//             <div className="relative flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
//               <div className="flex-1 relative">
//                 <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <Input 
//                   placeholder="Enter your location..."
//                   className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300 h-12"
//                 />
//               </div>
//               <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-12 font-semibold transition-all duration-300 hover:scale-105">
//                 <Search className="w-5 h-5 mr-2" />
//                 Find Mechanics
//               </Button>
//             </div>
//           </div>
          
//           {/* Quick Stats */}
//           <div className="flex flex-wrap justify-center gap-8 text-sm">
//             <div className="flex items-center gap-2">
//               <Clock className="w-5 h-5 text-orange-400" />
//               <span>Available 24/7</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
//                 <span className="text-xs font-bold">✓</span>
//               </div>
//               <span>Certified Professionals</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center">
//                 <span className="text-xs font-bold">$</span>
//               </div>
//               <span>Fair Pricing</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useState } from "react";
import { useRouter } from "next/router";
import { Search, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "../components/ui/input";

const Hero = () => {
  const [zip, setZip] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (zip.trim().length = 5) {
      router.push(`/map?zip=${zip}`);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-blue-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-orange-300 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Find Trusted <span className="text-orange-400">Mechanics</span>
            <br />
            <span className="text-blue-400">Near You</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Connect with certified mechanics in minutes. Get your car fixed fast, fair, and hassle-free with FixMate.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Enter your ZIP code..."
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300 h-12"
                />
              </div>
              <Button
                onClick={handleSearch}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-12 font-semibold transition-all duration-300 hover:scale-105"
              >
                <Search className="w-5 h-5 mr-2" />
                Find Mechanics
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-400" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">✓</span>
              </div>
              <span>Certified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">$</span>
              </div>
              <span>Fair Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
