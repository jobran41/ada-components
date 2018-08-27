import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton, Button, Avatar } from "react-md"
import { cls } from "reactutils"

export default class Discover extends Component {
  initClass = "discover";
  renderDiscover = () => {
    const { items } = this.props
    return items.map((it, index) => {
      return (
        <div
          className={cls(
            this.initClass + "-list",
            it.notification ? "notification-active" : ""
          )}
          key={index}
        >
          <div className="avatarContainer">
            <Avatar src={it.path} role="presentation" />
          </div>
          <div className={this.initClass + "-name"}>{it.name}</div>
          <Button flat>Follow</Button>
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
          {this.renderDiscover()}
        </div>
      </Paper>
    )
  }
}

Discover.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  menuButton: PropTypes.array,
  items: PropTypes.array,
  onChecklist: PropTypes.func
}
