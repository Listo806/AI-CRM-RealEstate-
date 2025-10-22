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
            src="https://images.unsplash.com/photo-1600607687920-4e2c3b3479c3?auto=format&fit=crop&w=1200&q=80"
            alt="Modern house"
            className="rounded-2xl shadow-lg w-[500px] max-w-full"
          />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-24 px-10 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-10">What We Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-blue-600 mb-3">AI Property Matchmaker</h4>
            <p className="text-gray-600">
              Instantly match buyers with their dream homes using predictive A.I.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-blue-600 mb-3">Smart CRM Automation</h4>
            <p className="text-gray-600">
              Automate follow-ups, manage leads, and close deals faster.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-blue-600 mb-3">Instant Listing Uploads</h4>
            <p className="text-gray-600">
              Post your property everywhere in seconds with one click.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-blue-600 mb-3">Seamless Team Collaboration</h4>
            <p className="text-gray-600">
              Keep your agents connected and productive with A.I-powered insights.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Wow Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-10 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-6">
          All-in-One Platform. Analytics That Wow.
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          See everything that matters in one powerful dashboard — leads, listings,
          and performance metrics — all updated in real time with A.I-driven insights.
        </p>

        <div className="flex flex-col items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
            alt="Analytics Dashboard"
            className="rounded-2xl shadow-2xl w-[900px] max-w-full"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-blue-700 font-semibold text-lg mb-2">+124%</h4>
              <p className="text-gray-500 text-sm">Lead Engagement Increase</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-blue-700 font-semibold text-lg mb-2">98.6%</h4>
              <p className="text-gray-500 text-sm">Platform Uptime</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-blue-700 font-semibold text-lg mb-2">8.2k</h4>
              <p className="text-gray-500 text-sm">AI Insights Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="bg-white py-24 px-10 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-10">
          Trusted by Agents, Developers, and Investors Worldwide
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-10 opacity-80">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" className="h-10" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Remax_logo.svg" alt="Remax" className="h-10" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Keller_Williams_Realty_logo.svg" alt="Keller Williams" className="h-10" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Coldwell_Banker_logo.svg" alt="Coldwell Banker" className="h-10" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/EXP_Realty_logo.svg" alt="EXP Realty" className="h-10" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Zillow_logo.svg" alt="Zillow" className="h-10" />
        </div>
      </section>

      {/* Testimonials & Success Stories */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-10 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-12">
          Testimonials & Success Stories
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="italic text-gray-600 mb-4">
              “Listo Qasa transformed how our team handles listings — we’ve doubled
              our closing rate in just 3 months.”
            </p>
            <h4 className="font-semibold text-blue-700">— María Santos, Real Estate Agent</h4>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="italic text-gray-600 mb-4">
              “The A.I. CRM automation saves me hours every week. It’s like having
              a personal assistant built into the platform.”
            </p>
            <h4 className="font-semibold text-blue-700">— John Pérez, Broker Owner</h4>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="italic text-gray-600 mb-4">
              “The analytics are insane — finally, real visibility into performance,
              leads, and marketing returns.”
            </p>
            <h4 className="font-semibold text-blue-700">— Ana López, Property Developer</h4>
          </div>
        </div>
      </section>

      {/* Key Metrics & Platform Stats */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-24 px-10 text-center">
        <h3 className="text-3xl font-bold mb-12">Key Metrics & Platform Stats</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md">
            <h4 className="text-4xl font-bold">8,200+</h4>
            <p className="text-blue-100 mt-2">Active Listings</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md">
            <h4 className="text-4xl font-bold">2,500+</h4>
            <p className="text-blue-100 mt-2">Real Estate Agents</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md">
            <h4 className="text-4xl font-bold">98.9%</h4>
            <p className="text-blue-100 mt-2">System Uptime</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md">
            <h4 className="text-4xl font-bold">120M+</h4>
            <p className="text-blue-100 mt-2">AI Insights Generated</p>
          </div>
        </div>

        <p className="text-blue-100 text-lg mt-12 max-w-2xl mx-auto">
          Powering the future of real estate with reliability, scalability, and unmatched A.I. performance.
        </p>
      </section>
    </div>
  );
}
