import React from 'react'
import Moviecard from '../Moviecard/Moviecard'
import './Movielist.css'
const Movielist = ({movies,titleFilter,rateFilter}) => {
  return (
    <div className="movie-list">
{
rateFilter?
    movies.filter((movie) => movie.rate === rateFilter).map((movie) => (
        <Moviecard key={movie.id} movie={movie} />
      ))

           : movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase())).map((movie) => (
        <Moviecard key={movie.id} movie={movie} /> ))
        }
    
    </div>
  )
}

export default Movielist;