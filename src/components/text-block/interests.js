import React, { Component } from "react"
import PropTypes from "prop-types"
import { Button, Paper, MenuButton } from "react-md"
import { cls } from "reactutils"

import "./interests.scss"

export default class Interests extends Component {
  initClass = "interests";
  renderInterests = () => {
    const { items } = this.props
    return items.map((it, index) => <Interest {...it} key={index} className={`interests-button ${it.className ? it.className : ''}`} />)
  };
  render() {
    const { className, menuButton, title, description } = this.props
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
          {this.renderInterests()}
        </div>
        <div className={cls(this.initClass + "-footer")}>
          <Button flat className="buttonNext">Next</Button>
          <Button flat className="buttonPrevious">Previous</Button>
        </div>
      </Paper>
    )
  }
}
Interests.propTypes = {
  className: PropTypes.string,
  menuButton: PropTypes.array,
  items: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string
}

class Interest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }
  onClickInterest = () => {
    const { active } = this.state
    const { onClickInterest, label } = this.props
    this.setState({ active: !active })
    if(typeof onClickInterest === 'function') {
      onClickInterest(label)
    }
    
  };
  render() {
    const { label, className, classNameActive } = this.props
    const { active } = this.state
    return (
      <Button
        flat
        className={cls(className, active ? classNameActive : "")}
        onClick={this.onClickInterest}
      >
        {label}
      </Button>
    )
  }
}

Interest.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  classNameActive: PropTypes.string,
  onClickInterest: PropTypes.func
}
