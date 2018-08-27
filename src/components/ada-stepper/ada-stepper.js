import React, { Component } from 'react'
import PropTypes from "prop-types"

import './style.scss'

class AdaStepper extends Component {
  render() {
    const { stepperData, active, theme, widthBorder } = this.props
    return (
      <div className={`adaStepper ${widthBorder ? "widthBorder" : ""} ${theme ? theme : ""}`}>
        {stepperData.map((elem, i) => {
          return <div key={i} className={`${active === i ? "adaStepper-Item active" : 'adaStepper-Item'}`}>{elem}</div>
        })}
      </div>
    )
  }
}

AdaStepper.propTypes = {
  stepperData: PropTypes.array,
  active: PropTypes.number,
  widthBorder: PropTypes.bool,
  theme: PropTypes.string
}
export default AdaStepper