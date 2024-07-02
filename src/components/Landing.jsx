import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div
      onClick={() => loginWithRedirect()}
      className="cursor-pointer text-pink-600 font-bold rounded flex items-center hover:text-pink-400"
    >
      <span className="ml-2">Log In</span>
    </div>
  );
}

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className="cursor-pointer text-pink-600 font-bold rounded flex items-center hover:text-pink-400"
    >
      <span className="ml-2">Log Out</span>
    </div>
  );
};

export default function Landing() {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-pink-600">Music Therapy Hub</div>
          <nav className="space-x-4 flex items-center">
            <a href="/Home" className="text-pink-600 hover:text-pink-400">Home</a>
            <a href="#sessions" className="text-pink-600 hover:text-pink-400">Sessions</a>
            <a href="/about" className="text-pink-600 hover:text-pink-400">About</a>
            <a href="/contact" className="text-pink-600 hover:text-pink-400">Contact</a>
            <LoginButton />
            <LogoutButton />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
        <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0475/large_preview/_import_6204a07231b452.47757937.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-pink-600">Welcome to Music Therapy Hub</h1>
          <p className="text-xl mb-8 text-pink-600">Find inner peace and relaxation through music</p>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Add your signup form here */}
        </div>
      </section>

      {/* Sessions Section */}
      <section id="sessions" className="py-20 bg-gray-50">
        {/* Sessions content */}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        {/* About content */}
      </section>
    </div>
  );
}
