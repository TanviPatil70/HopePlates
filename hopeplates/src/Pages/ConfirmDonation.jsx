import React, { useState, useEffect } from "react";
import ReceiverSidebar from "../Components/ReceiverSidebar";


const ConfirmDonation = () => {
  const [shelters, setShelters] = useState([]);
  const [selectedShelterId, setSelectedShelterId] = useState(null);

  useEffect(() => {
    // Fetch all shelters from backend
    const fetchShelters = async () => {
      try {
        const token = localStorage.getItem("receiverToken");
        const res = await fetch("http://localhost:8000/api/shelters/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setShelters(data);
      } catch (error) {
        console.error("Error fetching shelters:", error);
      }
    };

    fetchShelters();
  }, []);

  return (
    <div className="flex">
      <ReceiverSidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Connected Shelters</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {shelters.map((shelter) => (
            <div
              key={shelter.id}
              onClick={() => setSelectedShelterId(shelter.id)}
              className={`cursor-pointer border p-4 rounded-lg shadow ${
                selectedShelterId === shelter.id ? "border-purple-600 bg-purple-50" : "bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold">{shelter.name}</h3>
              <p className="text-gray-600">{shelter.location}</p>
              <p className="text-sm text-gray-500">{shelter.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            className="bg-[#003c2f] hover:bg-purple-800 text-white py-2 px-6 rounded-xl shadow-lg"
            onClick={() => {
              if (!selectedShelterId) {
                alert("Please select a shelter first.");
              } else {
                // Redirect or open Add Delivery Partner screen
                console.log("Selected Shelter ID:", selectedShelterId);
              }
            }}
          >
            Add Delivery Partner
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDonation;
