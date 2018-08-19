import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { addToast } from "modules/app/actions"
import AdaAvatar from 'components/ada-avatar'

@connect(null, {
  addToast
})
class Avatar extends Component {


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
      <div className="ada-avatar" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {this.renderIcon()}
      </div >
    )
  }
}

Avatar.propTypes = {
  addToast: PropTypes.func,
}
export default Avatar