import React, { Component } from "react"
import { FontIcon, Button, Paper } from "react-md"
import PropTypes from "prop-types"

import './Style.scss'

class Confirmation extends Component {
  checkedItem = () => {
    const { checkedItem } = this.props
    if (typeof checkedItem === 'function') {
      checkedItem()
    }
  }
  render() {
    const { checked } = this.props
    return (
      < Paper
        zDepth={1}
        className="authForm confirmation"
      >
        {checked ? <FontIcon iconClassName="mdi mdi-checkbox-marked-outline" /> : <FontIcon iconClassName="mdi mdi-checkbox-blank-outline" />}
        <h2><strong>Success</strong></h2>
        <h5>See Confirmation Link</h5>
        <div className="info">
          <Button flat className="form-button">Send Confirmation</Button>
        </div>
      </Paper >
    )
  }
}
Confirmation.propTypes = {
  checkedItem: PropTypes.func,
  checked: PropTypes.bool

}
export default Confirmation


