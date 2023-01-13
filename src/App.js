/*********** Version 2.0 ***********/
import React, { Component } from 'react';
//Router
import { HashRouter, Switch, Route } from "react-router-dom";
//Pages
import Frontend from './Components/frontend';
import Backend from './Components/backend';
import Layout from './Components/layout';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route path="/letscodebegins" exact><Layout /></Route>
            <Route path="/letscodebegins/backend"><Backend /></Route>
            <Route path="/letscodebegins/frontend"><Frontend /></Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}



export default App;
