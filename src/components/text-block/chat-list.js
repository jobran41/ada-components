import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton, Avatar, Button } from "react-md"
import { cls } from "reactutils"

export default class ChatList extends Component {
  initClass = "chat-list";

  renderChatList = () => {
    const { items } = this.props
    return items.map((it, index) => {
      return (
        <div className={cls(this.initClass + "-list")} key={index}>
          <div className={cls(this.initClass + "-avatar")}>
            <Avatar src={it.path} role="presentation" />
          </div>
          <div className={cls(this.initClass + "-list-name")}>{it.name}</div>
          <div className={cls(this.initClass + "-list-status", it.status)}>
            {it.status}
          </div>
        </div>
      )
    })
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
          {this.renderChatList()}
        </div>
        <div className={cls(this.initClass + "-footer")}>
          <Button flat>Refresh</Button>
        </div>
      </Paper>
    )
  }
}
ChatList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  items: PropTypes.array,
  menuButton: PropTypes.array
}
