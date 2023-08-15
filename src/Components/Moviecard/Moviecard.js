import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-stars';
const Moviecard = ({ movie }) => {
  const navigate = useNavigate();
  
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
          <ReactStars value={movie.rate} half={false} edit={false} count={5} size={24} color2={'#ffd700'} />
          <Button onClick={() => navigate(`/description/${movie.id}`)}>Description</Button>
          <Button onClick={() => navigate(`/trailer/${movie.id}`)}>Trailer</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Moviecard;

