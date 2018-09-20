import React, { Component } from 'react'
import '../css/entry.css'
import { Link } from 'react-router-dom'

class Entry extends Component {
  render() {
    return (
      <div className='landingPage'> 
        <h1> Welcome to the landing page </h1>
          <a href="/main">
            <button className='mainButton'>
              Enter the main site
             </button>
          </a>
      </div>
    )
  }
}

export default Entry;