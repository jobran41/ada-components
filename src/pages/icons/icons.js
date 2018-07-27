import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { addToast } from "modules/app/actions"
import AdaIcon from 'components/adaIcon'

@connect(null, {
  addToast
})
class Icons extends Component {


  renderName = (name) => {
    const { addToast } = this.props
    addToast(name, 'ok')
  }
  renderIcon = () => {
    const listIcons = ["addBlock", "add", "minimize", "bookmark", "favorite"]
    const allIcons = listIcons.map((item, i) => {
      return <AdaIcon renderName={() => this.renderName(item)} key={i} icon={item} />
    })
    return allIcons
  }

  toastHello = () => {
    //addToast('test', "Hide")
  };
  render() {
    return (
      <div className="icons" style={{ display: 'flex', justifyContent: 'center' }}>
        {this.renderIcon()}
      </div >
    )
  }
}

Icons.propTypes = {
  addToast: PropTypes.func,
}
export default Icons