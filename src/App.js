import React, { Component } from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import About from"./About.js";
import Home from "./Home.js";
import Header from "./Header.js";
import Footer from './Footer.js';
import NewGif from "./NewGif.js";

class App extends Component {
  render() {
    return (
      <HashRouter >
        <div className="container">
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/gallery" component={NewGif}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={NewGif}/>
          <Route path="/video&photos" component={NewGif}/>
          <Route path="/events" component={NewGif}/>
          <Route path="/inspections" component={NewGif}/>
          <Route path="/pricing" component={NewGif}/>

          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
