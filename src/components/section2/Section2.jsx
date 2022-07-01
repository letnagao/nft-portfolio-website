import React from 'react'
import './Section2.css'

const Section2 = () => {
  return (
    <div className='section2' id='Section2'>
        <div className='text-content'>
            <div className='text text1'>
                <h1>
                    How i <span>Started</span>
                </h1>
                <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nemo illum velit autem eligendi aspernatur!
                </h2>
            </div>
            <div className='text text2'>
                <h1><span>Experiences</span> so far</h1>
                <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nemo illum velit autem eligendi aspernatur!
                </h2>
            </div>
        </div>
        <div className='progress'>
            <div className='container' style={{'--x': 1}}>
                <h1>1</h1>
                <span>Lorem</span>
            </div>
            <div className='container' style={{'--x': 2}}>
                <h1>2</h1>
                <span>Lorem</span>
            </div>
            <div className='container' style={{'--x': 3}}>
                <h1>3</h1>
                <span>Lorem</span>
            </div>
        </div>
    </div>
  )
}

export default Section2