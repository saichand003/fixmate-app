import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "customer" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/api/auth/register", form);
    alert("Registered! Login now.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96 space-y-4">
        <h2 className="text-xl font-bold text-center">Register</h2>
        <input placeholder="Name" className="w-full p-2 border" onChange={e => setForm({...form, name: e.target.value})} />
        <input placeholder="Email" type="email" className="w-full p-2 border" onChange={e => setForm({...form, email: e.target.value})} />
        <input placeholder="Password" type="password" className="w-full p-2 border" onChange={e => setForm({...form, password: e.target.value})} />
        <select className="w-full p-2 border" onChange={e => setForm({...form, role: e.target.value})}>
          <option value="customer">Customer</option>
          <option value="technician">Technician</option>
        </select>
        <button className="w-full bg-blue-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}
