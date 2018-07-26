import React, { Component } from 'react'

import TopBar from 'components/top-bar'

import './menu.scss'

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <TopBar />
      </div>
    )
  }
}
