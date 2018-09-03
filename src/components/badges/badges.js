import React, { Component } from 'react'
import PropTypes from "prop-types"
import AdaAvatar from 'components/ada-avatar'

import './badges.scss'

class Badges extends Component {
  render() {
    const { className, title, badgesOfAvatars, theme } = this.props
    return (
      <div
        className={`Badges ${className ? className : ''} ${theme ? theme : ''}`}
      >
        <div className="Badges-content">
          <h4> {title} </h4>
          <div className="Badges-avatar">
            {badgesOfAvatars.map((elem, i) => {
              return <AdaAvatar width="40" height="40" key={i} name={elem} round />
            })}
          </div>
        </div>
      </div>
    )
  }
}
Badges.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  theme:PropTypes.string,
  badgesOfAvatars: PropTypes.array
}
export default Badges