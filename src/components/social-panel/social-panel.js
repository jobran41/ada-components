import React, { Component } from 'react'
import PropTypes from "prop-types"

import './social-panel.scss'

class SocialPanel extends Component {
  render() {
    const { renderButton, color } = this.props
    return (
      <div className={`socialPanel ${color ? color : ''}`}>
        {renderButton && renderButton()}
      </div>
    )
  }
}

SocialPanel.propTypes = {
  renderButton: PropTypes.func,
  color: PropTypes.string
}
export default SocialPanel