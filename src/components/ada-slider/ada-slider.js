import React, { Component } from 'react'
import { Slider } from 'react-md'

export default class AdaSlider extends Component {
  render() {
    return (
      <div className="adaSlider">
        <Slider {...this.props} />
      </div>
    )
  }
}
