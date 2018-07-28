import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, Button } from "react-md"
import { cls } from "reactutils"

import "rc-calendar/assets/index.css"

export default class NewCalendar extends Component {
  render() {
    const { className, title, year, addNewCalendar } = this.props
    return (
      <Paper zDepth={1} className={cls("new-calendar", className)}>
        <div className="new-calendar-header">
          <div className="new-calendar-title">{title}</div>
          {year && <div className="new-calendar-year">{year}</div>}
        </div>
        <div className="new-calendar-content">
          <Button icon onClick={addNewCalendar} />
        </div>
        <div className="new-calendar-footer">Fill a New Agenda</div>
      </Paper>
    )
  }
}

NewCalendar.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  addNewCalendar: PropTypes.func
}
