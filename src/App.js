import React, { Component } from 'react';
import './App.css';
import AppRouter from "./routes/index"

// import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;
