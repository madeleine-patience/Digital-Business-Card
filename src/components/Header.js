import React from 'react'
import madeleine from '../madeleine.png'

function Header() {
  return (
    <header>
      <img className="mainImage" src={madeleine} alt="madeleiene" />
      <div className="titles">
        <h1> Madeleine Belanger </h1>
        <h2> Front End Developer </h2>
        <p> madeleineswebsite </p>
      </div>
    </header>
  )
}

export default Header
