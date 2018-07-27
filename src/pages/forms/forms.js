import React, { Component } from 'react'

import Auth from 'components/auth'

import './forms.scss'

export default class Forms extends Component {
  render() {
    return (
      <div className="forms">
        <Auth.ForgetPassword />
        <Auth.SignIn />
        Forms
      </div>
    )
  }
}
