import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50 flex items-center justify-between px-10 py-4">
        <h1 className="text-2xl font-bold text-blue-600 flex items-center">
          🏠 <span className="ml-2">Listo Qasa</span>
        </h1>
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">Buy</a>
          <a href="#" className="hover:text-blue-600">Sell</a>
          <a href="#" className="hover:text-blue-600">Rent</a>
          <a href="#" className="hover:text-blue-600">A.I CRM</a>
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left pt-32 pb-20 px-10">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-700 leading-tight mb-6">
            Your A.I-Powered Real Estate Platform
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Buy, sell, rent, and manage properties smarter — powered by real estate A.I.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
            Post Your Property
          </button>
        </div>
        <div className="mt-10 md:mt-0 md:ml-10">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/09/32/architecture-1868667_1280.jpg"
            alt="Modern house"
            className="rounded-2xl shadow-lg w-[500px] max-w-full"
          />
        </div>
      </section>
    </div>
  );
}
