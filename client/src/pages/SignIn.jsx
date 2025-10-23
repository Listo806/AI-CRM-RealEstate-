import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporary demo redirect — later we’ll link to PayPal or CRM logic
    if (email && password) navigate("/dashboard");
    else alert("Please enter your email and password.");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Left Side – Image / Branding */}
      <div className="hidden md:flex w-1/2 bg-cover bg-center items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
        }}>
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Listo Qasa
        </h1>
      </div>

      {/* Right Side – Sign-In Form */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-16">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Your AI-Powered Workspace Awaits
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign In
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              Don’t have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Create one
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

