import React from 'react';

function App() {
    return (
        <div style={{ 
            backgroundImage: "url('https://img.freepik.com/free-photo/3d-music-related-scene_23-2151124956.jpg?t=st=1717923185~exp=1717926785~hmac=eaa73e31adbc2c215025881a4d4a0c6841cba059bde4960ac1114c75e44267be&w=1380')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="text-center w-full max-w-6xl p-12 bg-white rounded-lg shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.5)', animation: 'fade-in 1s ease-in-out' }}>
                <h1 className="text-4xl font-serif font-bold mb-8">Quick Access to Playlists</h1>
                <p className="text-lg mb-10 font-serif">Access your favorite playlists instantly.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <a href ="/artist" className="block p-8 bg-blue-500 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out transform hover:rotate-y-180">
                        Relaxing Tunes
                    </a>
                    <a href="#" className="block p-8 bg-green-500 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out transform hover:rotate-y-180">
                        Workout Beats
                    </a>
                    <a href="#" className="block p-8 bg-red-500 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out transform hover:rotate-y-180">
                        Study Sessions
                    </a>
                    <a href="#" className="block p-8 bg-purple-500 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-purple-600 hover:shadow-lg focus:bg-purple-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-700 active:shadow-lg transition duration-150 ease-in-out transform hover:rotate-y-180">
                        Party Hits
                    </a>
                    <a href="#" className="block p-8 bg-yellow-500 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out transform hover:rotate-y-180">
                        Morning Boost
                    </a>
                    <a href="#" className="block p-8 bg-pink-500 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-pink-600 hover:shadow-lg focus:bg-pink-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-lg transition duration-150 ease-in-out transform hover:rotate-y-180">
                        Chill Vibes
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
