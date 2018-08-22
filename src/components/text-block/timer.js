import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, Button } from "react-md"
import { cls } from "reactutils"

export default class Download extends Component {
  initClass = "timer";
  myTimer = null;
  constructor(props) {
    super(props)
    this.state = {
      second: 0,
      minute: 0,
      hour: 0,
      status: false,
      myTimer: null
    }
  }
  startPauseTimer = () => {
    const { status } = this.state
    if (!status) {
      this.setState({ status: true })
      this.myTimer = setInterval(() => {
        const { second, minute, hour } = this.state
        let currentSecond = second
        let currentMinute = minute
        let currentHour = hour
        currentSecond = currentSecond + 1
        if (currentSecond === 60) {
          currentSecond = 0
          currentMinute = currentMinute + 1
          if (currentMinute === 60) {
            currentMinute = 0
            currentHour = currentHour + 1
          }
        }
        this.setState({
          second: currentSecond,
          minute: currentMinute,
          hour: currentHour
        })
      }, 1000)
    } else {
      clearInterval(this.myTimer)
      this.setState({ status: false })
    }
  };
  render() {
    const { className } = this.props
    const { second, minute, hour } = this.state
    return (
      <Paper zDepth={1} className={cls(this.initClass, className)}>
        <div className={cls(this.initClass + "-header")}>
          <div className={cls(this.initClass + "-header-title")}>Timer</div>
          <div className={cls(this.initClass + "-header-icon")}>
            <Button icon>close</Button>
          </div>
        </div>

        <div className={cls(this.initClass + "-time")}>
          {hour < 10 ? "0" + hour : hour}:{minute < 10 ? "0" + minute : minute}:{second <
          10
            ? "0" + second
            : second}
        </div>
        <Button flat icon onClick={() => this.startPauseTimer()}>
          start
        </Button>
      </Paper>
    )
  }
}

Download.propTypes = {
  className: PropTypes.string,
  fileSize: PropTypes.string,
  typeFile: PropTypes.string,
  filePath: PropTypes.string
}
