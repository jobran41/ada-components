import React, { Component } from 'react'
import PropTypes from "prop-types"
import { FontIcon, Paper } from "react-md"

class AdaAlerts extends Component {
  render() {
    const { iconLeft, iconRight, text, className, color } = this.props
    return (
      < Paper
        zDepth={1} className={`adaAlerts ${className ? className : ''} ${color ? color : ''}`}>
        <FontIcon iconClassName={`mdi ${iconLeft ? iconLeft : ''}`} />
        <p>{text}</p>
        <FontIcon iconClassName={`mdi ${iconRight ? iconRight : ''}`} />
      </Paper>
    )
  }
}
AdaAlerts.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string
}
export default AdaAlerts