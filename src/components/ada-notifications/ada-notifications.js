import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Button } from 'react-md'

import './ada-notifications.scss'

class Notifications extends Component {
  handleNotification = () => {
    const { handleNotification } = this.props
    if (typeof handleNotification === "function") {
      handleNotification()
    }
  }
  render() {
    const { alertItem, iconName } = this.props
    return (
      <div className="ada-notification">
        <Button className="ada-notification-button" icon onClick={this.handleNotification}>{iconName}</Button>
        <span id="notifications-1" role="status" className="md-badge md-badge--circular md-text">{alertItem}</span>
      </div >
    )
  }
}
Notifications.propTypes = {
  alertItem: PropTypes.string,
  iconName: PropTypes.string,
  handleNotification: PropTypes.func
}
export default Notifications