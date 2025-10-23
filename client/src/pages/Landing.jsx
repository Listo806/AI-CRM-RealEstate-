import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          <h1 className="text-2xl font-bold text-blue-600 flex items-center">
            🏠 <span className="ml-2 tracking-tight">Listo Qasa</span>
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

      {/* Hero */}
      <section className="w-full pt-32 md:pt-40 pb-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-8">
          <div>
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
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2c3b3479c3?auto=format&fit=crop&w=1200&q=80"
              alt="Modern House"
              className="rounded-2xl shadow-xl w-[520px] max-w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto text-center px-8">
          <h3 className="text-3xl font-bold text-blue-700 mb-12">What We Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              ["AI Property Matchmaker", "Instantly match buyers with their dream homes using predictive A.I."],
              ["Smart CRM Automation", "Automate follow-ups, manage leads, and close deals faster."],
              ["Instant Listing Uploads", "Post your property everywhere in seconds with one click."],
              ["Seamless Team Collaboration", "Keep your agents connected and productive with A.I-powered insights."]
            ].map(([title, text], i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-left">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">{title}</h4>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Wow */}
      <section className="bg-white py-24 border-t border-blue-100">
        <div className="max-w-7xl mx-auto text-center px-8">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">
            All-in-One Platform. Analytics That Wow.
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            See everything that matters in one dashboard — leads, listings and performance metrics — updated in real time with A.I insights.
          </p>
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
              alt="Analytics Dashboard"
              className="rounded-2xl shadow-2xl w-[900px] max-w-full"
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
              {[
                ["+124%", "Lead Engagement Increase"],
                ["98.6%", "Platform Uptime"],
                ["8.2k", "AI Insights Generated"]
              ].map(([num, label], i) => (
                <div key={i} className="bg-blue-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-blue-700 font-semibold text-lg mb-2">{num}</h4>
                  <p className="text-gray-500 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="bg-white py-24 border-t border-blue-100">
        <div className="max-w-7xl mx-auto text-center px-8">
          <h3 className="text-3xl font-bold text-blue-700 mb-10">
            Trusted by Agents, Developers & Investors Worldwide
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-80">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/a/a9/Airbnb_Logo_B%C3%A9lo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/5/5f/Remax_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Keller_Williams_Realty_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/1/1e/Coldwell_Banker_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/3/3e/EXP_Realty_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/f/f7/Zillow_logo.svg"
            ].map((src, i) => (
              <img key={i} src={src} alt="Partner logo" className="h-10" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 border-t border-blue-100">
        <div className="max-w-7xl mx-auto text-center px-8">
          <h3 className="text-3xl font-bold text-blue-700 mb-12">
            Testimonials & Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              ["“Listo Qasa transformed how our team handles listings — we’ve doubled our closing rate in just 3 months.”", "— María Santos, Real Estate Agent"],
              ["“The A.I. CRM automation saves me hours every week. It’s like having a personal assistant built into the platform.”", "— John Pérez, Broker Owner"],
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
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto text-center px-8">
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
            Powering the future of real estate with reliability, scalability, and unmatched A.I. performance.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-24 text-center border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-3xl font-bold text-blue-700 mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              ["📝", "1. Sign Up & Connect", "Create your account, connect your listings, and set your goals in under 2 minutes."],
              ["🤖", "2. Let the A.I. Work", "Our smart engine organizes leads, predicts conversions, and automates your follow-ups."],
              ["💼", "3. Close More Deals", "Get instant insights, manage your team efficiently, and close faster — powered by Listo Qasa A.I."]
            ].map(([icon, title, text], i) => (
              <div key={i} className="bg-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="text-5xl mb-4">{icon}</div>
                <h4 className="text-xl font-semibold text-blue-600 mb-3">{title}</h4>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-blue-100 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 text-gray-600">
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

