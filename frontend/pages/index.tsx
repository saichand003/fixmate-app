import Stats from "../components/Stats";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks"; // ✅ Import it here
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <Hero />

      {/* Optionally remove the old block below if not needed anymore */}
      {/* 
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Fixmate!</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Book trusted auto repair services at your doorstep.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => router.push("/login")}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/register")}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Register
          </button>
        </div>
      </div>
      */}

      <HowItWorks /> {/* ✅ Add it here */}
      <Stats />
      <Features />
      <Footer />
    </div>
  );
}
