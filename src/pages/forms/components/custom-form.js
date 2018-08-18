import React from 'react'
import PropTypes from "prop-types"
import { Paper, Avatar } from "react-md"

import AdaIcon from 'components/adaIcon'
import { Field, HocForm } from 'components/form'

import './custom-form.scss'

const validateName = (value = '') => {
  if (value.trim() === '') {
    return Promise.reject('Please enter an username')
  }
}


const validateEmail = (value = '') => {
  if (value.trim() === '') {
    return Promise.reject('Please enter an username')
  }

  if (value.trim() !== '') {
    let filter = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    if (!filter.test(value)) {
      return Promise.reject('Please enter an username wrong')
    } else {
      return Promise.resolve()
    }
  }
}

function validateNumber(value = '') {
  if (value.trim() === '') {
    return Promise.reject('Please enter a mobile number')
  } else if (value.trim().length < 6) {
    return Promise.reject('mobile number must contain 6 characters or more')
  } else {
    return Promise.resolve()
  }
}

export function Form({
  onSubmit,
  title,
  avatar,
  notification
}) {
  return (
    < Paper
      zDepth={1}
      className="authForm forgetpassword"
    >
      <div className="header-form">
        <h3>{title}</h3>
        <Avatar icon={<AdaIcon icon={avatar} />} />
      </div>

      <form onSubmit={onSubmit} noValidate className="form">
        <Field
          name="name"
          props={{
            onBlur: value => validateName(value),
            placeholder: 'Name *',
            type: 'string',
          }}
        />
        <Field
          name="userName"
          props={{
            onBlur: value => validateName(value),
            placeholder: 'User Name',
            type: 'string',
          }}
        />
        <Field
          name="email"
          props={{
            onBlur: value => validateEmail(value),
            placeholder: 'E-mail *',
            type: 'string',
          }}
        />
        <Field
          name="mobile"
          props={{
            onBlur: value => validateNumber(value),
            placeholder: 'Mobile *',
            type: 'number',
          }}
        />
        <button className="submitButton" type="submit">
          Sign up
      </button>
      </form>
      <ul>{notification.map((item, j) => {
        return <li key={j}>{item}</li>
      })}</ul>
    </Paper >
  )
}

export default HocForm({
  validate(values, props) {
    const errorCatcher = (key, callback, ...args) => (
      callback(values[key], args)
        .catch(error => ({ [key]: error }))
    )

    return Promise.all([
      errorCatcher('name', validateName),
      errorCatcher('email', validateEmail),
      errorCatcher('mobile', validateNumber)
    ]).then((errors) => {
      const results = errors.reduce((acc, item) => ({ ...acc, ...item }), {})
      return Object.keys(results).length ? Promise.reject(results) : Promise.resolve()
    })
  }
})(Form)

Form.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  avatar: PropTypes.node,
  notification: PropTypes.array
}