import React, { Component } from 'react'
import PropTypes from "prop-types"
import { FontIcon, Button } from "react-md"

import './ada-tag.scss'

class AdaTag extends Component {
  render() {
    const { iconLeft, iconRight, text, className, theme, read } = this.props
    return (
      <div className={`adaTag ${className ? className : ''} ${theme ? theme : ''}`}>
        <div className="adaTag-left">
          <div className="iconRight"><FontIcon iconClassName={`mdi ${iconLeft ? iconLeft : ''}`} /></div>
          <div className="adaTag-left-text">{text}</div>
        </div>
        <Button className="button-adaTag" icon iconClassName={`mdi ${iconRight ? iconRight : ''}`} />
      </div>
    )
  }
}
AdaTag.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
  read: PropTypes.bool
}
export default AdaTag