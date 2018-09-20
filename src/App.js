import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Entry from './pages/Entry.js'
import Main from './pages/Main.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <BrowserRouter>
        <div>
          <Route exact path="/" component={Entry} />
          <Route path="/main" component={Main} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
