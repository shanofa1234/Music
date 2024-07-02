import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing';
import About from './components/About';

import Home from './components/Home';
import Checkin from './components/Checkin';
import Contact from './components/Contact';
import Progress from './components/Progress';
import Article from './components/Article';
import Playlist from './components/Playlist';
import Artist from './components/Artist';
//import Songs from './components/Songs';
import Explore from './components/Explore';







function App() {
  // The 'count' state is unused. It can be removed if not needed.
  const [count, setCount] = useState(0);

  return (
    
    <>
     
     <BrowserRouter>
     <Routes>
          
         <Route path="/" element={<Landing/>} />
          <Route path="/about" element={<About/>} />
          
          <Route path="/Home" element={<Home/>} />
          <Route path="/checkin" element={<Checkin/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/progress" element={<Progress/>} />
          <Route path="/articles" element={<Article/>} />
          <Route path="/playlist" element={<Playlist/>} />
          <Route path="/artist" element={<Artist/>} /> 
          {/* <Route path = "/songs" element={<Songs/>} /> */}
          <Route path="/explore" element={<Explore/>} />
          

         
          
    
          
          
    
          
        </Routes>
        </BrowserRouter>
    </>
     
        
        
      
    
   
  );
}

export default App;