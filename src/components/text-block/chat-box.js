import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton, Avatar, Button } from "react-md"
import { cls } from "reactutils"

export default class ChatBox extends Component {
  initClass = "chat-box";

  renderChatBox = () => {
    const { items } = this.props
    return items.chats.map((it, index) => {
      return (
        <div className={cls(this.initClass + "-list")} key={index}>
          <div className={cls(this.initClass + "-avatar")}>
            <Avatar src={it.path} role="presentation" />
          </div>
          <div className={cls(this.initClass + "-message")}>{it.message}</div>
          <div className={cls(this.initClass + "-list-status", it.status)}>
            {it.status}
          </div>
        </div>
      )
    })
  };

  renderAvatars = () => {
    const { items } = this.props
    let avatars = []
    let countMember = 0
    for (let it of items.members) {
      if (countMember < 2) {
        avatars.push(<Avatar src={it.path} role="presentation" />)
      }
      countMember++
    }
    return (
      <div className="">
        {avatars}{" "}
        {countMember - 2 > 0 && (
          <Avatar src={it.user.path} role="presentation">
            {countMember - 2} +{" "}
          </Avatar>
        )}
      </div>
    )
  };
  renderNames = () => {
    const { items } = this.props
    let names = []
    let countMember = 0
    for (let it of items.members) {
      if (countMember < 2) {
        names.push(it.name)
      }
      countMember++
    }
    return (
      <div className="">
        {names} {countMember - 2 > 0 && "..."}
      </div>
    )
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
            <div className={cls(this.initClass + "-avatars")}>
              {this.renderAvatars()}
            </div>
          </div>
          <div>{this.renderNames()}</div>
          {menuButton && (
            <MenuButton id={`${this.initClass}_id`} icon menuItems={menuButton}>
              more_vert
            </MenuButton>
          )}
        </div>
        <div className={cls(this.initClass + "-content")}>
          {this.renderChatBox()}
        </div>
        <div className={cls(this.initClass + "-footer")}>
          <Button flat>Refresh</Button>
        </div>
      </Paper>
    )
  }
}
ChatBox.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  items: PropTypes.object,
  menuButton: PropTypes.array
}
