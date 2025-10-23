
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 flex items-center justify-between px-10 py-4">
      <h1 className="text-2xl font-bold text-blue-600 flex items-center">
        🏠 <span className="ml-2">Listo Qasa</span>
      </h1>

      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="#" className="hover:text-blue-600">Buy</Link>
        <Link to="#" className="hover:text-blue-600">Sell</Link>
        <Link to="#" className="hover:text-blue-600">Rent</Link>
        <Link to="/dashboard" className="hover:text-blue-600">A.I CRM</Link>
        <Link
          to="/signin"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sign In
        </Link>
      </nav>
    </header>
  );
}

