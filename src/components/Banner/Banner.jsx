import React, { useEffect, useState } from 'react'
import "./Banner.css"
import YouTube from "react-youtube"
import movieTrailer from  "movie-trailer"
import movieApi from "../../Api/movieApi"
import requests from "../../Api/request"

const Banner = () => {
  const [movie,setMovie]=useState([]);
  const [trailerUrl,setTrailerURL]=useState("");

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

function truncate (string,n){
  return string?.length>n?string.substr(0,n-1)+"...." :string;
}
const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    host: 'https://www.youtube.com',
    origin:window.location.origin
  }
}
const handleClick= async(movie)=>{
  console.log(movie)
 if(trailerUrl){
  setTrailerURL("");
 }
 else{
  try{
     const movieURL=await movieTrailer(null ,{ tmdbId: movie.id })
  //    https://www.youtube.com/watch?v=fssfdsfd...
     const urlParams= new URLSearchParams(new URL (movieURL).search);
  //    fssfdsfd
    setTrailerURL( urlParams.get("v")); 
  }
  catch(err){
      console.log(err.message)
  }
  // setTrailerURL("");
 }

}

const onReady = (event) => {
  // Handle onReady event, you may need to use postMessage here
  console.log('YouTube player is ready:', event);
};
  return (
    <>
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
          <button className='banner-button' onClick={()=>handleClick(movie)}>Play</button>
          <button className='banner-button'>List</button>
        </div>
        <h1 className="banner-description">
          {truncate(movie?.overview,150)}
        </h1>
      </div>
    
      <div className='banner-fadeBottom'/>
      
    </header>
      {trailerUrl&& <YouTube   videoId={trailerUrl}  opts={opts} onReady={onReady}/>}
      </>
  )
}

export default Banner