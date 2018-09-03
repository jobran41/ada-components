import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Button, TextField } from "react-md"

import './ada-tag.scss'

class AdaTag extends Component {
  render() {
    const { iconRight, text, className, theme, read } = this.props
    return (
      <div className={`adaTag ${className ? className : ''} ${theme ? theme : ''}`}>
        <div className="adaTag-left">
          {read && <div className="adaTag-left-text">{text}</div>}
          {!read && <div className="adaTag-left-text">
            <TextField
              {...this.props}
              placeholder="new note"
              type="text"
              block
              className="adaMessage"
            /></div>}
        </div>
        <Button disabled={read} className="button-adaTag" icon iconClassName={`mdi ${iconRight ? iconRight : ''}`} />
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