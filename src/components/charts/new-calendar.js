import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, Button } from "react-md"
import { cls } from "reactutils"

import "rc-calendar/assets/index.css"
import './calendar.scss'

export default class NewCalendar extends Component {
  render() {
    const { className, title, year, addNewCalendar } = this.props
    return (
      <Paper zDepth={1} className={cls("calendar", className)}>
        <div className="calendar-header">
          <div className="calendar-title">{title}</div>
          {year && <div className="calendar-year">{year}</div>}
        </div>
        <div className="new-calendar-content">
          <Button icon onClick={addNewCalendar} className="add-calendar">add_circle_outline</Button>
        </div>
        <div className="calendar-footer">Fill a New Agenda</div>
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
