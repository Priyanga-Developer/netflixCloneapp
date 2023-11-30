import React, { useEffect, useState } from 'react'
import movieApi from "../../Api/movieApi"

import "./Row.css"

const Row = ({title,fetchUrl,isLargeRow=false}) => {
    const [movies,setMovies]=useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
       const fetchData=async()=>{
        try{
            const response=await movieApi.get(fetchUrl);
            setMovies(response.data.results)
            return response;
        }
        catch(err){
            console.log(err.message);
        }
       }
       fetchData();
    })
    console.log(movies)

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row-posters'>
            {
                movies.map(
                    (movie)=>((isLargeRow&&movie.poster_path)||((!isLargeRow&&movie.backdrop_path)))&&(
                        <img 
                        key={movie.id} 
                        className={`row-poster ${isLargeRow&&"row-posterLarge"}`}
                        src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
                        alt="movie-list" />
                    )

                )
            }

        </div>

    </div>
  )
}

export default Row