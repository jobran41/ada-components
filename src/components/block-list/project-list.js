import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, LinearProgress, Button } from "react-md"
import { cls } from "reactutils"

export default class ProjectList extends Component {
  initClass = "project-list";
  renderProjectList = () => {
    const { items } = this.props
    if (Array.isArray(items)) {
      return items.map((it, index) => (
        <div className={cls(this.initClass, "project-items")} key={index}>
          <div className="item-label">{it.label}</div>
          <div className="item-progress">
            <LinearProgress
              id={`item-LinearProgress-${index}`}
              value={it.progress}
            />
          </div>
          <div className="item-percent">{it.percent}</div>
        </div>
      ))
    }
  };
  render() {
    const { className, title, description, onAddProject } = this.props
    return (
      <Paper zDepth={1} className={cls(this.initClass, className)}>
        <div className={cls(this.initClass + "-header")}>
          <div className={cls(this.initClass + "-title")}>{title}</div>
          {description && (
            <div className={cls(this.initClass + "-description")}>
              {description}
            </div>
          )}
          {onAddProject && (
            <Button icon onClick={onAddProject}>
              plus
            </Button>
          )}
        </div>
        <div className={cls(this.initClass + "-content")}>
          {this.renderProjectList()}
        </div>
        <div className={cls(this.initClass + "-footer")}>
          <Button flat onClick={onAddProject}>
            Add new
          </Button>
        </div>
      </Paper>
    )
  }
}

ProjectList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  items: PropTypes.array,
  onChecklist: PropTypes.func,
  onAddProject: PropTypes.func
}
