import React, { Component } from "react"
import { Checkbox, Button, Paper } from "react-md"
import PropTypes from "prop-types"

import '../Style.scss'

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
        className="authForm forgetpassword"
      >
        <Checkbox
          id="checkbox-read"
          name="checkbox-confirmation"
          aria-label=""
          checked={checked}
          onChange={this.checkedItem}
        />
        <h3>Success</h3>
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


