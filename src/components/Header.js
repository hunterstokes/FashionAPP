import React, { Component } from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return(
      <header>
        <div className="home-link">
          <Link to="/main" >
            <section className="header-logo">
              <img src="https://i.pinimg.com/736x/0b/73/51/0b7351f7b132512ea28fae9d5fff1bde--triangle-logos-triangle-logo-design.jpg" />
            </section>
          </Link>
        </div>

        <section className="store-page">
          <h2> Store </h2>

        </section>
      </header>
    )
  }
}

export default Header