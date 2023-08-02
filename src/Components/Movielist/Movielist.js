import React from 'react'
import Moviecard from '../Moviecard/Moviecard'
import './Movielist.css'
const Movielist = ({movies}) => {
  return (
    <div className="movie-list">
            {movies.map((movie) => (
        <Moviecard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default Movielist