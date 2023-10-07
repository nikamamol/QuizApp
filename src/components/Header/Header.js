import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
   <Link to="/" className='title'>Intuative Quize Hub</Link>
   <br/>
    </div>
  )
}

export default Header

