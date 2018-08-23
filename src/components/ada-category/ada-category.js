import React, { Component } from 'react'
import { SelectField } from 'react-md'

export default class AdaCategory extends Component {
  render() {
    return (
      <div className="AdaCategory">
        <SelectField
          {...this.props}
        />
      </div>
    )
  }
}
