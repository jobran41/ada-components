import React, { Component } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import PropTypes from "../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types"

class AdaStepper extends Component {
  render() {
    const { stepperData, active } = this.props
    return (
      <div className="AdaStepper">
        {stepperData.map((elem, i) => {
          return <div className={`${active === i ? "active" : ''}`}>{elem}</div>
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