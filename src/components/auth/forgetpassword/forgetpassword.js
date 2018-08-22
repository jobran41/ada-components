import React, { Component } from "react"
import { TextField, Button, Paper, Snackbar } from "react-md"
import PropTypes from "prop-types"

import '../Style.scss'

class ForgetPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      toasts: [],
      autohide: true,
    }
  }
  validateEmail = (value) => {
    if (value.trim() !== '') {
      let filter = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      if (!filter.test(value)) {
        return true
      } else {
        return false
      }
    }
  }

  onSubmit = () => {
    const { email, } = this.state
    const { onSubmit } = this.props
    if (email === '') {
      this.addToast('sorry you entered an empty Field')
    } else if (this.validateEmail(email)) {
      this.addToast('Please enter a valid email')
    } else {
      onSubmit({ email })
    }
  };
  addToast = (text, action, autohide = true) => {
    this.setState(state => {
      const toasts = state.toasts.slice()
      toasts.push({ text, action })
      return { toasts, autohide }
    })
  };
  dismissToast = () => {
    const [, ...toasts] = this.state.toasts
    this.setState({ toasts })
  };
  render() {
    const { toasts, autohide } = this.state
    return (
      < Paper
        zDepth={1}
        className="authForm forgetpassword"
      >
        <h3>Forget password ?</h3>
        <TextField
          placeholder="Email"
          id="email-forget"
          block
          onChange={v => this.setState({ email: v })}
        />
        <div className="info">
          <Button onSubmit={this.onSubmit} flat className="form-button">Submit</Button>
        </div>
        <Snackbar
          id="example-snackbar"
          toasts={toasts}
          autohide={autohide}
          onDismiss={this.dismissToast}
        />
      </Paper >
    )
  }
}

ForgetPassword.propTypes = {
  onSubmit: PropTypes.func,
}
export default ForgetPassword


