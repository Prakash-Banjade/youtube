import React from 'react'
import Tags from '../components/Tags'
import Videos from '../components/Videos_Section'

const Home = ({setCurrentVideos}) => {
  return (
    <div className="home-content">
      <Tags />
      <Videos setCurrentVideos={setCurrentVideos} />
    </div>
  )
}

export default Home
