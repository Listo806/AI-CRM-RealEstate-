import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-xl font-semibold mb-3">Listo Qasa</h3>
        <p className="text-blue-100 mb-6">
          Powering the future of real estate with A.I-driven innovation.
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-blue-200">About</a>
          <a href="#" className="hover:text-blue-200">Contact</a>
          <a href="#" className="hover:text-blue-200">Privacy Policy</a>
          <a href="#" className="hover:text-blue-200">Terms</a>
        </div>
        <p className="text-sm text-blue-200">
          © {new Date().getFullYear()} Listo Qasa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
