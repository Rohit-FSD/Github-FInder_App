import React, { Component } from "react";
import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/Users/Users";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar icon="fab fa-github" title="Github-Finder" />
        <Users />
      </div>
    );
  }
}

export default App;
