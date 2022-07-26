import React from 'react';
import StarsRating from 'stars-rating';
import { Navbar,Nav,Container,Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Search = ({setRatingSearch,setSearchTitle}) => {
  return (
    <div>
          <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Watch2Movies</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><Link to ="/">Home</Link></Nav.Link>
      <Nav.Link><Link to ="/movie">Movies</Link></Nav.Link>
      <Nav.Link><Link to ="/addMovie">AddMovie</Link></Nav.Link>
    </Nav>
    <Form.Control className='inp' type="text" placeholder="Search movies..." 
    onChange={(e)=>setSearchTitle(e.target.value)} />
    <StarsRating
  count={5}
  onChange={(newValue)=>{
      setRatingSearch(newValue)
  }}
  size={24}
  color2={'#ffd700'} />
    </Container>
  </Navbar>
    </div>
  )
}

export default Search