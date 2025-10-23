import React from "react";

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-white to-blue-50 text-gray-800">
      {/* Left Side – Image & Headline */}
      <div
        className="md:w-1/2 flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="bg-blue-900/40 absolute inset-0"></div>
        <div className="relative z-10 text-white text-center p-10">
          <h1 className="text-4xl font-bold mb-4">
            Your AI-Powered Real Estate Workspace Awaits
          </h1>
          <p className="text-lg text-blue-100">
            Manage listings, automate leads, and close more deals with A.I.
          </p>
        </div>
      </div>

      {/* Right Side – Login Form */}
      <div className="md:w-1/2 flex items-center justify-center p-10">
        <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
            Sign In to Listo Qasa
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
