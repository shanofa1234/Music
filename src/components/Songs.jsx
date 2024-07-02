// MusicTherapyPlaylist.js
import React from 'react';

const SpotifyRelaxingSongs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen flex flex-col p-6 overflow-auto">
      <div className="bg-gray-700 p-6 rounded mb-6 shadow-lg">
        <div className="flex items-center space-x-6">
          <img
            src="https://i.pinimg.com/564x/b6/43/a5/b643a54cc637563265ce94a9d62e349e.jpg"
            alt="Playlist Image"
            className="rounded shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold">Relaxing Songs</h2>
            <p className="text-gray-400">A.R. Rahman</p>
            <p className="text-gray-400">50 songs, about 3 hr 30 min</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 rounded shadow-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Album</th>
              <th className="py-3 px-4 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {/* Song Rows */}
            <tr className="hover:bg-gray-600">
              <td className="py-3 px-4">1</td>
              <td className="py-3 px-4">Tu Hai</td>
              <td className="py-3 px-4">Mohenjo Daro</td>
              <td className="py-3 px-4">3:58</td>
            </tr>
            <tr className="hover:bg-gray-600">
              <td className="py-3 px-4">2</td>
              <td className="py-3 px-4">Matargashti</td>
              <td className="py-3 px-4">Tamasha</td>
              <td className="py-3 px-4">5:28</td>
            </tr>
            <tr className="hover:bg-gray-600">
              <td className="py-3 px-4">3</td>
              <td className="py-3 px-4">Tu Kya Jaane</td>
              <td className="py-3 px-4">Amar Singh Chamkila</td>
              <td className="py-3 px-4">4:18</td>
            </tr>
            {/* Additional Songs */}
            <tr className="hover:bg-gray-600">
              <td className="py-3 px-4">4</td>
              <td className="py-3 px-4">Song 4</td>
              <td className="py-3 px-4">Album 4</td>
              <td className="py-3 px-4">4:00</td>
            </tr>
            <tr className="hover:bg-gray-600">
              <td className="py-3 px-4">5</td>
              <td className="py-3 px-4">Song 5</td>
              <td className="py-3 px-4">Album 5</td>
              <td className="py-3 px-4">4:30</td>
            </tr>
            <tr className="hover:bg-gray-600">
              <td className="py-3 px-4">6</td>
              <td className="py-3 px-4">Song 6</td>
              <td className="py-3 px-4">Album 6</td>
              <td className="py-3 px-4">3:45</td>
            </tr>
            <tr className="hover:bg-gray-600">
              <td className="py-3 px-4">7</td>
              <td className="py-3 px-4">Song 7</td>
              <td className="py-3 px-4">Album 7</td>
              <td className="py-3 px-4">5:10</td>
            </tr>
            <tr className="hover:bg-gray-600">
              <td className="py-3 px-4">8</td>
              <td className="py-3 px-4">Song 8</td>
              <td className="py-3 px-4">Album 8</td>
              <td className="py-3 px-4">3:20</td>
            </tr>
            <tr className="hover:bg-gray-600">
              <td className="py-3 px-4">9</td>
              <td className="py-3 px-4">Song 9</td>
              <td className="py-3 px-4">Album 9</td>
              <td className="py-3 px-4">4:50</td>
            </tr>
            <tr className="hover:bg-gray-600">
              <td className="py-3 px-4">10</td>
              <td className="py-3 px-4">Song 10</td>
              <td className="py-3 px-4">Album 10</td>
              <td className="py-3 px-4">4:05</td>
            </tr>
            <tr className="hover:bg-gray-600">
              <td className="py-3 px-4">11</td>
              <td className="py-3 px-4">Song 11</td>
              <td className="py-3 px-4">Album 11</td>
              <td className="py-3 px-4">3:40</td>
            </tr>
            <tr className="hover:bg-gray-600">
              <td className="py-3 px-4">12</td>
              <td className="py-3 px-4">Song 12</td>
              <td className="py-3 px-4">Album 12</td>
              <td className="py-3 px-4">4:25</td>
            </tr>
            <tr className="hover:bg-gray-600">
              <td className="py-3 px-4">13</td>
              <td className="py-3 px-4">Song 13</td>
              <td className="py-3 px-4">Album 13</td>
              <td className="py-3 px-4">5:00</td>
            </tr>
            <tr className="hover:bg-gray-600">
              <td className="py-3 px-4">14</td>
              <td className="py-3 px-4">Song 14</td>
              <td className="py-3 px-4">Album 14</td>
              <td className="py-3 px-4">3:55</td>
            </tr>
            <tr className="hover:bg-gray-600">
              <td className="py-3 px-4">15</td>
              <td className="py-3 px-4">Song 15</td>
              <td className="py-3 px-4">Album 15</td>
              <td className="py-3 px-4">4:15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpotifyRelaxingSongs;