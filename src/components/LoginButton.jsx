import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="relative bg-gray-100 h-screen flex items-center justify-center">
      {/* Video Background */}
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="https://videocdn.cdnpk.net/harmony/content/video/partners1007/large_preview/h9cdfa13e_V0125_064.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      
      {/* Login Button */}
      <div className="relative z-10">
        <button 
          onClick={() => loginWithRedirect()} 
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
