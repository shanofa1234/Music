import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative bg-gray-100">
      {/* Video Background */}
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="https://videocdn.cdnpk.net/harmony/content/video/partners1007/large_preview/h9cdfa13e_V0125_064.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10">
        {/* Dashboard Section */}
        <main className="max-w-6xl mx-auto mt-20 px-4 relative overflow-hidden">
          <section className="py-12 relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-pink-600 text-center">Your Dashboard</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-pink-600 text-center">Daily Mood Check-In</h3>
                <p className="text-pink-600 text-center">Click here to check in your mood for today.</p>
                <Link to="/checkin" className="block mx-auto mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded text-center">
                  CHECK IN
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-pink-600 text-center">Quick Access to Playlists</h3>
                <p className="text-pink-600 text-center">Access your favorite playlists instantly.</p>
                <Link to="/playlist" className="block mx-auto mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded text-center">
                  View Playlists
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-pink-600 text-center">Music Therapy</h3>
                <p className="text-pink-600 text-center">Explore curated playlists for music therapy.</p>
                <Link to="/explore" className="block mx-auto mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded text-center">
                  Explore Therapy
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-pink-600 text-center">Progress Tracking</h3>
                <p className="text-pink-600 text-center">Track your mood and progress over time.</p>
                <Link to="/progress" className="block mx-auto mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded text-center">
                  Track Progress
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-pink-600 text-center">Educational Resources</h3>
                <p className="text-pink-600 text-center">Read articles and tips on mental health.</p>
                <Link to="/articles" className="block mx-auto mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded text-center">
                  Explore Resources
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-pink-600 text-center">Community</h3>
                <p className="text-pink-600 text-center">Join discussions and connect with others.</p>
                <Link to="/community" className="block mx-auto mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded text-center">
                  Join Now
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-pink-600 text-center">Settings</h3>
                <p className="text-pink-600 text-center">Manage your profile and app settings.</p>
                <Link to="/settings" className="block mx-auto mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded text-center">
                  Go to Settings
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
