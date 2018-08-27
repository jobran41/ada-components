import React, { Component } from 'react'
import PropTypes from "prop-types"

class AdaStepper extends Component {
  render() {
    const { stepperData, active } = this.props
    return (
      <div className="AdaStepper">
        {stepperData.map((elem, i) => {
          return <div key={i} className={`${active === i ? "active" : ''}`}>{elem}</div>
        })}
      </div>
    )
  }
}

AdaStepper.propTypes = {
  stepperData: PropTypes.array,
  active: PropTypes.string,
}
export default AdaStepper