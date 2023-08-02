import React, { useState } from 'react';
import { moviesData } from './Data';
import Movielist from './Components/Movielist/Movielist';
import Addmovie from './Components/Addmovie/Addmovie';
import './App.css';
import Filter from './Components/Filter';
import Navigation from './Components/Navigation';
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState(0);
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  
 

  return (
    <div className="App" style={{ backgroundImage: `url(${'https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1.jpg'})` }}>
     
      <div style={{ backgroundColor: '#4A919E', padding: '10px' }}>
        <Navigation setTitleFilter={setTitleFilter} titleFilter={titleFilter} />
      </div>

      <Addmovie onAddMovie={addMovie} />
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} rateFilter={rateFilter} titleFilter={titleFilter} />
      <Movielist movies={movies} rateFilter={rateFilter} titleFilter={titleFilter} />
    </div>
  );
}

export default App;
