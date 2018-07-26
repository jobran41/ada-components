import React, { Component } from 'react'

import SideBar from 'components/sideBar'
import { dataSideBar } from 'components/sideBar/helpers'

import './navigation.scss'

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <SideBar data={dataSideBar} />
      </div>
    )
  }
}
