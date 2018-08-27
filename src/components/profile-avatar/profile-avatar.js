import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Avatar } from "react-md"

import './profile-avatar.scss'

class ProfileAvatar extends Component {
  render() {
    const { active, path } = this.props
    return (
      <div className={`profileAvatar ${active ? 'active' : ''}`}>
        <Avatar src={path} role="presentation" />
      </div>
    )
  }
}
ProfileAvatar.propTypes = {
  active: PropTypes.bool,
  path: PropTypes.string,

}
export default ProfileAvatar