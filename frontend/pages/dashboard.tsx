import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      if (!token) {
//        alert("You must log in first");
        router.push("/");
      }
    };

    // ✅ Check on load
    checkAuth();

    // ✅ Check on back/forward navigation
    router.events?.on("routeChangeStart", checkAuth);

    return () => {
      router.events?.off("routeChangeStart", checkAuth);
    };
  }, [router]);

  const handleLogout = () => {
    console.log("Logout button clicked");
    localStorage.removeItem("token");
    console.log("Token after removal:", localStorage.getItem("token")); // should be null
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold">Welcome to Fixmate Dashboard!</h1>
        <p className="text-gray-600 mt-2">You are logged in.</p>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
