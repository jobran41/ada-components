import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton } from "react-md"
import { cls } from "reactutils"
import echarts from "echarts"

import "./PieCircle.scss"

export default class PieCircle extends Component {
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
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        x: "left",
        y: "bottom",
        data: items.map(it => it.name)
      },
      series: [
        {
          name: "pie-circle",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: items
        }
      ]
    }
  };
  render() {
    const { className, title, description, menuButton } = this.props
    return (
      <Paper zDepth={1} className={cls("pie-circle", className)}>
        <div className="pie-circle-header">
          <div className="pie-circle-title">{title}</div>
          {description && (
            <div className="pie-circle-description">{description}</div>
          )}
          {menuButton && (
            <MenuButton id={"pie-circle_id"} icon menuItems={menuButton}>
              more_vert
            </MenuButton>
          )}
        </div>
        <div
          className="pie-circle-content"
          ref={ref => (this.chartFrame = ref)}
        />
      </Paper>
    )
  }
}

PieCircle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  menuButton: PropTypes.array,
  items: PropTypes.array
}
