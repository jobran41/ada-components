import React, { Component } from 'react'
import PropTypes from "prop-types"

import './menu-icon.scss'
class MenuIcon extends Component {
  render() {
    const { renderButton, color } = this.props
    return (
      <div className={`menuIcon ${color ? color : ''}`}>
        {renderButton && renderButton()}
      </div>
    )
  }
}

MenuIcon.propTypes = {
  renderButton: PropTypes.func,
  color: PropTypes.string
}
export default MenuIcon