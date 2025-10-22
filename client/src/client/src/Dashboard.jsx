import React from "react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">Listo Qasa</h2>
        <nav className="space-y-4">
          <a href="#" className="block hover:text-blue-600">🏠 Dashboard</a>
          <a href="#" className="block hover:text-blue-600">🏡 Properties</a>
          <a href="#" className="block hover:text-blue-600">🤝 Leads</a>
          <a href="#" className="block hover:text-blue-600">📊 Analytics</a>
          <a href="#" className="block hover:text-blue-600">⚙️ Settings</a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-blue-700">
            Welcome back, Agent Joe 👋
          </h1>
          <p className="text-gray-500">Your A.I-powered real-estate dashboard</p>
        </header>

        {/* Analytics cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-sm text-gray-500">Active Leads</h3>
            <p className="text-3xl font-bold text-blue-600">128</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-sm text-gray-500">New Properties</h3>
            <p className="text-3xl font-bold text-blue-600">42</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-sm text-gray-500">Conversions</h3>
            <p className="text-3xl font-bold text-blue-600">12%</p>
          </div>
        </section>

        {/* Activity Feed */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Recent Activity</h2>
          <ul className="bg-white rounded-2xl shadow divide-y divide-gray-100">
            <li className="p-4">🏡 New property listed by Maria Santos</li>
            <li className="p-4">🤝 Lead assigned to John Perez</li>
            <li className="p-4">💬 Client message received from Ana Lopez</li>
            <li className="p-4">📈 Weekly report generated automatically</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

