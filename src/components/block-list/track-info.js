import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, Button, LinearProgress, Avatar } from "react-md"
import { cls } from "reactutils"

export default class TrackInfo extends Component {
  initClass = "track-info";
  renderEventList = () => {
    const { items } = this.props
    return items.map((it, index) => {
      let avatars = []
      for (let i = 0; i < 4; i++) {
        if (it.avatars[i]) {
          avatars.push(
            <div className="avatar-item-child">
              <Avatar src={it.avatars[i]} role="presentation" />
            </div>
          )
        } else {
          avatars.push(<div className="avatar-item-child" />)
        }
      }
      return (
        <div className={cls(this.initClass + `item`)}>
          <div className={cls("item-color-" + it.color)} />
          <div className="title-item">{it.title}</div>
          <div className="created-item">{it.createdAt}</div>
          <div className="time-item">{it.time}</div>
          <div className="avatar-item">{avatars}</div>
          <div className={cls("avatar-status", it.color)}>{it.status}</div>
          <div className="avatar-click">
            <Button icon>plus</Button>
          </div>
        </div>
      )
    })
  };
  render() {
    const { className, imagePath, title, description, progress } = this.props
    return (
      <Paper zDepth={1} className={cls(this.initClass, className)}>
        <div className={cls(this.initClass + "-header")}>
          <div className={cls(this.initClass + "-header-image")}>
            <img alt="track" src={imagePath} />
          </div>
          <div className="progress-details">
            <div className="progress-title">{title}</div>
            <div className="progress-description">{description}</div>
            <LinearProgress id={`item-LinearProgress`} value={progress} />
          </div>
          <div className="avatar-list">
            <Avatar
              src={"http://via.placeholder.com/350x150"}
              role="presentation"
            />
            <Avatar
              src={"http://via.placeholder.com/350x150"}
              role="presentation"
            />
            <Avatar
              src={"http://via.placeholder.com/350x150"}
              role="presentation"
            />
          </div>
          <div className="track-button">
            <Button icon>arrow</Button>
          </div>
        </div>
        <div className={cls(this.initClass + "-content")}>
          {this.renderEventList()}
        </div>
      </Paper>
    )
  }
}
TrackInfo.propTypes = {
  className: PropTypes.string,
  imagePath: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.array,
  progress: PropTypes.number
}
