import React, { Component } from "react"
import PropTypes from "prop-types"
import { TextField, Button, Paper, Snackbar } from "react-md"

import '../Style.scss'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
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
    const { email, password, lastName, firstName } = this.state
    const { onSubmit } = this.props
    if (email === '' || password === '' || lastName === '' || firstName === '') {
      this.addToast('sorry you entered an empty Field')
    } else if (this.validateEmail(email)) {
      this.addToast('Please enter a valid email')
    } else {
      onSubmit({ email, password, lastName, firstName })
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
  existAccount = () => {
    const { existAccount } = this.props
    if (typeof existAccount === 'function') {
      existAccount()
    }
  }
  render() {
    const { toasts, autohide } = this.state
    return (
      < Paper
        zDepth={1}
        className="authForm SignUp"
      >
        <h3>SignUp</h3>
        <TextField
          placeholder="First Name"
          id="firstName"
          block
          onChange={v => this.setState({ firstName: v })}
        />
        <TextField
          placeholder="Last Name"
          id="lastName"
          block
          onChange={v => this.setState({ lastName: v })}
        />
        <TextField
          placeholder="Email"
          id="email"
          block
          onChange={v => this.setState({ email: v })}
        />
        <TextField
          placeholder="Password"
          id="password"
          type="password"
          block
          onChange={v => this.setState({ password: v })}
        />
        <div className="info">
          <Button onClick={this.onSubmit} flat className="form-button">SignUp</Button>
          <p>already have an account <b onClick={this.existAccount}>SignIn</b></p>
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

SignUp.propTypes = {
  onSubmit: PropTypes.func,
  existAccount: PropTypes.func
}

export default SignUp