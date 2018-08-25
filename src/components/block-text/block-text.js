import React, { Component } from 'react'
import PropTypes from "prop-types"

class BlockText extends Component {
  render() {
    const { titleLeft, titleTop, description, className } = this.props
    return (
      <div className={`blockText ${className ? className : ''}`} >
        <div className="blockText-left">{titleLeft}</div>
        <div className="blockText-right">
          <h5>{titleTop}</h5>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}



BlockText.propTypes = {
  className: PropTypes.string,
  titleLeft: PropTypes.string,
  titleTop: PropTypes.string,
  description: PropTypes.string
}
export default BlockText