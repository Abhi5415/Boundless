import React, { Component } from "react";
import logo from "./logo.svg";
import CardDrawer from "./components/CardDrawer";
import Board from "./components/Board";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Board />
        </header>
      </div>
    );
  }
}

export default App;
