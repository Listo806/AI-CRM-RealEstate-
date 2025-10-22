import React from "react";
import { Bell, MessageSquare, User, Brain } from "lucide-react";

export default function HeaderBar() {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md border-b border-gray-100">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-blue-600 text-white font-bold text-xl px-3 py-1 rounded-lg">
          AI
        </div>
        <h1 className="text-xl font-semibold text-gray-700 tracking-wide">
          Listo Qasa CRM
        </h1>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-6">
        <button
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition"
          title="Ask Qasa – AI Assistant"
        >
          <Brain className="w-5 h-5" />
          <span className="hidden md:inline text-sm font-medium">Ask Qasa</span>
        </button>

        <button
          className="text-gray-500 hover:text-blue-600 transition"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
        </button>

        <button
          className="text-gray-500 hover:text-blue-600 transition"
          title="Messages"
        >
          <MessageSquare className="w-5 h-5" />
        </button>

        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200 hover:bg-blue-200 transition cursor-pointer">
          <User className="w-5 h-5 text-blue-700" />
        </div>
      </div>
    </header>
  );
}
