import React, { Component, Fragment } from "react"
import { Button } from 'react-md'
import { Switch, Route } from "react-router-dom"
import { withRouter } from "react-router"
import { connect } from 'react-redux'

import * as routes from "libs/constants/routes"

import Draw from "../draw"

import Landing from "pages/landing"
import Forms from "pages/forms"
import Menu from "pages/menu"
import Icons from "pages/icons"
import Navigation from "pages/navigation"
import Graphs from "pages/graphs"
import BlockList from "pages/blocks-list"
import Colors from "pages/colors"
import Media from "pages/media"
import Elements from "pages/elements"
import AvatarsPage from "pages/avatars-page"
import Topography from "pages/topography"

import "./Container.scss"

@withRouter
@connect(({ app }) => ({
  sideBarIsTrue: app.topbarCollapsed
}))
export default class Container extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sideBarIsTrue: true
    }
  }

  closeDrawer = (v) => {
    this.setState({ sideBarIsTrue: v })
  }

  render() {
    const { sideBarIsTrue } = this.state
    return (
      <Fragment>
        <div
          className={`${
            sideBarIsTrue ? "sideBarOut sideBar" : "sideBarIn sideBar"
            } `}
        >
          <Draw closeDrawer={this.closeDrawer} />
        </div>
        <div
          className={`${
            sideBarIsTrue ? "sideBarOut content" : "sideBarIn content"
            } `}
        >
          {!sideBarIsTrue && <Button className="toggleButton" icon onClick={() => this.closeDrawer(true)}>dehaze</Button>}
          <Switch>
            <Route
              exact
              path={`${routes.LANDING}`}
              component={Landing}
            />
            <Route exact path={`${routes.colors}`} component={Colors} />
            <Route
              exact
              path={`${routes.Menu}`}
              component={Menu}
            />
            <Route
              exact
              path={`${routes.Forms}`}
              component={Forms}
            />
            <Route
              exact
              path={`${routes.Icons}`}
              component={Icons}
            />
            <Route
              exact
              path={`${routes.Navigation_Horizontal}`}
              component={Navigation}
            />
            <Route
              exact
              path={`${routes.Graphs}`}
              component={Graphs}
            />
            <Route
              exact
              path={`${routes.BlockList}`}
              component={BlockList}
            />
            <Route
              exact
              path={`${routes.Navigation_Horizontal}`}
              component={Navigation}
            />
            <Route
              exact
              path={`${routes.Graphs}`}
              component={Graphs}
            />
            <Route
              exact
              path={`${routes.BlockList}`}
              component={BlockList}
            />

            <Route
              exact
              path={`${routes.Media}`}
              component={Media}
            />
            <Route
              exact
              path={`${routes.Elements}`}
              component={Elements}
            />
            <Route
              exact
              path={`${routes.Avatars}`}
              component={AvatarsPage}
            />
            <Route
              exact
              path={`${routes.Topography}`}
              component={Topography}
            />
          </Switch>
        </div>
      </Fragment>
    )
  }
}
