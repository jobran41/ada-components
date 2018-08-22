import React, { Component } from 'react'
import {
  FontIcon,
  TextField,
} from 'react-md'

export default class Elements extends Component {
  render() {
    return (
      <div className="Elements">
        <TextField
          id="phone-number-with-icon-right"
          label="Phone"
          type="tel"
          rightIcon={<FontIcon>phone</FontIcon>}
          size={10}
          fullWidth={false}
        />
      </div>
    )
  }
}
