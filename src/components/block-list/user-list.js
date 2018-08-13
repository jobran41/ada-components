import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton, Button, Avatar } from "react-md"
import { cls } from "reactutils"

export default class UserList extends Component {
  initClass = "user-list";
  renderUserList = () => {
    const { items } = this.props
    return items.map((it, index) => {
      return (
        <div className={cls(this.initClass + "-list")}>
          <Avatar src={it.path} role="presentation" />
          <div className={this.initClass + "-name"}>{it.name}</div>
          <div className={this.initClass + "-job"}>{it.job}</div>
          <Button
            icon
            className={cls(it.notification ? "notification-active" : "")}
          >
            notifications
          </Button>
        </div>
      )
    })
  };
  handelOnchangeCheckbox = (v, index) => {
    const { onChecklist } = this.props
    if (onChecklist) {
      onChecklist(v, index)
    }
  };
  render() {
    const { className, title, description, menuButton } = this.props
    return (
      <Paper zDepth={1} className={cls(this.initClass, className)}>
        <div className={cls(this.initClass + "-header")}>
          <div className={cls(this.initClass + "-title")}>{title}</div>
          {description && (
            <div className={cls(this.initClass + "-description")}>
              {description}
            </div>
          )}
          {menuButton && (
            <MenuButton id={`${this.initClass}_id`} icon menuItems={menuButton}>
              more_vert
            </MenuButton>
          )}
        </div>
        <div className={cls(this.initClass + "-content")}>
          {this.renderUserList()}
        </div>
        <div className={cls(this.initClass + "-footer")}>
          <Button flat>Add new</Button>
        </div>
      </Paper>
    )
  }
}

UserList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  menuButton: PropTypes.array,
  items: PropTypes.array,
  onChecklist: PropTypes.func
}
