import React, { Component } from 'react'
import PropTypes from "prop-types"
import { FontIcon, Paper, Button } from "react-md"

import './ada-alerts.scss'

class AdaAlerts extends Component {
  render() {
    const { iconLeft, iconRight, text, className, color } = this.props
    return (
      < Paper
        zDepth={1} className={`adaAlerts ${className ? className : ''} ${color ? color : ''}`}>
        <div className="adaAlerts-left">
          <div className="adaAlerts-left-text"><FontIcon iconClassName={`mdi ${iconLeft ? iconLeft : ''}`} />{text}</div>
        </div>
        <Button className="button-adaAlerts" icon iconClassName={`mdi ${iconRight ? iconRight + ' button-adaAlerts' : ' button-adaAlerts'}`} />
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