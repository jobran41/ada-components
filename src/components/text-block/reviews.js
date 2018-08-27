import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton, Button, FontIcon } from "react-md"
import { cls } from "reactutils"

import './reviews.scss'

export default class Reviews extends Component {
  initClass = "reviews";

  renderClassName = (value) => {
    if (value >=1 && value<=20){
      return "size1"
    }else if (value >=21 && value<=45){
      return "size2"
    }else if (value >=46 && value<=55){
      return "size3"
    }else if (value >=56 && value<=75){
      return "size4"
    }else if (value >=76 && value<=95){
      return "size5"
    }else if (value >=96 && value<=99){
      return "size5"
    }else if (value===100){
      return "size6"
    }
  }

  render() {
    const { className, title, description, menuButton, negativePorcentage, positivePorcentage} = this.props
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
          <div className="positivePorcentage">
            <span>Positive</span>
            <div className={`porcentageContainer ${this.renderClassName(positivePorcentage)}`}>
              <div className="fill"><FontIcon>sentiment_very_satisfied</FontIcon></div>
            </div>
            <h3>{positivePorcentage} %</h3>
          </div>
          <div className="negativePorcentage">
            <span>Negative</span> 
            <div className={`porcentageContainer ${this.renderClassName(negativePorcentage)}`}>
              <div className="fill"><FontIcon>sentiment_very_dissatisfied</FontIcon></div>
            </div>
            <h3>{negativePorcentage} %</h3>
          </div>
        </div>
        <div className={cls(this.initClass + "-footer")}>
          <Button flat className="buttonSee">See all reviews</Button>
          <Button flat className="buttonAdd">Add review</Button>
        </div>
      </Paper>
    )
  }
}
Reviews.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  negativePorcentage: PropTypes.number,
  positivePorcentage:PropTypes.number,
  onAddEvent: PropTypes.func,
  items: PropTypes.array,
  onChecklist: PropTypes.func,
  menuButton: PropTypes.array,
  currentUser: PropTypes.object,
  onAddComment: PropTypes.func
}
