import React from 'react'
import requests from '../../Api/request';
import Nav from "../../components/Nav/Nav"
import Banner from '../../components/Banner/Banner';
import Row from '../../components/Row/Row';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <Nav/>
      <Banner/>
      <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow={true}
      />
       <Row
            title="Trending Now"
            fetchUrl={requests.fetchTrending}
      />
        <Row
            title="Top Rated"
            fetchUrl={requests.fetchTopRated}
      />
        <Row
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
      />
        <Row
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
      />
          <Row
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
      />
        <Row
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}
      />
       <Row
            title="Documentaries"
            fetchUrl={requests.fetchDocumentaries}
      />
      
      {/* Nav
      Banner
      Row
      Row */}

       
    </div>
  )
}

export default HomeScreen