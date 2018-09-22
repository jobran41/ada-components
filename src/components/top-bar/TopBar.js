import React, { Component } from "react"
import { Button, Avatar } from "react-md"
import PropTypes from "prop-types"
import { cls } from "reactutils"

import { withRouter } from "react-router-dom"
import Navigation from "./Navigation"

import "./styles.scss"

@withRouter
class TopBar extends Component {
  onToggleClick = (v) => {
    const { onToggleClick } = this.props
    onToggleClick(!v)
  };
  render() {
    const { sideBarIsTrue, userName, menu, authUser, logoName, ProfileBar, underline, color, className } = this.props
    const letter = userName ? userName.charAt(0).toUpperCase() : ''
    return (
      <div className={`${color ? "topBar " + color + " " + className : "topBar " + className
        }`}>
        <div className="topBar-logo">
          <span>{logoName}</span>
        </div>
        <Navigation underline={underline} menu={menu} authUser={authUser} />
        {
          authUser && ProfileBar && <div className="topBar-info">
            <Avatar className="title-bar-item-right-space-half" suffix="light-blue">
              {letter}
            </Avatar>
            <div className="nameStudent">{userName}</div>
            <Button
              icon
              className="apptitlebar-collapse-btn"
              iconClassName={cls(
                "topBar-collapseicon",
                "mdi",
                sideBarIsTrue ? "mdi-close" : "mdi-menu"
              )}
              onClick={() => this.onToggleClick(sideBarIsTrue)}
            />
          </div>
        }
      </div >
    )
  }
}
TopBar.propTypes = {
  onToggleClick: PropTypes.func,
  sideBarIsTrue: PropTypes.bool,
  userName: PropTypes.string,
  menu: PropTypes.array,
  authUser: PropTypes.bool,
  logoName: PropTypes.string,
  className: PropTypes.string,
  ProfileBar: PropTypes.bool,
  underline: PropTypes.bool,
  color: PropTypes.string
}
export default TopBar 