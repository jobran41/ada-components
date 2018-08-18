import React, { Component } from 'react'

import AdaIcon from 'components/adaIcon'
import { ForgetPassword, SignIn } from 'components/auth'
import SimpleForm from './components/custom-form'

import './forms.scss'

export default class Forms extends Component {
  onSubmit = () => {

  }
  render() {
    return (
      <div className="forms">
        <ForgetPassword />
        <SignIn />
        <SimpleForm
          avatar={() => <AdaIcon icon="add" />}
          title="Profile Setting"
          onSubmit={this.onSubmit}
          notification={[
            "receive a weekly notification",
            "receive a daily notification",
          ]}
        />
      </div>
    )
  }
}
