/*********** Version 2.0 ***********/
import React, { Component } from 'react';
//Router
import { HashRouter, Switch, Route } from "react-router-dom";
//Pages
import Frontend from './Components/frontend';
import Backend from './Components/backend';
import Layout from './Components/layout';
import Portifolio from './Components/portifolio';
import Mobile from './Components/mobile'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Layout} />
            <Route path="/backend" component={Backend} />
            <Route path="/frontend" component={Frontend} />
            <Route path="/portifolio" component={Portifolio} />
            <Route path="/mobile" component={Mobile} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}



export default App;
