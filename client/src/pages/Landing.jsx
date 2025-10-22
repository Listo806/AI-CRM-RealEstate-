import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 bg-transparent absolute top-0 w-full z-10">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">AI</div>
          <h1 className="text-2xl font-semibold text-blue-700">Listo Qasa</h1>
        </div>
        <nav className="space-x-8 text-blue-700">
          <a href="#" className="hover:text-blue-500">Buy</a>
          <a href="#" className="hover:text-blue-500">Sell</a>
          <a href="#" className="hover:text-blue-500">Rent</a>
          <a href="#" className="hover:text-blue-500">Agents</a>
          <a href="#" className="hover:text-blue-500">Developers</a>
          <a href="#" className="hover:text-blue-500">A.I CRM</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-40 pb-32">
        <img
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=80"
          alt="Modern home"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-5xl font-bold text-blue-800 mb-6">
            Your AI-Powered Real Estate Workspace Awaits
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Automate listings, leads, and closings with Listo Qasa’s intelligent platform.
          </p>
          <a
            href="/dashboard"
            className="px-8 py-4 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
