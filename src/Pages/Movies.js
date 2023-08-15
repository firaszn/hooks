import React from 'react';
import Addmovie from '../Components/Addmovie/Addmovie';
import Filter from '../Components/Filter';
import Movielist from '../Components/Movielist/Movielist';

const Movies = ({
  onAddMovie,
  setTitleFilter,
  setRateFilter,
  rateFilter,
  titleFilter,
  movies 
}) => {
  return (
    <div>
      <Addmovie onAddMovie={onAddMovie} />
      <Filter
        setTitleFilter={setTitleFilter}
        setRateFilter={setRateFilter}
        rateFilter={rateFilter}
        titleFilter={titleFilter}
      />
      <Movielist
        movies={movies} 
        rateFilter={rateFilter}
        titleFilter={titleFilter}
      />
    </div>
  );
};

export default Movies;
