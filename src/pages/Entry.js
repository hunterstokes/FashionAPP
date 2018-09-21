import React, { Component } from 'react'
import '../css/entry.css'
import { Link } from 'react-router-dom'

class Entry extends Component {
  render() {
    return (
      <div className='landingPage'> 
        
          <button className='mainButton'>
            <a href="/main" className="mainSite">
             Enter Site
            </a>
          </button>
        
      </div>
    )
  }
}

export default Entry;