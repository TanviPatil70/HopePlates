import React from "react";
import { FaHome, FaCheckCircle, FaTruck, FaBell } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const ReceiverSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-[#003c2f] text-white p-6 flex flex-col justify-between">
      <div>
        <div className="flex flex-col items-center">
          <img src="/logo1.png" alt="logo" className="w-20 h-20 mb-3" />
          <h1 className="text-white text-xl font-bold mb-10">HopePlates</h1>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/receiver-home")}
            className={`flex items-center gap-3 py-2 px-4 rounded-md ${
              isActive("/receiver-home")
                ? "bg-white text-black"
                : "bg-transparent hover:bg-white hover:text-black"
            }`}
          >
            <FaHome /> Dashboard
          </button>
          <button
            onClick={() => navigate("/confirm-donation")}
            className={`flex items-center gap-3 py-2 px-4 rounded-md ${
              isActive("/confirm-donation")
                ? "bg-white text-black"
                : "bg-transparent hover:bg-white hover:text-black"
            }`}
          >
            <FaCheckCircle /> Confirm Donation
          </button>
          <button
            onClick={() => navigate("/contact-delivery")}
            className={`flex items-center gap-3 py-2 px-4 rounded-md ${
              isActive("/contact-delivery")
                ? "bg-white text-black"
                : "bg-transparent hover:bg-white hover:text-black"
            }`}
          >
            <FaTruck /> Contact Delivery
          </button>
          <button
            onClick={() => navigate("/notifications")}
            className={`flex items-center gap-3 py-2 px-4 rounded-md ${
              isActive("/notifications")
                ? "bg-white text-black"
                : "bg-transparent hover:bg-white hover:text-black"
            }`}
          >
            <FaBell /> Notifications
          </button>
        </div>
      </div>

      {/* Logout */}
      <button className="bg-green-100 text-red-500 py-2 px-4 rounded-md mt-6">
        Logout
      </button>
    </div>
  );
};

export default ReceiverSidebar;
