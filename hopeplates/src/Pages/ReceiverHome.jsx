import React, { useState, useEffect } from "react";
import ReceiverSidebar from "../Components/ReceiverSidebar";
import {
  FaCheckCircle,
  FaGift,
  FaTruck,
  FaSearch,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DonorCard from "../Components/DonorCard";

const ReceiverHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [donorsData, setDonorsData] = useState([]);
  const [impactStats, setImpactStats] = useState([
    { label: "Meals", value: 0 },
    { label: "Donations", value: 0 },
    { label: "Pickups", value: 0 },
  ]);

  const fetchNearbyDonations = async (latitude, longitude) => {
    const token = localStorage.getItem("receiverToken");

    try {
      const res = await fetch(
        `http://localhost:8000/api/nearby-donations/?lat=${latitude}&lng=${longitude}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const text = await res.text();
      const data = JSON.parse(text);

      console.log("Fetched donations:", data);
      setDonorsData(data);

      const meals = data.reduce((sum, d) => sum + (d.quantity || 0), 0);
      const donations = data.length;
      const pickups = data.filter((d) => d.status === "completed").length;

      setImpactStats([
        { label: "Meals", value: meals },
        { label: "Donations", value: donations },
        { label: "Pickups", value: pickups },
      ]);
    } catch (error) {
      console.error("Failed to fetch donations:", error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchNearbyDonations(latitude, longitude);

        // Optional: Refresh every 30 seconds
        const interval = setInterval(() => {
          fetchNearbyDonations(latitude, longitude);
        }, 30000);

        return () => clearInterval(interval);
      },
      (err) => {
        console.error("Geolocation error:", err);
      }
    );
  }, []);

  const filteredDonors = donorsData.filter((donor) =>
    donor.donor_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <ReceiverSidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-semibold mb-1 text-gray-800">
          🌟 "Every meal you rescue brings hope to someone’s plate."
        </h2>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Hi Receiver, here’s what’s happening today 👋
        </h2>

        <div className="bg-white p-4 rounded-xl shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-2">Impact Summary</h3>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaCheckCircle className="text-green-600" />
              {impactStats[0].value} meals available nearby
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaGift className="text-orange-500" />
              {impactStats[1].value} new donations added today
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaTruck className="text-yellow-500" />
              {impactStats[2].value} pickups completed
            </div>
          </div>

          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={impactStats}>
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4ade80" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-semibold">Nearby Donors</h3>
          <div className="relative">
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search donor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {filteredDonors.length === 0 ? (
            <p className="text-gray-500 text-sm">No nearby donors found.</p>
          ) : (
            filteredDonors.map((donor, index) => (
              <DonorCard key={index} donor={donor} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ReceiverHome;
