import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, Avatar, Button, MenuButton, LinearProgress } from "react-md"
import { cls } from "reactutils"

import './personal-info.scss'

export default class PersonalInfo extends Component {
  initClass = "personal-info";

  render() {
    const { className, menuButton, userObject } = this.props
    return (
      <Paper zDepth={1} className={cls(this.initClass, className)}>
        <div className={cls(this.initClass + "-header")}>
          {menuButton && (
            <MenuButton id={`${this.initClass}_id`} icon menuItems={menuButton}>
              more_horiz
            </MenuButton>
          )}
        </div>
        <div className={cls(this.initClass + "-content")}>
          <Avatar src={userObject.path} role="presentation" />
          <div className={cls(this.initClass + "-name")}>{userObject.name}</div>
          <Button flat className="requestButton">Add as a friend</Button>
        </div>
        <div className={cls(this.initClass + "-footer")}>
          <div className={cls(this.initClass + "-points")}>
            <div className={cls(this.initClass + "-top-value")}>
              <div>{userObject.points} Points</div>
              <div>{userObject.maxPoints}</div>
            </div>
            <LinearProgress
              id={`item-LinearProgress-point`}
              value={userObject.points/10}
            />
          </div>
          <div className="buttonsWrapper">
            <Button flat className="buttonAdd">Add</Button>
            <Button flat className="buttonComment">Message</Button>
          </div>
        </div>
      </Paper>
    )
  }
}

PersonalInfo.propTypes = {
  className: PropTypes.string,
  menuButton: PropTypes.array,
  userObject: PropTypes.object
}
