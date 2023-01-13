/*********** Version 2.0 ***********/
import React, { Component } from 'react';
//Router
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Pages
import Frontend from './Components/frontend';
import Backend from './Components/backend';
import Layout from './Components/layout';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/letscodebegins" exact><Layout /></Route>
            <Route path="/letscodebegins/backend" exact><Backend /></Route>
            <Route path="/letscodebegins/frontend" exact><Frontend /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
