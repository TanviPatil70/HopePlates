import { FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

function ReceiverRegister({ setCurrentPage }) {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#98b0d9]">
      <div className="bg-white shadow-lg rounded-lg flex w-[60%] p-8">

        {/* Left Section - Form */}
        <div className="w-1/2 flex flex-col justify-center px-6">
          
          {/* Title with User Icon */}
          <div className="flex items-center justify-center mb-5">
            <FaUser className="text-black text-3xl mr-2" />
            <h1 className="text-3xl font-bold text-[#0e2843]">Receiver Registration</h1>
          </div>

          {/* Input Fields with Icons */}
          <div className="space-y-4">

            {/* Organization Type Dropdown */}
            <div className="flex items-center border border-[#0e2843] rounded-lg px-3 py-2">
              <FaBuilding className="text-gray-600 mr-2" />
              <select className="w-full outline-none bg-transparent">
                <option value="">Select Organization Type</option>
                <option value="NGO">NGO</option>
                <option value="Shelter">Shelter</option>
                <option value="Food Bank">Food Bank</option>
                <option value="Community Kitchen">Community Kitchen</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* Organization Name */}
            <div className="flex items-center border border-[#0e2843] rounded-lg px-3 py-2">
              <FaUser className="text-gray-600 mr-2" />
              <input type="text" placeholder="Organization Name" className="w-full outline-none bg-transparent" />
            </div>

            {/* Email */}
            <div className="flex items-center border border-[#0e2843] rounded-lg px-3 py-2">
              <FaEnvelope className="text-gray-600 mr-2" />
              <input type="email" placeholder="Email" className="w-full outline-none bg-transparent" />
            </div>

            {/* Contact Number */}
            <div className="flex items-center border border-[#0e2843] rounded-lg px-3 py-2">
              <FaPhone className="text-gray-600 mr-2" />
              <input type="tel" placeholder="Contact Number" className="w-full outline-none bg-transparent" />
            </div>

            {/* Location */}
            <div className="flex items-start border border-[#0e2843] rounded-lg px-3 py-2">
              <FaMapMarkerAlt className="text-gray-600 mr-2 mt-1" />
              <textarea placeholder="Enter your location..." className="w-full outline-none bg-transparent resize-none" rows="2"></textarea>
            </div>

            {/* Password */}
            <div className="flex items-center border border-[#0e2843] rounded-lg px-3 py-2">
              <FaLock className="text-gray-600 mr-2" />
              <input type="password" placeholder="Password" className="w-full outline-none bg-transparent" />
            </div>

          </div>

          {/* Register Button */}
          <button 
            className="w-full bg-[#0e2843] text-white px-6 py-3 mt-4 rounded-lg font-semibold shadow-md hover:bg-[#091b2d]"
            onClick={() => setCurrentPage("receiverDashboard")}
          >
            Register
          </button>

          {/* Already have an account? */}
          <p className="mt-4 text-center text-black hover:underline hover:text-[#091b2d]" 
             onClick={() => setCurrentPage("receiverLogin")}>
            Already have an account? Login
          </p>

        </div>

        {/* Right Section - Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img src="/rec_reg.jpeg" alt="Receiver Registration Illustration" className="w-full h-auto" />
        </div>

      </div>
    </div>
  );
}

export default ReceiverRegister;
