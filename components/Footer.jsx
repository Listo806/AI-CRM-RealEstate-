import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Listo Qasa. All rights reserved.
      <span className="block text-blue-600 font-semibold mt-1">
        Powered by A.I Real Estate
      </span>
    </footer>
  );
}
