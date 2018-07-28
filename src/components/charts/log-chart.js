import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton } from "react-md"
import { cls } from "reactutils"
import echarts from "echarts"

import "./LogChart.scss"

export default class LogChart extends Component {
  componentDidMount = () => {
    this.initChart()
  };

  componentDidUpdate = () => {
    this.initChart()
  };

  initChart = () => {
    let myChart = echarts.init(this.chartFrame)
    myChart.setOption(this.renderOptions())
  };
  renderOptions = () => {
    const { items } = this.props
    return {
      xAxis: {
        data: items.map(it => it.name)
      },
      yAxis: {},
      series: [
        {
          type: "k",
          data: items.map(it => {
            let arr = []
            arr = [it.value.from, it.value.to, it.value.to, it.value.from]
            return arr
          })
        }
      ]
    }
  };
  render() {
    const { className, title, description, menuButton } = this.props
    return (
      <Paper zDepth={1} className={cls("log-chart", className)}>
        <div className="log-chart-header">
          <div className="log-chart-title">{title}</div>
          {description && (
            <div className="log-chart-description">{description}</div>
          )}
          {menuButton && (
            <MenuButton id={"log-chart_id"} icon menuItems={menuButton}>
              more_vert
            </MenuButton>
          )}
        </div>
        <div
          className="log-chart-content"
          ref={ref => (this.chartFrame = ref)}
        />
      </Paper>
    )
  }
}

LogChart.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  menuButton: PropTypes.array,
  items: PropTypes.array
}
