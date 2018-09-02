import React, { Component } from 'react'

import './ada-heart.scss'

export default class AdaHeart extends Component {
  render() {
    return (
      <div className="adaHeart">
        <i class="fa fa-heart-o"></i>
        <div className="heart" />
      </div>
    )
  }
}
