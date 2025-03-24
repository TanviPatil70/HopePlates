import { FaUser } from "react-icons/fa";
import RegisterButton from "../Components/Registerbutton";
import UsernameInput from "../Components/UsernameInput";

function DonorLogin({ setCurrentPage }) {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#917b97]">
      {/* Main Container with Form + Image */}
      <div className="flex bg-white rounded-lg shadow-lg w-[70%] p-8">
        
        {/* Left Side - Login Form */}
        <div className="w-1/2 text-center p-5">
          {/* Title with User Icon */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <FaUser className="text-black text-4xl" />
            <h1 className="text-3xl font-bold text-[#410c31]">Donor Login</h1>
          </div>

          {/* Username Input Field */}
          <UsernameInput className="w-full bg-white text-black px-3 py-3 border border-[#410c31] rounded-lg mb-4 focus:ring-0 focus:outline-none" />

          {/* Password Input Field */}
          <input 
            className="w-full  bg-white text-black px-3 py-3 border border-[#410c31] rounded-lg mb-4 focus:ring-0 focus:outline-none" 
            type="password" 
            placeholder="Password" 
          />
          
          {/* Login Button */}
          <button 
            className="w-full bg-[#410c31] text-white px-5 py-3 rounded-lg font-semibold shadow-md hover:bg-[#2b081f]"
            onClick={() => setCurrentPage("DonorHome")}
          >
            Login
          </button>

          {/* Register Button */}
          <RegisterButton setCurrentPage={setCurrentPage} userType="donor"/>
        
          <button 
           className="mt-4 bg-white text-[#410c31] border-2 border-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 focus:ring-0 focus:outline-none"
            onClick={() => setCurrentPage("welcome")}
>
            Back to Welcome
            </button>

        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img src="/don_log.jpeg" alt="Donor Illustration" className="w-[90%] h-auto" />
        </div>

      </div>
    </div>
  );
}

export default DonorLogin;
