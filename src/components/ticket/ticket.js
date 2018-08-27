import React, { Component } from 'react'
import PropTypes from "prop-types"

import './style.scss'

class Ticket extends Component {
  render() {
    const { titleLeft, titleTop, description, className, theme } = this.props
    return (
      <div className={`ticket ${className ? className : ''} ${theme ? theme : ''}`} >
        <div className="ticket-left">{titleLeft}</div>
        <div className="ticket-right">
          {titleTop && <h5>{titleTop}</h5>}
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

Ticket.propTypes = {
  className: PropTypes.string,
  titleLeft: PropTypes.node,
  titleTop: PropTypes.string,
  description: PropTypes.string,
  theme: PropTypes.string
}
export default Ticket