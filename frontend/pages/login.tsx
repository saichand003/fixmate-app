// import { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/router";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     try {
//         const res = await axios.post("http://localhost:4000/api/auth/login", form);
//         const { token } = res.data;

//         // ✅ Save token to localStorage
//         localStorage.setItem("token", token);

//         alert("Login successful!");
//         router.push("/dashboard");
//     } catch (err: any) {
//         console.error("❌ Login failed:", err.response?.data || err.message);
//         setError(err.response?.data?.error || "Login failed");
//     }
// };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
//         <h2 className="text-2xl font-bold text-center">Login</h2>

//         {error && <p className="text-red-500 text-center">{error}</p>}

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 border rounded"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 border rounded"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//           required
//         />

//         <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import { useRouter } from "next/router";
import { Wrench } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("token", "fake-token");
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-orange-100 to-white px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl flex items-center justify-center">
            <Wrench className="w-7 h-7 text-white" />
          </div>
          <span className="ml-3 text-3xl font-bold text-gray-800">FixMate</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Sign In to Your Account
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-semibold transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => router.push("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
