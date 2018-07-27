import React from "react"
import PropTypes from "prop-types"
import { cls } from "reactutils"
import i18n from "i18n-js"

import l from "libs/langs/keys"

import "./style.css"

class Error extends React.PureComponent {
  render() {
    const { className, ...attrs } = this.props
    return (
      <div className={cls("error-msg-wrapper", className)} {...attrs}>
        <div className="error-msg">{i18n.t(l.errorMessage)}</div>
      </div>
    )
  }
}
Error.propTypes = {
  className: PropTypes.string,
}
export default Error