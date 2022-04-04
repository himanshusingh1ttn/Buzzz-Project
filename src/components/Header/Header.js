import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='headerPart'>
      <div className='left'>
        <ul>
          <li><h1>
            Logo</h1></li>
        </ul>
      </div>
      <div className='Right'>
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>image</li>
        </ul>
      </div>
    </div>
  )
}

export default Header