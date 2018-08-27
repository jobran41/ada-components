import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { addToast } from "modules/app/actions"
import ContentHeader from "components/content-header"
import AdaAvatar from 'components/ada-avatar'

import './style.scss'

@connect(null, {
  addToast
})
class AvatarPage extends Component {


  renderName = (name) => {
    const { addToast } = this.props
    addToast(name, 'ok')
  }
  renderIcon = () => {
    const listIcons = [
      "Man01", "Man02", "Man03", "Man04", "Man05",
      "Woman06", "Woman07", "Man08", "Man09",
      "Man010", "Woman011", "Woman012", "Woman013",
      "Man014", "Man015", "Man016", "Woman017",
      "Man018", "Man019", "Woman020", "Woman021",
      "Man022", "Man023", "Woman024", "Woman025", "Woman026",
      "Woman027", "Man028", "Woman029", "Woman030",
      "Man031", "Woman033", "Man034", "Man035", "Man036",
    ]
    const allIcons = listIcons.map((item, i) => {
      return <AdaAvatar renderName={() => this.renderName(item)} key={i} name={item} />
    })
    return allIcons
  }

  toastHello = () => {
    //addToast('test', "Hide")
  };
  render() {
    return (
      <div className="ada-avatar">
        <ContentHeader
          title="ADA INTERFACES / BRAND BOOK"
          date="2018"
          subclass="gray-text"
        />
        <div className="avatarTitle">
          <h3><strong>Users Avatar</strong></h3>
        </div>
        <div className="avatarContainer">{this.renderIcon()}</div>
      </div >
    )
  }
}

AvatarPage.propTypes = {
  addToast: PropTypes.func,
}
export default AvatarPage