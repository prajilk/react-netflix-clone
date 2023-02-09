import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RowPost from '../RowPost/RowPost'
import './Banner.css'
import { API_KEY, BASE_URL, IMG_URL } from '../Constants'
import { popular } from '../Urls'

function Banner() {

  const [bannerMovie, setBannerMovie] = useState('');

  useEffect(()=> {
    const randomIndex = Math.floor(Math.random() * 20);
    axios.get(`${BASE_URL}trending/all/day?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      setBannerMovie(response.data.results[randomIndex])
    })
  },[])

  return (
    <div className='banner' style={{backgroundImage: `url(${bannerMovie ? IMG_URL+bannerMovie.backdrop_path : ""})`}}>
        <div className="content">
            <div className="details">
                <h1 className='movie-title'>{bannerMovie.title ? bannerMovie.title : bannerMovie.name}</h1>
                <p className='movie-des'>{bannerMovie.overview}</p>
                <div className="buttons">
                    <button className='play-btn'>▶ Play</button>
                    <button className='info-btn'>&#9432; More Info</button>
                </div>
            </div>
            <RowPost title={'Popular'} genre={popular}/>
        </div>
    </div>
  )
}

export default Banner
