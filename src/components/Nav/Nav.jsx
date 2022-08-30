import React from 'react'
import { BsWhatsapp,BsFacebook,BsInstagram } from "react-icons/bs";
import './Nav.css'

const Nav = () => {
    
  return (
    <>
        <nav className={window.innerWidth > 600 ? "nav vertical text-center": "d-none"} >
            <ul>
                <li>
                <img src="img/dragon.png" alt="" />
                </li>
                <li className=' mb-4'>
                <div className=' mx-auto hrV bg-gradient'></div>
                <div className=' mx-auto hrVScroll '></div>
                <div className=' mx-auto hrV2 hrV bg-gradient'></div>
                </li>
                <li className=' d-flex justify-content-center '>
                <p className='texto-vertical-2 text-secondary fw-bold  '>contáctanos</p>
                </li>
                <li>
                    <a href="https://www.instagram.com/?hl=es-la">
                        <BsInstagram/>
                    </a>
                
                </li>
                <li>
                    <a href="https://web.whatsapp.com/">
                        <BsWhatsapp/>
                    </a>
                
                </li>
                <li>
                    <a href="http://www.facebook.com/">
                        <BsFacebook/>
                    </a>
                
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Nav