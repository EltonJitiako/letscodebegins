/*********** Version 2.0 ***********/
import React, { Component } from 'react';
//Router
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
//Pages
import Frontend from './Components/frontend';
import Backend from './Components/backend';
import Layout from './Components/layout';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/"></Link>
          <Switch>
            <Route path="/" exact><Layout /></Route>
            <Route path="/backend"><Backend /></Route>
            <Route path="/frontend"><Frontend /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
