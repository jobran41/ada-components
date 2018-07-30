import React, { Component } from 'react'
import PropTypes from "prop-types"

import './style.scss'

class ContentHeader extends Component {
  render() {
    const {title, date, subclass} = this.props
    return (
      <div className={`contentHeader ${subclass}`}><span>{title}</span><span>{date}</span></div>
    )
  }
}

ContentHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  subclass: PropTypes.className,
}

export default ContentHeader 