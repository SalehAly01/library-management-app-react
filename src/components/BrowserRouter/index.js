import createHistory from "history/createBrowserHistory";
import React, { Component } from "react";
import { Router } from "react-router-dom";

export const history = createHistory();

export default class BrowserRouter extends Component {
  render() {
    return <Router history={history} children={this.props.children} />;
  }
}
