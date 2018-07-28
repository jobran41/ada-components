import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton, LinearProgress } from "react-md"
import { cls } from "reactutils"

export default class Evaluation extends Component {
  renderEvaluation = () => {
    const { items } = this.props
    if (Array.isArray(items)) {
      return items.map((it, index) => (
        <div className="evaluation-items" key={index}>
          <div className="item-label">{it.label}</div>
          <div className="item-progress">
            <LinearProgress
              id={`item-LinearProgress-${index}`}
              value={it.progress}
            />
          </div>
        </div>
      ))
    }
  };
  render() {
    const { className, title, description, menuButton } = this.props
    return (
      <Paper zDepth={1} className={cls("evaluation", className)}>
        <div className="evaluation-header">
          <div className="evaluation-title">{title}</div>
          {description && (
            <div className="evaluation-description">{description}</div>
          )}
          {menuButton && (
            <MenuButton id={"evaluation_id"} icon menuItems={menuButton}>
              more_vert
            </MenuButton>
          )}
        </div>
        <div className="evaluation-content">{this.renderEvaluation()}</div>
      </Paper>
    )
  }
}

Evaluation.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  menuButton: PropTypes.array,
  items: PropTypes.array
}
