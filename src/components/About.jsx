import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-100 relative min-h-screen">
      {/* Hero Video Section */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0458/large_preview/_import_60c2ef38f050d1.45463959.mp4?filename=1105117_1080p_4k_2k_3840x2160.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white bg-opacity-50 rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-bold text-pink-600 mb-6">About Us</h2>
            <p className="text-lg text-pink-600 leading-relaxed">
              Music Therapy Hub is dedicated to providing accessible and effective music therapy sessions for individuals seeking mental and emotional wellness.
            </p>
            <p className="text-lg text-pink-600 leading-relaxed mt-4">
              Our team of experienced therapists and musicians create custom sessions tailored to your needs, helping you achieve inner peace and harmony.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
