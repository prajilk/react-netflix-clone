import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { IMG_URL } from '../Constants';
import useMediaQuery from '../MediaQuery/UseMediaQuery';
import './RowPost.css'

function RowPost(props) {

  const [rowMovies, setRowMovies] = useState([]);

  useEffect(()=>{
    axios.get(props.genre)
    .then((response)=> {
      setRowMovies(response.data.results);
    })
  })
 
  const is1024px = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="rowpost">
        <div className="row-title">                    
            <div className='genre-title'><h1>{props.title}</h1></div>
            {is1024px && <div className='explore'><p className='explore-all'>Explore all</p><span>&#10095;</span></div>}
        </div>
        <div className="row-content">
          {rowMovies && rowMovies.map((movie,index)=> {
            return(
              <div className="img-cont">
                <img src={`${IMG_URL+movie.backdrop_path}`} alt="" key={index}/>
                {is1024px && <div className="movie-hover">
                    <h1>{movie.title ? movie.title : movie.name}</h1>
                    <div className="card-buttons">
                      <p className='rate'>★ {(movie.vote_average).toFixed(1)}</p>
                      <p className='release'>{String(movie.release_date).slice(0,4)}</p>
                      <p className='Q'>HD</p>
                    </div>
                  </div>}
              </div>
          )
          }
          )}
        </div>
    </div>
  )
}

export default RowPost
