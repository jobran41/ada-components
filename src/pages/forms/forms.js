import React, { Component } from 'react'

import { ForgetPassword, SignIn, SignUp, Confirmation } from 'components/auth'
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
          avatar={"add"}
          title="Profile Setting"
          onSubmit={this.onSubmit}
          notification={[
            "receive a weekly notification",
            "receive a daily notification",
          ]}
        />
        <SignUp />
        <Confirmation checked={false} checkedItem={() => null} />
      </div>
    )
  }
}
