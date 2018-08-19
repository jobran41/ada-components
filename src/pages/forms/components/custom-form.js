import React from 'react'
import PropTypes from "prop-types"
import { Paper, Checkbox, FontIcon } from "react-md"
import { cls } from "reactutils"

// import AdaIcon from 'components/adaIcon'
import { Field, HocForm } from 'components/form'

import './custom-form.scss'

const validateName = (value = '') => {
  if (value.trim() === '') {
    return Promise.reject('Please enter a username')
  } else {
    return Promise.resolve()
  }
}


const validateUserName = (value = '') => {
  if (value.trim() === '') {
    return Promise.reject('Please enter a username')
  } else {
    return Promise.resolve()
  }
}

const validateEmail = (value = '') => {
  if (value.trim() === '') {
    return Promise.reject('Please enter an email')
  }

  if (value.trim() !== '') {
    let filter = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    if (!filter.test(value)) {
      return Promise.reject('Please enter a valid email')
    } else {
      return Promise.resolve()
    }
  }
}

function validateNumber(value = '') {
  if (value.trim() === '') {
    return Promise.reject('Please enter a mobile number')
  } else if (value.trim().length < 6) {
    return Promise.reject('mobile number must contain at least 6 digits')
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
      className="authForm custum-form"
    >
      <div className="header-form">
        <h3>{title}</h3>
        <div className="formAvatar">{avatar}</div>
      </div>

      <form onSubmit={onSubmit} noValidate className="custumForm">
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
            onBlur: value => validateUserName(value),
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
        <div className="notificationWrapper">
        {notification.map((item, j) => {
          return <Checkbox key={j} id={cls("checkbox-" + j)} className="notificationItem" label={item} value={item} checkedIcon={<FontIcon>fiber_manual_record</FontIcon>} uncheckedIcon={<FontIcon>fiber_manual_record</FontIcon>} />
        })}
        </div>
        <div className="buttonWrapper">
          <button className="submitButton" type="submit">
            Sign up
          </button>
        </div>
      </form>
      
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
      errorCatcher('userName', validateUserName),
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