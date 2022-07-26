import React from 'react';
import {Button, Card} from 'react-bootstrap'
import StarsRating from 'stars-rating'
import {Link} from 'react-router-dom'




const MovieCard = ({movie}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.image} />
    <Card.Body>
      <Card.Title> {movie.name} </Card.Title>
      <Card.Text>
        {movie.description}
      </Card.Text>
      <Card.Text>
        {movie.year}
      </Card.Text>
      <Card.Text>
      <StarsRating
  count={5}
  value={movie.rating}
  size={24}
  edit={false}
  color2={'#ffd700'} />

      </Card.Text>
      <Link to={`/trailer/${movie.id}`}><Button>Watch Trailer Now</Button></Link>
    </Card.Body>
  </Card>
  )
}

export default MovieCard