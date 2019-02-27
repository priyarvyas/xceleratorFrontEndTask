import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeRoute from "./home"
import DetailRoute from "./detail"

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeRoute}/>
          <Route exact path="/posts/:id" component={DetailRoute}/>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
