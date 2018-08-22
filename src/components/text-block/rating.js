import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton, LinearProgress, FontIcon } from "react-md"
import { cls } from "reactutils"

export default class Rating extends Component {
  initClass = "rating";
  renderRating = () => {
    const { items } = this.props
    return items.map((it, index) => {
      return (
        <div className={cls(this.initClass + "-list")}>
          <div className={cls(this.initClass + "-top")}>
            <div className={cls(this.initClass + "-top-star")}>
              <FontIcon iconClassName="fa fa-star-o" />
              {it.star}
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
              <FontIcon iconClassName="fa fa-star-o" />
            </div>
            <div className={cls(this.initClass + "-cumulates")}>
              {cumulates}
              <FontIcon iconClassName="fa fa-star-o" />
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
  onAddEvent: PropTypes.func,
  items: PropTypes.array,
  onChecklist: PropTypes.func,
  menuButton: PropTypes.array,
  currentUser: PropTypes.object,
  onAddComment: PropTypes.func,
  average: PropTypes.string,
  cumulates: PropTypes.string
}
