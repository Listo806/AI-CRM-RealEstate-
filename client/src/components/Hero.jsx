import React from "react";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-[90vh] bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/heroes/hero_front.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your A.I-Powered Real Estate Platform
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Buy, sell, rent, and manage properties smarter — powered by A.I.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl text-lg shadow-lg transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
