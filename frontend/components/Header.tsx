// import { Wrench, Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import Link from "next/link";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl flex items-center justify-center">
//               <Wrench className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-2xl font-bold text-gray-900">FixMate</span>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
//             <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
//             <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
//             <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
//           </nav>

//           {/* Desktop Buttons */}
//           <div className="hidden md:flex items-center gap-4">
//             <Link href="/login">
//               <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
//                 Sign In
//               </Button>
//             </Link>
//             <Link href="/register">
//               <Button className="bg-orange-500 hover:bg-orange-600 text-white">
//                 Get Started
//               </Button>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 py-4 border-t">
//             <nav className="flex flex-col gap-4">
//               <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
//               <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
//               <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
//               <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
//               <div className="flex flex-col gap-2 mt-4">
//                 <Link href="/login">
//                   <Button variant="ghost" className="text-gray-600 hover:text-blue-600 justify-start w-full">
//                     Sign In
//                   </Button>
//                 </Link>
//                 <Link href="/register">
//                   <Button className="bg-orange-500 hover:bg-orange-600 text-white justify-start w-full">
//                     Get Started
//                   </Button>
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


import { Wrench, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">FixMate</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" onClick={() => router.push("/account")}>Account</Button>
                <Button variant="ghost" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={() => router.push("/login")}>Sign In</Button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white" onClick={() => router.push("/register")}>
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              <div className="flex flex-col gap-2 mt-4">
                {isLoggedIn ? (
                  <>
                    <Button variant="ghost" onClick={() => router.push("/account")}>Account</Button>
                    <Button variant="ghost" onClick={handleLogout}>Logout</Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" onClick={() => router.push("/login")}>Sign In</Button>
                    <Button onClick={() => router.push("/register")} className="bg-orange-500 hover:bg-orange-600 text-white">
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
