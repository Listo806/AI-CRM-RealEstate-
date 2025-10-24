import React from "react";

export default function Landing() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <h1 className="text-2xl font-bold text-blue-600 flex items-center">
            <img
              src="/images/logo-mark-white.svg"
              alt="Listo Qasa"
              className="h-8 w-8 mr-2"
            />
            <span>Listo Qasa</span>
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
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative w-full h-[90vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/50 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
            Your A.I-Powered Real Estate Platform
          </h2>
          <p className="text-lg md:text-2xl mb-8 text-blue-100 drop-shadow-md">
            Buy, sell, rent, and manage properties smarter — powered by real-estate A.I.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition shadow-lg">
            Post Your Property
          </button>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-12">What We Do</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["AI Property Matchmaker", "Instantly match buyers with their dream homes using predictive A.I."],
              ["Smart CRM Automation", "Automate follow-ups, manage leads, and close deals faster."],
              ["Instant Listing Uploads", "Post your property everywhere in seconds with one click."],
              ["Seamless Team Collaboration", "Keep your agents connected and productive with A.I insights."]
            ].map(([title, text], i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                <h4 className="text-lg font-semibold text-blue-600 mb-3">{title}</h4>
                <p className="text-gray-600 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Wow */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto text-center px-6 md:px-10">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">
            All-in-One Platform. Analytics That Wow.
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            See everything that matters in one dashboard — leads, listings, and performance metrics updated in real time with A.I insights.
          </p>
          <div className="flex flex-col items-center">
            <img
              src="/images/analytics-preview-1600.jpg"
              alt="Analytics Dashboard"
              className="rounded-2xl shadow-2xl w-full max-w-4xl"
              loading="lazy"
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
              {[
                ["+124%", "Lead Engagement Increase"],
                ["98.6%", "Platform Uptime"],
                ["8.2k", "AI Insights Generated"]
              ].map(([num, label], i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-blue-700 font-semibold text-lg mb-2">{num}</h4>
                  <p className="text-gray-500 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-20 bg-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto text-center px-6 md:px-10">
          <h3 className="text-3xl font-bold text-blue-700 mb-10">
            Trusted by Agents, Developers & Investors Worldwide
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-80">
            {[
              "partner-airbnb.svg",
              "partner-remax.svg",
              "partner-kw.svg",
              "partner-coldwell.svg",
              "partner-exp.svg",
              "partner-zillow.svg"
            ].map((src, i) => (
              <img key={i} src={`/images/${src}`} alt="Partner Logo" className="h-10" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto text-center px-6 md:px-10">
          <h3 className="text-3xl font-bold text-blue-700 mb-12">
            Testimonials & Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ["“Listo Qasa transformed how our team handles listings — we’ve doubled our closing rate in 3 months.”", "— María Santos, Real Estate Agent"],
              ["“The A.I CRM automation saves me hours every week. It’s like having a personal assistant built in.”", "— John Pérez, Broker Owner"],
              ["“The analytics are insane — finally, real visibility into performance, leads & marketing returns.”", "— Ana López, Property Developer"]
            ].map(([quote, author], i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition text-left">
                <p className="italic text-gray-600 mb-4">{quote}</p>
                <h4 className="font-semibold text-blue-700">{author}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gradient-to-b from-blue-600 to-blue-700 text-white text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h3 className="text-3xl font-bold mb-12">Key Metrics & Platform Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              ["8,200+", "Active Listings"],
              ["2,500+", "Real Estate Agents"],
              ["98.9%", "System Uptime"],
              ["120M+", "AI Insights Generated"]
            ].map(([num, label], i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md">
                <h4 className="text-4xl font-bold">{num}</h4>
                <p className="text-blue-100 mt-2">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-blue-100 text-lg mt-12 max-w-2xl mx-auto">
            Powering the future of real estate with reliability and A.I performance.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-blue-100 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 text-gray-600">
          <p className="text-sm">
            © {new Date().getFullYear()} Listo Qasa — All Rights Reserved
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="mailto:support@listoqasa.com" className="hover:text-blue-600">
              support@listoqasa.com
            </a>
            <a href="#" className="hover:text-blue-600">Instagram</a>
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
            <a href="#" className="hover:text-blue-600">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
