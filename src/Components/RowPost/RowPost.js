import React from 'react'
import { testRowPost } from '../../Images/imgUrls'
import useMediaQuery from '../MediaQuery/UseMediaQuery';
import './RowPost.css'

function RowPost(props) {
  const is1024px = useMediaQuery('(min-width: 1024px)');
  return (
    <div className="rowpost">
        <div className="row-title">                    
            <div className='genre-title'><h1>{props.title}</h1></div>
            {is1024px && <div className='explore'><p className='explore-all'>Explore all</p><span>&#10095;</span></div>}
        </div>
        <div className="row-content">
            <img src={testRowPost} alt="" />  
            <img src={testRowPost} alt="" />  
            <img src={testRowPost} alt="" />  
            <img src={testRowPost} alt="" />  
            <img src={testRowPost} alt="" />   
            <img src={testRowPost} alt="" />   
            <img src={testRowPost} alt="" />                    
        </div>
    </div>
  )
}

export default RowPost
