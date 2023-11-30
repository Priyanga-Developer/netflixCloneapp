import React, { useEffect, useState } from 'react'
import "./Banner.css"
import movieApi from "../../Api/movieApi"
import requests from "../../Api/request"
const Banner = () => {
  const [movie,setMovie]=useState([])

  useEffect(()=>{
    const fetchData=async()=>{

      try{
        const response =await movieApi.get(requests.fetchNetflixOriginals);
        setMovie(response.data.results[
          Math.floor(Math.random()*response.data.results.length-1)
              ]
          );
       return response;

      }
      catch(err){
        console.log(err.message);
      }
       
    }
    fetchData();
    // return ()=>fetchData();
  },[])
console.log(movie);
function truncate (string,n){
  return string?.length>n?string.substr(0,n-1)+"...." :string;
}

  return (
    <header className='banner'
    style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundSize:"cover",
      backgroundPosition: "center center ",
    }}
    >
      <div className='banner-contents'>
        <h1 className='banner-title'>
          {movie?.title|| movie?.name||movie?.original_name}
        </h1>
        <div className='banner-buttons'>
          <button className='banner-button'>Play</button>
          <button className='banner-button'>List</button>
        </div>
        <h1 className="banner-description">
          {truncate(movie?.overview,150)}
        </h1>
      </div>

      <div className='banner-fadeBottom'/>

    </header>
  )
}

export default Banner