import React, { Component } from 'react'

import { ForgetPassword, SignIn } from 'components/auth'
import SimpleForm from './components/custom-form'

import './forms.scss'

export default class Forms extends Component {
  onSubmit = () => {
    console.log('jo')
  }
  render() {
    return (
      <div className="forms">
        <ForgetPassword />
        <SignIn />
        <SimpleForm onSubmit={this.onSubmit} />
        Forms
      </div>
    )
  }
}
