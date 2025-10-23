import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10 text-center mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-4">Listo Qasa</h3>
        <p className="text-blue-100 mb-6">
          Powering the future of real estate with A.I-driven insights,
          automation, and analytics.
        </p>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-blue-200 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-200 transition">Terms of Service</a>
          <a href="#" className="hover:text-blue-200 transition">Contact</a>
        </div>

        <p className="text-blue-200 text-sm">
          © {new Date().getFullYear()} Listo Qasa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
