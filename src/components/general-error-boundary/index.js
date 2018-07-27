import React from "react"
import PropTypes from "prop-types"

import Error from "./Error"

class GenerallErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return <Error />
    } else {
      return children
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }
}
GenerallErrorBoundary.propTypes = {
  children: PropTypes.node,
}
export default GenerallErrorBoundary