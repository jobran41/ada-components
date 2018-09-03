import React, { Component } from "react"
import PropTypes from "prop-types"
import { TextField, Button, Paper, Snackbar } from "react-md"

import "./Style.scss"

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = { email: "", password: "", toasts: [], autohide: true }
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
    const { email, password } = this.state
    const { onSubmit } = this.props
    if (email === '' || password === '') {
      this.addToast('sorry you entered an empty email address or password')
    } else if (this.validateEmail(email)) {
      this.addToast('Please enter a valid email')
    } else {
      onSubmit({ email, password })
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
  redirectToForgetPassword = () => {
    const { redirectToForgetPassword } = this.props
    if (typeof redirectToForgetPassword === 'function') {
      redirectToForgetPassword()
    }
  }
  redirectToSignUp = () => {
    const { redirectToSignUp } = this.props
    if (typeof redirectToSignUp === 'function') {
      redirectToSignUp()
    }
  }
  render() {
    const { email, password, toasts, autohide } = this.state
    return (
      < Paper
        zDepth={1}
        className="authForm SignIn"
      >
        <h3>Login</h3>
        <TextField
          placeholder="Email"
          id="email-signIn"
          type="email"
          block
          onChange={v => this.setState({ email: v })}
          value={email}
        />
        <TextField
          placeholder="password"
          type="password"
          id="password-signIn"
          block
          onChange={v => this.setState({ password: v })}
          value={password}
        />
        <div className="info">
          <Button flat className="form-button" onClick={this.onSubmit}>Login</Button>
          <p>forgot you <b><span className="FormLink" onClick={this.redirectToForgetPassword}>password ?</span></b></p>
          <p>dont have an Account ? <b onClick={this.redirectToSignUp}>SignUp</b></p>
        </div>
        <Snackbar
          id="example-snackbar"
          toasts={toasts}
          autohide={autohide}
          onDismiss={this.dismissToast}
        />
      </Paper>
    )
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func,
  redirectToForgetPassword: PropTypes.func,
  redirectToSignUp: PropTypes.func
}

export default SignIn
