import React, { Component } from 'react'
import PropTypes from "prop-types"
import { FontIcon, Button } from "react-md"

import './ada-alerts.scss'

class AdaAlerts extends Component {
  render() {
    const { iconLeft, iconRight, text, className, theme } = this.props
    return (
      <div className={`adaAlerts ${className ? className : ''} ${theme ? theme : ''}`}>
        <div className="adaAlerts-left">
          <div className="iconRight"><FontIcon iconClassName={`mdi ${iconLeft ? iconLeft : ''}`} /></div>
          <div className="adaAlerts-left-text">{text}</div>
        </div>
        <Button className="button-adaAlerts" icon iconClassName={`mdi ${iconRight ? iconRight : ''}`} />
      </div>
    )
  }
}
AdaAlerts.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string
}
export default AdaAlerts