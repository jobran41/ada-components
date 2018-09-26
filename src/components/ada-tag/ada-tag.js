import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Button, TextField } from "react-md"

import './ada-tag.scss'

class AdaTag extends Component {
  render() {
    const { iconRight, title, className, theme, readOnly } = this.props
    return (
      <div className={`adaTag ${className ? className : ''} ${readOnly ? "readOnly" : ''} ${theme ? theme : ''}`}>
        <div className="adaTag-left">
          {readOnly && <div className="adaTag-left-text">{title}</div>}
          {!readOnly && <div className="adaTag-left-text">
            <TextField
              {...this.props}
              placeholder={title}
              type="text"
              block
              className="adaMessage"
            /></div>}
        </div>
        <Button disabled={readOnly} className="button-adaTag" icon iconClassName={`mdi ${iconRight ? iconRight : ''}`} />
      </div>
    )
  }
}
AdaTag.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
  readOnly: PropTypes.bool
}
export default AdaTag