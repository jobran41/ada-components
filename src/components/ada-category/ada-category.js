import React, { Component } from 'react'
import { SelectField } from 'react-md'

import './style.scss'

export default class AdaCategory extends Component {
  render() {
    return (
        <SelectField
          {...this.props}
          className="adaCategory"
          position={SelectField.Positions.BELOW}
          fullWidth
        />
    )
  }
}
