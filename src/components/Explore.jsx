import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-100">
      <header className="header-bg">
        <div className="header-content">
          <h1 className="text-3xl font-bold">Mental Health Resources</h1>
          <p className="text-sm mt-2">
            Find articles, tips, and videos to support your mental well-being
          </p>
        </div>
      </header>

      <main className="container mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Audios</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap -mx-2">
              {audioData.map((audio, index) => (
                <div key={index} className="p-2 w-full sm:w-1/2 lg:w-1/3">
                  <div className="p-4 border rounded-md shadow-lg hover:shadow-xl transition-shadow bg-yellow-50">
                    <h3 className="text-xl font-semibold">{audio.title}</h3>
                    <p className="mt-2 text-gray-700">{audio.description}</p>
                    <audio controls className="mt-4">
                      <source src={audio.src} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-bg p-4 text-white text-center mt-8 rounded-lg">
        <p>&copy; 2024 Mental Health Resources</p>
      </footer>

      <a href="#" className="action-button">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7M12 3v18" />
        </svg>
      </a>
    </div>
  );
};

const audioData = [
  {
    title: 'Relaxing Music 1',
    description: 'Listen to soothing music to help reduce stress and anxiety.',
    src: 'https://od.lk/s/MThfNDgxNDQ3NDlf/Katchi%20Sera_128-%28MassTamilan%29%20%281%29.mp3',
  },
  {
    title: 'Relaxing Music 2',
    description: 'Listen to soothing music to help reduce stress and anxiety.',
    src: 'https://od.lk/d/MThfNDgxNDgyODVf/Oru%20Manam.mp3',
  },
  {
    title: 'Relaxing Music 3',
    description: 'Listen to soothing music to help reduce stress and anxiety.',
    src: 'https://od.lk/d/MThfNDgxNDgzNDNf/Nallai-Allai-D-Sathyaprakash-Chinmayi-Sripaada-A-R-Rahman.mp3',
  },
  {
    title: 'Relaxing Music 4',
    description: 'Listen to soothing music to help reduce stress and anxiety.',
    src: 'https://od.lk/d/MThfNDgxNDg2NDVf/Innum-Konjam-Naeram-Vijay-Prakash-Shweta-Mohan.m4a',
  },
  {
    title: 'Relaxing Music 5',
    description: 'Listen to soothing music to help reduce stress and anxiety.',
    src: 'https://od.lk/d/MThfNDgxNDg2NzFf/Pookkal-Pookkum-G-V-Prakash-Kumar.mp3',
  },
  {
    title: 'Relaxing Music 6',
    description: 'Listen to soothing music to help reduce stress and anxiety.',
    src: 'https://od.lk/s/MThfNDgxNDQ3ODBf/Peyarai%20Santhikadi%20%28OST%20-%20%20MassTamilan.fm%29.mp3',
  },
  {
    title: 'Relaxing Music 7',
    description: 'Listen to soothing music to help reduce stress and anxiety.',
    src: 'https://od.lk/s/MThfNDgxNDQ3ODJf/Pothavillai%20Neengatha%20Kanavu%20-%20Theeviravaathi%20Remix%20%28OST%20-%20%20MassTamilan.fm%29.mp3',
  },
  {
    title: 'Relaxing Music 8',
    description: 'Listen to soothing music to help reduce stress and anxiety.',
    src: 'https://od.lk/s/MThfNDgxNDQ3ODZf/Un%20Vizhigalil%20Remix%20-%20DJ%20BoBo%20%28OST%20-%20%20MassTamilan.fm%29.mp3',
  },
  {
    title: 'Relaxing Music 9',
    description: 'Listen to soothing music to help reduce stress and anxiety.',
    src: 'https://od.lk/s/MThfNDgxNDQ3OTFf/Vaa%20Nilave%20Nilave%20-%20Kundrathile%20Kuyil%20Endral%20%28OST%20-%20%20MassTamilan.fm%29.mp3',
  },
  {
    title: 'Relaxing Music 10',
    description: 'Listen to soothing music to help reduce stress and anxiety.',
    src: 'https://od.lk/s/MThfNDgxNDQ3OTZf/Kanavane%20Thozhan%20-%20Theeviravaathi%20Remix%20%28OST%20-%20%20MassTamilan.fm%29.mp3',
  },
  {
    title: 'Relaxing Music 11',
    description: 'Listen to soothing music to help reduce stress and anxiety.',
    src: 'https://od.lk/s/MThfNDgxNDQ4MDJf/Kanden%20-%20Kundrathile%20Kuyil%20Endral%20%28OST%20-%20%20MassTamilan.fm%29.mp3',
  },
  {
    title: 'Relaxing Music 12',
    description: 'Listen to soothing music to help reduce stress and anxiety.',
    src: 'https://od.lk/s/MThfNDgxNDQ4MDVf/Kalaiyodu%20Manithargal%20%28OST%20-%20%20MassTamilan.fm%29.mp3',
  },
  {
    title: 'Relaxing Music 13',
    description: 'Listen to soothing music to help reduce stress and anxiety.',
    src: 'https://od.lk/s/MThfNDgxNDQ4MDlf/Manithargal%20Meendum%20Santhippargal%20-%20Theeviravaathi%20Remix%20%28OST%20-%20%20MassTamilan.fm%29.mp3',
  },
  {
    title: 'Relaxing Music 14',
    description: 'Listen to soothing music to help reduce stress and anxiety.',
    src: 'https://od.lk/s/MThfNDgxNDQ4MTFf/Vizhigalil%20Kalainthu%20Sellum%20-%20Theeviravaathi%20Remix%20%28OST%20-%20%20MassTamilan.fm%29.mp3',
  },
  {
    title: 'Relaxing Music 15',
    description: 'Listen to soothing music to help reduce stress and anxiety.',
    src: 'https://od.lk/s/MThfNDgxNDQ4MTVf/Un%20Vizhigalil%20Kalainthu%20Sellum%20-%20Theeviravaathi%20Remix%20%28OST%20-%20%20MassTamilan.fm%29.mp3',
  },
];

export default App;