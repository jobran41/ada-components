import React, { Component } from 'react'
import { FontIcon } from "react-md"
import ContentHeader from 'components/content-header'

import { ForgetPassword, SignIn, SignUp, Confirmation } from 'components/auth'
import SimpleForm from './components/custom-form'
import Docs from "components/docs"
import {
  docsSignUp,
  docsSignIn,
  docsForgetPassword,
  docsConfirmation,
  docsSimpleForm,
} from "pages/docs-props"
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
            <Docs
                title={"SignUp"}
                docsProps={docsSignUp}
                dataCode={`
                <SignUp onSubmit={this.onSubmitSignUp} />`}
            >
              <SignUp onSubmit={this.onSubmitSignUp} />
            </Docs>
            <Docs
                title={"SignIn"}
                docsProps={docsSignIn}
                dataCode={`
                <SignIn onSubmit={this.onSubmitSignIn} />`}
            >
              <SignIn onSubmit={this.onSubmitSignIn} />
            </Docs>
          </div>
          <div className="formCell md-cell md-cell--4">
            <Docs
                title={"ForgetPassword"}
                docsProps={docsForgetPassword}
                dataCode={`<ForgetPassword />`}
            >
              <ForgetPassword />
            </Docs>
            <Docs
              title={"Confirmation"}
              docsProps={docsConfirmation}
              dataCode={`<Confirmation checked={true} checkedItem={() => null} />`}
            >
              <Confirmation checked={true} checkedItem={() => null} />
            </Docs>
          </div>

          <div className="formCell md-cell md-cell--4">
            <Docs
              title={"SimpleForm"}
              docsProps={docsSimpleForm}
              dataCode={`
                <SimpleForm
                  avatar={<FontIcon>add</FontIcon>}
                  title="Profile Setting"
                  onSubmit={this.onSubmit}
                  notification={[
                    "receive a weekly notification",
                    "receive a daily notification",
                  ]}
                />
              `}
            >
              <SimpleForm
                avatar={<FontIcon>add</FontIcon>}
                title="Profile Setting"
                onSubmit={this.onSubmit}
                notification={[
                  "receive a weekly notification",
                  "receive a daily notification",
                ]}
              />
            </Docs>
          </div>
        </div>
      </div>
    )
  }
}
