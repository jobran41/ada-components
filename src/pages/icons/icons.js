import React, { Component } from 'react'
import { Snackbar } from 'react-md'

import AdaIcon from 'components/adaIcon'

export default class Icons extends Component {
  constructor(props) {
    super(props)
    this.state = { toasts: [], autohide: true }
  }

  renderName = (name) => {
    console.log(name)
    this.toastHello()
  }
  renderIcon = () => {
    const listIcons = ["addBlock", "add", "minimize", "bookmark"]
    const allIcons = listIcons.map((item, i) => {
      return <AdaIcon renderName={() => this.renderName(item)} key={i} icon={item} />
    })
    return allIcons
  }
  addToast = (text, action, autohide = true) => {
    this.setState((state) => {
      const toasts = state.toasts.slice()
      toasts.push({ text, action })
      return { toasts, autohide }
    })
  };
  dismissToast = () => {
    const [, ...toasts] = this.state.toasts
    this.setState({ toasts })
  };

  toastHello = () => {
    this.addToast('Hello, World!')
  };
  render() {
    const { autohide, toasts } = this.props
    return (
      <div className="icons" style={{ display: 'flex', justifyContent: 'center' }}>
        {this.renderIcon()}
        <Snackbar
          id="example-snackbar"
          toasts={toasts}
          autohide={autohide}
          onDismiss={this.dismissToast}
        />
      </div >
    )
  }
}