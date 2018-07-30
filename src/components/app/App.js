import React, { Component } from "react"
import PropTypes from "prop-types"
import GeneralErrorBoundary from "components/general-error-boundary"
import { withRouter } from "react-router"
import { Snackbar } from "react-md"
import { connect } from "react-redux"

import * as act from "modules/app/actions"
import Container from "../container"

//import logo from "./logo.svg";
import "./App.scss"

@withRouter
@connect(
  ({ app }) => ({
    toasts: app.toasts,
  }),
  {
    dismissToast: act.dismissToast,
  },
)
class App extends Component {
  render() {
    const { toasts, dismissToast } = this.props
    return (
      <GeneralErrorBoundary>
        <div className="App-container">
          <Container />
        </div>
        <Snackbar autohide toasts={toasts} onDismiss={dismissToast} />
      </GeneralErrorBoundary>
    )
  }
}

App.propTypes = {
  toasts: PropTypes.func,
  dismissToast: PropTypes.func,
}

export default App
