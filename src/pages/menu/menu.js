import React, { Component } from 'react'

import TopBar from 'components/top-bar'
import { menu } from './helpers'

import './menu.scss'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sideBarIsTrue: false
    }
  }

  onToggleClick = (v) => {
    this.setState({ sideBarIsTrue: v })
  }

  render() {
    const { sideBarIsTrue } = this.state
    return (
      <div className="menu">
        <h3>Navigation Bar Blue</h3>
        <TopBar color="blue" logoName="Lorem" authUser={true} menu={menu} userName="Jobran amairi" sideBarIsTrue={sideBarIsTrue} onToggleClick={this.onToggleClick} />

        <h3>Navigation Bar</h3>
        <TopBar underline logoName="Lorem" authUser={true} menu={menu} userName="Jobran amairi" sideBarIsTrue={sideBarIsTrue} onToggleClick={this.onToggleClick} />


        <h3>Profile Bar</h3>
        <TopBar ProfileBar logoName="Lorem" authUser={true} menu={menu} userName="Jobran amairi" sideBarIsTrue={sideBarIsTrue} onToggleClick={this.onToggleClick} />

        <h3>Profile Bar Black</h3>
        <TopBar color="black" ProfileBar logoName="Lorem" authUser={true} menu={menu} userName="Jobran amairi" sideBarIsTrue={sideBarIsTrue} onToggleClick={this.onToggleClick} />

      </div>
    )
  }
}
