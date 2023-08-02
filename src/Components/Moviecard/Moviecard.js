import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from 'react-stars'

const Moviecard = ({movie}) => {
  return (
    <div className="movie-card">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
    <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        {movie.description}
       <p> Rating: {movie.rate}</p>
        </Card.Text>
        <ReactStars
        value={movie.rate}
        half={false}
        edit={false}
  count={5}
  size={24}
  color2={'#ffd700'} />
      </Card.Body>
    </Card>
    </div>
  )
}

export default Moviecard