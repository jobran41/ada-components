import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Button } from 'react-md'

import './ada-notifications.scss'

class Notifications extends Component {
  render() {
    const { alertItem, iconName } = this.props
    return (
      <div class="ada-notification">
        <div class="md-badge-container md-inline-block notifications-badge">
          <Button className="toggleButton" icon onClick={() => this.closeDrawer(true)}>{iconName}</Button>
          <i class="md-icon material-icons md-text--inherit">notifications_none</i><span id="notifications-1" role="status" class="md-badge md-badge--circular md-text">{alertItem}</span>
        </div>
      </div >
    )
  }
}
Notifications.propTypes = {
  alertItem: PropTypes.string,
  iconName: PropTypes.string,
}
export default Notifications