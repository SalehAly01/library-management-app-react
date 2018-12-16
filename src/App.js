import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";

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
        <Header
          editMode={this.state.editMode}
          toggleEditStatus={this.toggleEditStatus}
        />
        <Main editMode={this.state.editMode} />
      </div>
    );
  }
}

export default App;
