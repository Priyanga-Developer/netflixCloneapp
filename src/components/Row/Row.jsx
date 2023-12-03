import React, { useEffect, useState } from 'react'
import movieApi from "../../Api/movieApi"
import YouTube from "react-youtube"
import movieTrailer from  "movie-trailer"
import "./Row.css"

const Row = ({title,fetchUrl,isLargeRow=false}) => {
    const [movies,setMovies]=useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [trailerUrl,setTrailerURL]=useState("");

 
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
       
    },[fetchUrl])
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
         
       }

    }
  

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row-posters'>
            {
                movies.map(
                    (movie)=>((isLargeRow&&movie.poster_path)||((!isLargeRow&&movie.backdrop_path)))&&(
                        <img 
                        key={movie.id}
                        onClick={()=>handleClick(movie)} 
                        className={`row-poster ${isLargeRow&&"row-posterLarge"}`}
                        src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
                        alt="movie-list" />
                    )

                )
            }

        </div>
      {trailerUrl&& <YouTube   videoId={trailerUrl}  opts={opts}/>}
    </div>
  )
}

export default Row