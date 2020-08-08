import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/Users/Users";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar icon="fab fa-github" title="Github-Finder" />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

Navbar.defaultProps = {
  title: "Github-Finder",
  icon: "fab fa-github",
};

Navbar.PropTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default App;
