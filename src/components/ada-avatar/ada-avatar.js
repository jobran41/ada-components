import React, { Component } from 'react'
import PropTypes from "prop-types"

import ListAvatars from './list-avatars'

import './ada-avatar.scss'

class AdaAvatar extends Component {
  renderName = () => {
    const { renderName } = this.props
    if (typeof renderName === 'function') {
      renderName()
    }
  }
  render() {
    const { width, height, name, round, className } = this.props
    let inlineWidth = width ? width + "px" : "70px"
    let inlineHeight = height ? height + "px" : "70px"
    return (
      <div
        width={inlineWidth}
        height={inlineHeight}
        onClick={this.renderName}
        className={`${className ? className : ''} ${round ? 'roundAvatar' : ''} avatarItem`}>
        <img
          width={inlineWidth}
          height={inlineHeight}
          src={ListAvatars[name]}
          alt={name}
        />
      </div>
    )
  }
}
AdaAvatar.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  renderName: PropTypes.func,
  name: PropTypes.string.isRequired,
  round: PropTypes.bool,
  className: PropTypes.string
}
export default AdaAvatar 