import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton, LinearProgress, FontIcon } from "react-md"
import { cls } from "reactutils"

import "./rating.scss"

export default class Rating extends Component {
  initClass = "rating";
  renderRating = () => {
    const { items } = this.props
    return items.map((it, index) => {
      return (
        <div className={cls(this.initClass + "-list")} key={index}>
          <div className={cls(this.initClass + "-top")}>
            <div className={cls(this.initClass + "-top-star")}>
              {it.star}
              <FontIcon>star</FontIcon>
            </div>
            <div className={cls(this.initClass + "-top-number")}>
              {it.number}
            </div>
          </div>
          <LinearProgress
            id={`item-LinearProgress-${index}`}
            value={it.value}
          />
        </div>
      )
    })
  };

  render() {
    const {
      className,
      title,
      description,
      menuButton,
      average,
      cumulates
    } = this.props
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
          <div className={cls(this.initClass + "-top")}>
            <div className={cls(this.initClass + "-average")}>
              {average}
              <FontIcon>star</FontIcon>
            </div>
            <div className={cls(this.initClass + "-cumulates")}>
              {cumulates}
              <FontIcon>arrow_drop_up</FontIcon>
            </div>
          </div>
          {this.renderRating()}
        </div>
      </Paper>
    )
  }
}
Rating.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  items: PropTypes.array,
  menuButton: PropTypes.array,
  average: PropTypes.string,
  cumulates: PropTypes.string
}
