import React from 'react'
import './Home.css'
import bg from '../props/photo-nft.jpg';

function Home () {
  return (
    <div className='Home' id='Home'>
        <div className='bg'>
            <img src={bg} alt="" />
        </div>

        <div className="content">
            <h1>
                <c>eXplore</c> my <d>nft</d> <br />
                collection
            </h1>
        </div>
    </div>
  )
}

export default Home