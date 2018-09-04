import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Slider } from 'react-md'

import './style.scss'

export default class AdaSlider extends Component {
  render() {
    const { className } = this.props
    return (
        <Slider className={`${className ? className + ' adaSlider' :'adaSlider'}`} discrete={true}  {...this.props} />
    )
  }
}
AdaSlider.propTypes = {
  className: PropTypes.string,
}
