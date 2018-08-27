import React, { Component } from 'react'
import PropTypes from "prop-types"

import './style.scss'

class AdaStepper extends Component {
  constructor(props) {
    super(props)
    this.state = { activeLocal: 0 }
  }
  updateField = (v) => {
    const { updateField } = this.props
    if (typeof updateField === 'function') {
      updateField(v)
    }
    this.setState({ activeLocal: v })
  }
  render() {
    const { stepperData, active, theme, widthBorder } = this.props
    const { activeLocal } = this.state
    const act = active ? active : activeLocal
    return (
      <div className={`adaStepper ${widthBorder ? "widthBorder" : ""} ${theme ? theme : ""}`}>
        {stepperData.map((elem, i) => {
          return <div onClick={() => this.updateField(i)} key={i} className={`${act === i ? "adaStepper-Item active" : 'adaStepper-Item'}`}>{elem}</div>
        })}
      </div>
    )
  }
}

AdaStepper.propTypes = {
  stepperData: PropTypes.array,
  active: PropTypes.number,
  widthBorder: PropTypes.bool,
  theme: PropTypes.string,
  updateField: PropTypes.func
}
export default AdaStepper