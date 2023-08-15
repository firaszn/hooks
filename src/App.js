import React, { useState } from 'react';
import { moviesData } from './Data';

import './App.css';
import Navigation from './Components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Movies from './Pages/Movies';
import Description from './Pages/Description';
import Trailer from './Pages/Trailer';
import Error from './Pages/Error';
import Home from './Pages/Home';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState(0);
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    
    <div className="App" style={{ height: "10000px",  backgroundImage: `url(${'https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1.jpg'})` }}>
        
         <div style={{ backgroundColor: '#4A919E', padding: '10px' }}>
        <Navigation setTitleFilter={setTitleFilter} titleFilter={titleFilter} />
       
      </div><Routes>
      <Route  path="/movies" element={<Movies  movies={movies} onAddMovie={addMovie} setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} rateFilter={rateFilter} titleFilter={titleFilter}/>} />
      <Route  path="/description/:id" element={<Description movies={movies}/>} />
      <Route  path="/trailer/:id" element={<Trailer  />} />
      <Route  path="/" element={<Home  />} />


      <Route  path="/*" element={<Error/>} />

      </Routes>
     
      
      </div>
  );
}

export default App;

