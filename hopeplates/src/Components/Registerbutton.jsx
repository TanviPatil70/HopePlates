function RegisterButton({ setCurrentPage, userType }) {
  return (
    <p 
      className="mt-4 text-black hover:underline hover:text-[#091b2d]"
      onClick={() => setCurrentPage(userType === "receiver" ? "ReceiverRegister" : "DonorRegister")}
    >
      Don't have an account? Register
    </p>
  );
}

export default RegisterButton;
