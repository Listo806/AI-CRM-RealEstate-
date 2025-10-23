
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 mt-20 text-center text-gray-500 text-sm">
      <p>
        © {new Date().getFullYear()} <span className="text-blue-600 font-semibold">Listo Qasa</span>.  
        All rights reserved.
      </p>
      <div className="flex justify-center gap-6 mt-3 text-gray-400">
        <a href="mailto:support@listoqasa.com" className="hover:text-blue-600">
          📧 support@listoqasa.com
        </a>
        <a href="https://www.instagram.com/listoqasa" className="hover:text-blue-600">
          📸 Instagram
        </a>
        <a href="https://www.tiktok.com/@listoqasa" className="hover:text-blue-600">
          🎥 TikTok
        </a>
      </div>
    </footer>
  );
}
