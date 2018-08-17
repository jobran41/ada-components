import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton } from "react-md"
import { cls } from "reactutils"

import './track-list.scss'

export default class TrackList extends Component {
  initClass = "track-list";
  renderTrackList = () => {
    const { items, onClickItem } = this.props
    if (Array.isArray(items)) {
      return items.map((it, index) => (
        <div
          className={cls(this.initClass + "-item")}
          key={index}
          onClick={onClickItem}
        >
          <div className="item-label">{it.label}</div>
          <div className="item-value">{it.value}</div>
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
          {this.renderTrackList()}
        </div>
      </Paper>
    )
  }
}

TrackList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  items: PropTypes.array,
  onClickItem: PropTypes.func,
  menuButton: PropTypes.array
}
