import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton, Button } from "react-md"
import { cls } from "reactutils"

export default class NewChart extends Component {
  render() {
    const {
      className,
      title,
      description,
      menuButton,
      addNewChart
    } = this.props
    return (
      <Paper zDepth={1} className={cls("new-chart-circle", className)}>
        <div className="new-chart-header">
          <div className="new-chart-title">{title}</div>
          {description && (
            <div className="new-chart-description">{description}</div>
          )}
          {menuButton && (
            <MenuButton id={"new-chart_id"} icon menuItems={menuButton}>
              more_vert
            </MenuButton>
          )}
        </div>
        <div className="new-chart-content">
          <Button icon onClick={addNewChart} className="add-chart">add_circle_outline</Button>
        </div>
        <div className="new-chart-footer">Add a New Graph</div>
      </Paper>
    )
  }
}

NewChart.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  menuButton: PropTypes.array,
  addNewChart: PropTypes.func
}
