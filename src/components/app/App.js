import React, { Component } from "react"
import GeneralErrorBoundary from "components/general-error-boundary"
import { withRouter } from "react-router"

import Container from "../container"

//import logo from "./logo.svg";
import "./App.scss"

@withRouter
class App extends Component {
  render() {
    return (
      <GeneralErrorBoundary>
        <div className="App">
          <Container />
        </div>
      </GeneralErrorBoundary>
    )
  }
}

export default App
