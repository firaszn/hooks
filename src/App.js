import React, { useState } from 'react';
import { moviesData } from './Data';
import Movielist from './Components/Movielist/Movielist';
import Addmovie from './Components/Addmovie/Addmovie';
import RatingStars from 'react-rating-stars-component';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav } from 'react-bootstrap';
import './App.css';





function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState(0);
  const [resetStars, setResetStars] = useState(true); 
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Function to filter movies by title
  const filteredByTitleMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase())
  );

  // Function to filter movies by rate
  const filteredByRateMovies = resetStars ? movies  : movies.filter((movie) => movie.rate === rateFilter);

  // Function to reset the filters
  const resetFilters = () => {
    setTitleFilter('');
    setRateFilter(0);
    setResetStars(true);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${'https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1.jpg'})` }}>
    <div className="App">
       <Navbar expand="lg"  className="navbar">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    
      </Navbar>
      <Addmovie onAddMovie={addMovie} />
      <div className="filters">
        <input
          type="text"
          placeholder="filter by title"
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
        />
        <RatingStars
        
          count={5}
          activeColor="#ffd700"
          size={30}
          onChange={(newRating) => {
            setRateFilter(newRating);
            setResetStars(false);
          }}
        />
        <Button variant="outline-primary" onClick={resetFilters}>
          Reset
        </Button>
      </div>
      <Movielist
        movies={filteredByTitleMovies.filter((movie) =>
          filteredByRateMovies.includes(movie)
        )}
      />
    </div>
    </div>

  );
}

export default App;
