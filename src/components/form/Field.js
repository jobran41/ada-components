import React from 'react'
import PropTypes from "prop-types"

import { FormContext } from './hoc-form'
import Input from './Input'
import ContextedField from './ContextedField'

function Field({ name, props }) {
  return (
    <FormContext.Consumer>
      {({ state, setError, setValue, unsetError }) => (
        <ContextedField
          {...props}
          component={Input}
          input={{
            name,
            onChange: value => setValue(name, value),
            value: state.values[name] || undefined,
            ...(props.onBlur
              ? {
                onBlur: value => props.onBlur(value, state.values)
                  .then(() => unsetError(name))
                  .catch(error => setError(name, error))
              }
              : {}),
          }}
          meta={{ error: state.errors[name] || undefined }}
        />
      )}
    </FormContext.Consumer>
  )
}
Field.propTypes = {
  name: PropTypes.string,
  props: PropTypes.any,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
}
export default Field
