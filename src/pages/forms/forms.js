import React, { Component } from 'react'

import { ForgetPassword, SignIn } from 'components/auth'

import './forms.scss'

export default class Forms extends Component {
  render() {
    return (
      <div className="forms">
        <ForgetPassword />
        <SignIn />
        Forms
      </div>
    )
  }
}
