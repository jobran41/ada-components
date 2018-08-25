import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { addToast } from "modules/app/actions"
import AdaIcon from 'components/adaIcon'
import ContentHeader from "components/content-header"

import './style.scss'

@connect(null, {
  addToast
})
class Icons extends Component {


  renderName = (name) => {
    const { addToast } = this.props
    addToast(name, 'ok')
  }
  renderIcon = () => {
    const listIcons =
      [
        "addBlock", "add", "minimize", "bookmark", "favorite", "close", 'brokenLink', 'browser', 'browser1', 'browser2', 'bug', 'coding', 'computer', 'copy', "cursor", 'cut', 'denied', 'display', 'download', 'fullScreen', 'help', 'history', 'hold', 'house', 'unRecognize', 'image', 'link', 'list', 'list1', 'login', 'logout', 'paste', 'save', 'setting1', 'share1', 'scroll', 'powerOf', 'mail', 'menu', 'previous', 'scroll1', 'shield1', 'textField', 'scroll2', 'print', 'microphone', 'pushPin', 'scroll3', 'upload', 'waiting', 'scroll4', 'puzzle', 'more', 'next', 'next1', 'originalSize', 'padLock', 'refresh', 'register', 'reload', 'restore', 'setting', 'search1', 'search', 'scroll5', 'worldWideWeb', 'wrench', 'zoomIn', 'zoomOut'
      ]
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
      <div className="iconsPage">
        <ContentHeader
          title="ADA INTERFACES / BRAND BOOK"
          date="2018"
          subclass="gray-text"
        />
        <div className="iconsHeader">
          <h3><strong>ICONS SET</strong></h3>
          <h3>Basic icons used across the dashboard</h3>
        </div>
        <div className="iconsContainer">{this.renderIcon()}</div>
      </div >
    )
  }
}

Icons.propTypes = {
  addToast: PropTypes.func,
}
export default Icons