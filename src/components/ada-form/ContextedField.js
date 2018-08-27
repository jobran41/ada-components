import React from 'react'
import PropTypes from "prop-types"

function ContextedField({ component: CustomComponent, ...props }) {
  return <CustomComponent {...props} />
}
ContextedField.propTypes = {
  component: PropTypes.any,
}
export default ContextedField
