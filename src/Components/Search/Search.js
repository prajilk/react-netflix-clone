import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { IMG_URL } from '../Constants';
import Footer from '../Footer/Footer';
import useMediaQuery from '../MediaQuery/UseMediaQuery';
import NavBar from '../NavBar/NavBar'
import { search } from '../Urls';
import './Search.css'

function Search() {
    const [queryParam] = useSearchParams();
    const [resultTitle,setResultTitle] = useState('');
    const [rowMovies, setRowMovies] = useState([]);
    const [isNextQuery, setIsNextQuery] = useState(true);

    const is1024px = useMediaQuery('(min-width: 1024px)');

    useEffect(()=>{

        if(queryParam.get('q') !== null && queryParam.get('q') !== ''){
            axios.get(`${search+queryParam.get('q').split(' ').join('+')}&page=1&include_adult=false`)
            .then((response)=>{
                if(response.data.total_results > 0){
                    setResultTitle(`Results for '${queryParam.get('q')}'`);
                    setRowMovies(response.data.results);
                    setIsNextQuery(true);
                } else {
                    setResultTitle(`There were no results for '${queryParam.get('q')}'`);
                    setIsNextQuery(false);
                }
            })
            
        } else {
            setResultTitle(`There were no results found`)
            setIsNextQuery(false);
        }
    },[queryParam])

  return (
    <div>
        <NavBar />
        <div className='result-page' style={{marginBottom: !isNextQuery ? '60vh' : '0', marginTop: is1024px ? '80px': '0'}}>
            <div className="results-title">
                <h1>{resultTitle}</h1>
            </div>
            
            {isNextQuery && <div className="results">
                {rowMovies && rowMovies.map((movie,index)=> {
                    if(movie.backdrop_path === null || !movie.hasOwnProperty('backdrop_path')){
                        return null;
                    }
                    return(
                        <img src={`${IMG_URL+movie.backdrop_path}`} key={index} alt=''/>
                    )
                })}
            </div>}
        </div>
        <Footer />
    </div>
  )
}

export default Search
