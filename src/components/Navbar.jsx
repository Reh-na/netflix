import React, { useEffect, useState } from 'react'
import './Navbar.css'
function Navbar() {
    const [show,setShow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>600){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    })
  return (
    <div>
    <img className={`nav ${show && 'nav-black'}`} width={'150px'}src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
    </div>
  )
}

export default Navbar