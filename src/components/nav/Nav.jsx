import React, {useEffect, useState} from 'react'
import './Nav.css'

import {AiOutlineHome} from 'react-icons/ai'
import { TbListDetails } from "react-icons/tb";
import { BsCollection } from "react-icons/bs";
import { BsChatLeftText } from "react-icons/bs";

function Nav () {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true)
    }, 3200)
  }, [])

  return <div className='nav'>

    <div className={`menu ${animate && "active"}`} style={{ "--d": 1}}>
        <a href='#Home'>
          <AiOutlineHome />
        </a>
        <div id='tooltip'>Home</div>
    </div>
    <div className={`menu ${animate && "active"}`} style={{ "--d": 2}}>
        <a href='#Section2'>
          <TbListDetails />
        </a>
        <div id='tooltip'>Details</div>
    </div>
    <div className={`menu ${animate && "active"}`} style={{ "--d": 3}}>
        <a href='#Collection'>
          <BsCollection />
        </a>
        <div id='tooltip'>Collection</div>
    </div>
    <div className={`menu ${animate && "active"}`} style={{ "--d": 4}}>
        <a href='#Contact'>
          <BsChatLeftText />
        </a>
        <div id='tooltip'>Home</div>
    </div>
  </div>
  
}

export default Nav 