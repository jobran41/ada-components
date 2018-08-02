import React, { Component, Fragment } from "react"
import { Switch, Route } from "react-router-dom"
import { withRouter } from "react-router"

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

import "./Container.scss"

@withRouter
export default class Container extends Component {
  render() {
    const sideBarIsTrue = true
    return (
      <Fragment>
        <div
          className={`${
            sideBarIsTrue ? "sideBarOut sideBar" : "sideBarIn sideBar"
          } `}
        >
          <Draw />
        </div>
        <div
          className={`${
            sideBarIsTrue ? "sideBarOut content" : "sideBarIn content"
          } `}
        >
          <Switch>
            <Route exact path={`${routes.LANDING}`} component={Landing} />
            <Route exact path={`${routes.colors}`} component={Colors} />
            <Route exact path={`${routes.Menu}`} component={Menu} />
            <Route exact path={`${routes.Forms}`} component={Forms} />
            <Route exact path={`${routes.Icons}`} component={Icons} />
            <Route
              exact
              path={`${routes.Navigation_Horizontal}`}
              component={Navigation}
            />
            <Route exact path={`${routes.Graphs}`} component={Graphs} />
            <Route exact path={`${routes.BlockList}`} component={BlockList} />
          </Switch>
        </div>
      </Fragment>
    )
  }
}
