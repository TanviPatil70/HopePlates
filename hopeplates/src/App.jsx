import { useState } from "react";
import DonorLogin from "./Pages/DonorLogin";
import DonorRegister from "./Pages/DonorRegister";
import ReceiverLogin from "./Pages/ReceiverLogin";
import ReceiverRegister from "./Pages/ReceiverRegister";
import Welcome from "./Pages/Welcome";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");

  return (
    <>
      {currentPage === "welcome" && <Welcome setCurrentPage={setCurrentPage} />}
      {currentPage === "donorLogin" && <DonorLogin setCurrentPage={setCurrentPage} />}
      {currentPage === "donorRegister" && <DonorRegister setCurrentPage={setCurrentPage} />}
      {currentPage === "receiverLogin" && <ReceiverLogin setCurrentPage={setCurrentPage} />}
      {currentPage === "receiverRegister" && <ReceiverRegister setCurrentPage={setCurrentPage} />}
    </>
  );
}

export default App;
