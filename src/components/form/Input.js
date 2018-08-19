import React from 'react'
import PropTypes from "prop-types"

import './input.scss'

const style = {
  invalidField: {
    borderColor: 'crimson',
  },
}

function Input({
  input = {},
  label = '',
  meta = {},
  placeholder = '',
  type = 'text', }) {

  return (
    <div className="form-inputText">
      <label className="form-label">
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        {...input}
        onBlur={e => input.onBlur && input.onBlur(e.target.value)}
        onChange={e => input.onChange(e.target.value)}
        className="form-input"
        style={{
          ...(meta.error ? style.invalidField : {}),
        }}
      />
      {meta.error && <span className="form-error">
        {meta.error}
      </span>}
    </div>
  )
}
Input.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}
export default Input
