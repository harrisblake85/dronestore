import React, { Component } from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import Home from "./Home.js";
import Header from "./Header.js";

class App extends Component {
  render() {
    return (
      <HashRouter >
        <div className="container">
          <Header />
          <Route exact path="/" component={Home}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
