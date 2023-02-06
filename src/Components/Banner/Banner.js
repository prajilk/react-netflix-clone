import React from 'react'
import RowPost from '../RowPost/RowPost'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className="content">
            <div className="details">
                <h1 className='movie-title'>Money Heist</h1>
                <p className='movie-des'>In 1971, a skyjacker parachutes off a plane with a bag of stolen cash — and gets away with it. Decades later, his identity remains a compelling mystery.</p>
                <div className="buttons">
                    <button className='play-btn'>▶ Play</button>
                    <button className='info-btn'>&#9432; More Info</button>
                </div>
            </div>
            <RowPost title={'Popular on Netflix'}/>
        </div>
    </div>
  )
}

export default Banner
