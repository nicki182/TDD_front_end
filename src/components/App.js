import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Frontpage from "./frontpage";
import Register from "./register";
import Page from "./page";
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div className="center w85">
        <div className="ph3 pv1 background-gray">
          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Frontpage}/>
            <Route exact path="/REGISTER" component={Register} />
            <Route exact path="/PAGE" component={Page} />
          </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
