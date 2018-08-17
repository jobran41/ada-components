import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton, Button, Badge } from "react-md"
import { cls } from "reactutils"

import './notification-list.scss'

export default class NotificationList extends Component {
  initClass = "notification-list";
  renderNotificationList = () => {
    const { items } = this.props
    if (Array.isArray(items)) {
      return items.map((it, index) => (
        <div className={cls(this.initClass + "-item")} key={index}>
          <div className="item-notification">
            <Badge
              badgeContent={it.numberOfNotification}
              badgeId="notifications-1"
              className="notifications-badge"
            >
              <Button icon>notifications_none</Button>
            </Badge>
          </div>
          <div className="item-info">
            <div className="item-info-label">{it.label}</div>
            <div className="item-info-description">{it.description}</div>
          </div>
          <div className="item-percent">{it.createdDate}</div>
        </div>
      ))
    }
  };
  render() {
    const { className, title, description, menuButton } = this.props
    return (
      <Paper zDepth={1} className={cls(this.initClass, className)}>
        <div className={cls(this.initClass + "-header")}>
          <div className={cls(this.initClass + "-headerContainer")}>
            <div className={cls(this.initClass + "-title")}>{title}</div>
            {description && (
              <div className={cls(this.initClass + "-description")}>
                {description}
              </div>
            )}
          </div>
          {menuButton && (
            <MenuButton id={`${this.initClass}_id`} icon menuItems={menuButton}>
              more_vert
            </MenuButton>
          )}
        </div>
        <div className={cls(this.initClass + "-content")}>
          {this.renderNotificationList()}
        </div>
      </Paper>
    )
  }
}

NotificationList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  items: PropTypes.array,
  onChecklist: PropTypes.func,
  onAddProject: PropTypes.func,
  menuButton: PropTypes.array
}
