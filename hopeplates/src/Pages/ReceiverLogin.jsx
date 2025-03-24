import { FaUser } from "react-icons/fa";
import RegisterButton from "../Components/Registerbutton";
import UsernameInput from "../Components/UsernameInput";

function ReceiverLogin({ setCurrentPage }) {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#98b0d9]">
      {/* Main Container with Form + Image */}
      <div className="flex bg-white rounded-lg shadow-lg w-[70%] p-8">
        
        {/* Left Side - Login Form */}
        <div className="w-1/2 text-center p-5">
          {/* Title with User Icon */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <FaUser className="text-black text-4xl" />
            <h1 className="text-3xl font-bold text-[#0e2843]">Receiver Login</h1>
          </div>

          {/* Username Input Field */}
          <UsernameInput className="w-full bg-white text-black px-3 py-3 border border-[#0e2843] rounded-lg mb-4 focus:ring-0 focus:outline-none" />

          {/* Password Input Field */}
          <input 
            className="w-full bg-white text-black px-3 py-3 border border-[#0e2843] rounded-lg mb-4 focus:ring-0 focus:outline-none" 
            type="password" 
            placeholder="Password" 
          />
          
          {/* Login Button */}
          <button 
            className="w-full bg-[#0e2843] text-white px-5 py-3 rounded-lg font-semibold shadow-md hover:bg-[#091b2d]"
            onClick={() => setCurrentPage("receiver")}
          >
            Login
          </button>

          {/* Register Button */}
          <RegisterButton setCurrentPage={setCurrentPage} userType="receiver" />
        
          {/* Back Button */}
          <button 
            className="mt-4 bg-white text-[#0e2843] border-2 border-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 focus:ring-0 focus:outline-none"
            onClick={() => setCurrentPage("welcome")}
          >
            Back to Welcome
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img src="/rec_log.jpeg" alt="Receiver Login Illustration" className="w-[90%] h-auto" />
        </div>

      </div>
    </div>
  );
}

export default ReceiverLogin;
