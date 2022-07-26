import React from "react";
import YouTube from "react-youtube";
import {useParams, useNavigate} from "react-router-dom"



const Trailer = ({data}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    console.log(id)
    
    const movie = data.find((movie)=>movie.id === +id)
    console.log(movie)
    return(
        <div>
              <YouTube videoId={movie.trailerId}/>;
              <button onClick={()=> navigate(-1)} >back to movie list</button>
        </div>
    )
}
export default Trailer