import { FaSearch, FaCog, FaUser, FaHandHoldingHeart, FaChartLine, FaClock } from "react-icons/fa";

function DonorHome() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Top Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#410c31]">HopePlates</h1>
        <div className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-[#410c31]">Home</a>
          <a href="#" className="text-gray-700 hover:text-[#410c31]">Add Donation</a>
          <a href="#" className="text-gray-700 hover:text-[#410c31]">Impact Tracker</a>
          <a href="#" className="text-gray-700 hover:text-[#410c31]">Community Feed</a>
        </div>
        <div className="space-x-4 flex items-center">
          <FaSearch className="text-gray-700 cursor-pointer" />
          <FaCog className="text-gray-700 cursor-pointer" />
          <FaUser className="text-gray-700 cursor-pointer" />
        </div>
      </nav>

      {/* ✅ Dashboard Section */}
      <section className="p-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaHandHoldingHeart className="text-[#410c31] text-4xl mr-4" />
            <div>
              <h2 className="text-lg font-bold text-gray-700">Total Donations</h2>
              <p className="text-gray-600">125 (↑12%)</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaChartLine className="text-[#410c31] text-4xl mr-4" />
            <div>
              <h2 className="text-lg font-bold text-gray-700">Total Requests</h2>
              <p className="text-gray-600">89 (↑5%)</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaClock className="text-[#410c31] text-4xl mr-4" />
            <div>
              <h2 className="text-lg font-bold text-gray-700">Pending Requests</h2>
              <p className="text-gray-600">14 (↓3%)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Call-to-Action */}
      <section className="text-center py-8 bg-[#9c61ac] text-white">
        <h2 className="text-3xl font-bold">Your Contribution Can Make a Difference</h2>
        <button className="mt-4 bg-white text-[#410c31] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200">
          Donate Now
        </button>
      </section>

      {/* ✅ Upcoming Food Drives */}
      <section className="p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Upcoming Food Drives</h2>
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          {[
            { icon: "🍲", name: "Community Potluck", date: "Sat 16 June, Local Park" },
            { icon: "📜", name: "Food Policy Discussion", date: "Sat 16 June, Community Center" },
            { icon: "👨‍🍳", name: "Culinary Workshop", date: "Sat 16 June, Local Kitchen" },
            { icon: "❓", name: "Food Trivia Night", date: "Sat 16 June, Community Hall" },
            { icon: "🎉", name: "Food Festival", date: "Sat 16 June, Town Square" },
          ].map((event, index) => (
            <div key={index} className="flex items-center space-x-4 border-b pb-2">
              <span className="text-2xl">{event.icon}</span>
              <div>
                <h3 className="text-lg font-semibold">{event.name}</h3>
                <p className="text-gray-600">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DonorHome;
