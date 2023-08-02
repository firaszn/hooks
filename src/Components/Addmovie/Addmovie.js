import React, { useState } from 'react';
import './Addmovie.css'; 

const Addmovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [rate, setRate] = useState(0);
  const [posterUrl, setPosterUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate that title, rating, and poster URL are not empty before adding the movie
    if (title.trim() !== '' && rate.trim() !== '' && posterUrl.trim() !== '' && description.trim() !== '') {
      // Create a new movie object with the title, poster URL, and rating
      const newMovie = {
        title,
        posterUrl,
        description,
        rate: parseFloat(rate),
      };
      onAddMovie(newMovie);

      setTitle('');
      setDescription('');
      setRate(0);
      setPosterUrl('');
    }
  };

  return (
    <div className="center-container"> 
      <form onSubmit={handleSubmit}>
        <div className='addmovie'>
          <input
            type="text"
            placeholder="Movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Movie description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Movie rating"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Movie IMG URL"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
          />
        </div>
        <div>
        <button type="submit" style={{ backgroundColor: "#4A919E" }}>
  Add Movie
</button>

        </div>
      </form>
    </div>
  );
};

export default Addmovie;
