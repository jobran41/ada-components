import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Paper } from 'react-md'
import AdaAvatar from 'components/ada-avatar'

import './badges.scss'

class Badges extends Component {
  render() {
    const { className, title, width, badgesOfAvatars } = this.props
    const widthLocal = '200px'
    return (
      <Paper
        zDepth={1}
        className={`Badges ${className ? className : ''}`}
        style={{ width: width ? widthLocal : 'auto' }}
      >
        <div className="Badges-content">
          <h4> {title} </h4>
          <div className="Badges-avatar">
            {badgesOfAvatars.map((elem, i) => {
              return <AdaAvatar key={i} name={elem} />
            })}
          </div>
        </div>
      </Paper>
    )
  }
}
Badges.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  badgesOfAvatars: PropTypes.array
}
export default Badges