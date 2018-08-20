import React, { Component } from 'react'
import { FontIcon } from "react-md"
import ContentHeader from 'components/content-header'

import { ForgetPassword, SignIn, SignUp, Confirmation } from 'components/auth'
import SimpleForm from './components/custom-form'

import './forms.scss'

export default class Forms extends Component {
  onSubmit = () => { }
  onSubmitSignIn = () => { }
  onSubmitSignUp = () => { }
  render() {
    return (
      <div className="forms">
        <ContentHeader title="ADA INTERFACES / BRAND BOOK" date="2018" subclass="gray-text" />
        <div className="formContainer md-grid">
          <div className="formCell md-cell md-cell--4">
            <SignUp onSubmit={this.onSubmitSignUp} />
            <SignIn onSubmit={this.onSubmitSignIn} />
          </div>
          <div className="formCell md-cell md-cell--4">
            <ForgetPassword />
            <Confirmation checked={true} checkedItem={() => null} />
          </div>

          <div className="formCell md-cell md-cell--4">
            <SimpleForm
              avatar={<FontIcon>add</FontIcon>}
              title="Profile Setting"
              onSubmit={this.onSubmit}
              notification={[
                "receive a weekly notification",
                "receive a daily notification",
              ]}
            />
          </div>
        </div>
      </div>
    )
  }
}
