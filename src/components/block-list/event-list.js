import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, Button, Checkbox } from "react-md"
import { cls } from "reactutils"

import './event-list.scss'
export default class EventList extends Component {
  initClass = "event-list";
  renderEventList = () => {
    const { items } = this.props
    return items.map((it, index) => {
      return (
        <div className={cls(this.initClass + "-item")}>
          <div className="item-created-date">
            <div className="item-day">{it.createdDate.day}</div>
            <div className="item-month">{it.createdDate.month}</div>
          </div>
          <div className={cls(this.initClass + "-info")}>
            <div className={this.initClass + "-info-title"}>{it.label}</div>
            <div className={this.initClass + "-info-description"}>
              {it.description}
            </div>
          </div>
          <div className="item-time">{it.createdDate.time}</div>
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
    const { className, title, description, onAddEvent } = this.props
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
          {onAddEvent && (
            <Button icon onClick={onAddEvent}>
              add_circle_outline
            </Button>
          )}
        </div>
        <div className={cls(this.initClass + "-content")}>
          {this.renderEventList()}
        </div>
      </Paper>
    )
  }
}

EventList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onAddEvent: PropTypes.func,
  items: PropTypes.array,
  onChecklist: PropTypes.func
}
