import React from "react";
import {
  Line,
  Doughnut,
  Bar
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Leads This Week",
        data: [15, 22, 30, 45, 40, 55],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const doughnutData = {
    labels: ["Converted", "Pending", "Lost"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ["#2563eb", "#93c5fd", "#dbeafe"],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Properties Uploaded",
        data: [12, 18, 22, 25],
        backgroundColor: "#3b82f6",
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <Header />

      <div className="flex flex-1 mt-20">
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

        {/* Main Content */}
        <main className="flex-1 p-10">
          <header className="mb-8">
            <h1 className="text-3xl font-semibold text-blue-700">
              Welcome back, Agent Joe 👋
            </h1>
            <p className="text-gray-500">
              Your A.I-powered real-estate dashboard
            </p>
          </header>

          {/* Overview Cards */}
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

          {/* Analytics Charts */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold mb-4 text-blue-700">Weekly Leads</h3>
              <Line data={lineData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold mb-4 text-blue-700">Conversions</h3>
              <Doughnut data={doughnutData} options={{ responsive: true, plugins: { legend: { position: "bottom" } } }} />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold mb-4 text-blue-700">Property Uploads</h3>
              <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
            </div>
          </section>

          {/* Activity Feed */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">
              Recent Activity
            </h2>
            <ul className="bg-white rounded-2xl shadow divide-y divide-gray-100">
              <li className="p-4">🏡 New property listed by Maria Santos</li>
              <li className="p-4">🤝 Lead assigned to John Perez</li>
              <li className="p-4">💬 Client message received from Ana Lopez</li>
              <li className="p-4">📈 Weekly report generated automatically</li>
            </ul>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
