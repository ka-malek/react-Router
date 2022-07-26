import React, { useState} from 'react';
import {Routes,Route} from "react-router-dom"
import MoviesList from './components/MoviesList';
import Search from './components/Search';
import { moviesData } from './Data';
import "./App.css"
import AddMovie from './components/AddMovie';
import Trailer from './components/Trailer'


const App = () => {
  const [movies,setMovies]= useState(moviesData);
  const [ratingSearch,setRatingSearch]= useState(0);
  const [searchTitle,setSearchTitle]=useState("");

  

  const handleMovie = (movie)=>{
    console.log(movie)
    setMovies([...movies,movie])
    console.log(movie)
  }

  return (
    <div>
     
      <Search  setRatingSearch={setRatingSearch} setSearchTitle={setSearchTitle} />
      <Routes>
      <Route path="/" element={<h1>Welcome to home page</h1>}/>
       <>
      <Route path="/movie" element={<MoviesList ratingSearch={ratingSearch} searchTitle={searchTitle}  movies={movies} />}/>
      
      <Route path="/addMovie" element={<AddMovie handleMovie={handleMovie} />}/>
      <Route path="/trailer/:id" element={<Trailer data={movies} />}/>
      </>
      </Routes>
    </div>
  )
}

export default App