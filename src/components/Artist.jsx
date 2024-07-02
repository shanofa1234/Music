import React, { useState } from 'react';

 function MusicTherapyPlaylist() {
  // Array of image URLs and descriptions for each artist
  const artists = [
    {
      imageUrl: 'https://i.pinimg.com/564x/b6/43/a5/b643a54cc637563265ce94a9d62e349e.jpg',
      name: 'AR RAHMAN',
      description: 'Relaxing tunes to soothe your mind and unwind after a long day.'
      
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/98/de/a2/98dea2847cbfce6643f8d8e17226c422.jpg',
      name: 'YUVAN SANKAR RAJA',
      description: 'Energetic beats to keep you motivated and focused throughout your day.'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/e3/bf/48/e3bf485d75d83bdb46a9efeea3e3f8ef.jpg',
      name: 'HARRIS JAYARAJ',
      description: 'A mix of your favorite tracks from various genres to uplift your mood.'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/c8/95/fd/c895fde77f3f82fdfcabca5062f79d25.jpg',
      name: 'ANIRUTH',
      description: 'Chill vibes for a laid-back evening with friends or alone time.'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/35/3e/75/353e75b169fb3b96b3f1c7ab2acd5daa.jpg',
      name: 'VIJAY ANTONY',
      description: 'Upbeat melodies to get you moving and grooving.'
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/62/82/a2/6282a29914f3474d4379c25cffe9122e.jpg',
      name: 'GV PRAKASH',
      description: 'Soothing sounds to help you relax and unwind before bedtime.'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/b1/ff/d8/b1ffd8135ff9bff3795c6166327399ee.jpg',
      name: 'VIDHYASAGAR',
      description: 'Feel-good tunes to brighten up your day and lift your spirits.'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/ea/37/d7/ea37d73e62e0ad929dda8a6f00be7de1.jpg',
      name: 'ILLAYARAJA',
      description: 'A mix of old and new favorites to enjoy during your daily commute.'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/ef/30/16/ef301637414953f730619e88de16d6c5.jpg',
      name: 'THAMAN',
      description: 'Relaxing instrumental tracks for a peaceful and calming atmosphere.'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/b7/e8/e6/b7e8e69e81cffc64beeb8d8b61f60e66.jpg',
      name: 'SANTHOSH NARAYANAN',
      description: 'An eclectic mix of genres and styles for a unique listening experience.'
    },
  ];

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered artists based on search query
  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Section */}
        <main className="flex-1 overflow-y-auto p-4">
          <section>
            <h2 className="text-4xl font-bold mb-8 text-center">Artists</h2>
            {/* Search Input */}
            <div className="mb-4 flex justify-center items-center">
              <input
                type="text"
                placeholder="Search artists..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-gray-800 text-white border border-gray-700 rounded-md p-2 w-64 mr-4 focus:outline-none focus:border-indigo-500"
              />
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 transition duration-300">Search</button>
            </div>
            {/* Artist Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {filteredArtists.map((artist, index) => (
                <div key={index} className="flip-card bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 transform hover:scale-105">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={artist.imageUrl} alt="Artist Cover" className="w-full rounded-lg mb-4" />
                      <p className="text-white font-bold text-xl mb-2">{artist.name}</p>
                    </div>
                    <div className="flip-card-back bg-gray-900 p-4">
                      <p className="text-gray-400">{artist.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
} 
export default MusicTherapyPlaylist;