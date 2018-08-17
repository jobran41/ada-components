import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton, Checkbox } from "react-md"
import { cls } from "reactutils"

import './to-do-list.scss'

export default class ToDoList extends Component {
  initClass = "to-do-list";
  renderToDoList = () => {
    const { items } = this.props
    return items.map((it, index) => {
      return (
        <div className={cls(this.initClass + "-list")}>
          <div className={cls(this.initClass + "-info")}>
            <div className={this.initClass + "-info-title"}>{it.title}</div>
            <div className={this.initClass + "-info-description"}>
              {it.description}
            </div>
          </div>
          <Checkbox
            id={cls(this.initClass + "-checkbox-" + index)}
            name={cls(this.initClass + "-checkbox-" + index)}
            onChange={v => this.handelOnchangeCheckbox(v, index)}
            checked={it.checked}
          />
        </div>
      )
    })
  };
  handelOnchangeCheckbox = (v, index) => {
    const { onChecklist } = this.props
    if (onChecklist) {
      onChecklist(v, index)
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
          {this.renderToDoList()}
        </div>
      </Paper>
    )
  }
}

ToDoList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  menuButton: PropTypes.array,
  items: PropTypes.array,
  onChecklist: PropTypes.func
}
