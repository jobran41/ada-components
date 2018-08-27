import React, { Component } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import PropTypes from "../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types"

class Ticket extends Component {
  render() {
    const { titleLeft, titleTop, description, className } = this.props
    return (
      <div className={`Ticket ${className ? className : ''}`} >
        <div className="Ticket-left">{titleLeft}</div>
        <div className="Ticket-right">
          <h5>{titleTop}</h5>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

Ticket.propTypes = {
  className: PropTypes.string,
  titleLeft: PropTypes.string,
  titleTop: PropTypes.string,
  description: PropTypes.string
}
export default Ticket