import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
    this.toggleEditStatus = this.toggleEditStatus.bind(this);
  }

  toggleEditStatus() {
    this.setState({ editMode: !this.state.editMode });
  }

  render() {
    return (
      <div className="App">
        <Main editMode={this.state.editMode} />
      </div>
    );
  }
}

export default App;
