import React, { Component } from 'react'
import PropTypes from "prop-types"

import './menu-icon.scss'
class MenuIcon extends Component {
  render() {
    const { renderButton, className } = this.props
    return (
      <div className={`menuIcon ${className ? className : ''}`}>
        {renderButton && renderButton()}
      </div>
    )
  }
}

MenuIcon.propTypes = {
  renderButton: PropTypes.func,
  className: PropTypes.string
}
export default MenuIcon