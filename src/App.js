import React, { Component } from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import Home from "./Home.js";

import Header from "./Header.js";
import NewGif from "./NewGif.js";

class App extends Component {
  render() {
    return (
      <HashRouter >
        <div className="container">
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={NewGif}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
