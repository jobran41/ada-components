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
    const { width, height, name } = this.props
    let inlineWidth = width ? width : "70px"
    let inlineHeight = height ? height : "70px"
    return (
      <div
        onClick={this.renderName}
        className="avatarItem">
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
}
export default AdaAvatar 