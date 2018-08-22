import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton, Button } from "react-md"
import { cls } from "reactutils"

export default class Reviews extends Component {
  initClass = "reviews";

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
        <div className={cls(this.initClass + "-content")}>smile one & two</div>
        <div className={cls(this.initClass + "-footer")}>
          <Button flat>See all reviews</Button>
          <Button flat>Add review</Button>
        </div>
      </Paper>
    )
  }
}
Reviews.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onAddEvent: PropTypes.func,
  items: PropTypes.array,
  onChecklist: PropTypes.func,
  menuButton: PropTypes.array,
  currentUser: PropTypes.object,
  onAddComment: PropTypes.func
}
