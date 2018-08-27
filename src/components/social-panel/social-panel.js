import React, { Component } from 'react'
import PropTypes from "prop-types"

class SocialPanel extends Component {
  render() {
    const { renderButton, color, size } = this.props
    return (
      <div className={`socialPanel ${color ? color + ' ' + size : ''}`}>
        {renderButton && renderButton()}
      </div>
    )
  }
}

SocialPanel.propTypes = {
  renderButton: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.string
}
export default SocialPanel