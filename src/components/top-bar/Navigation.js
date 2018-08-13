import React, { Component } from "react"
import { Button } from "react-md"
import { withRouter } from "react-router"
import PropTypes from "prop-types"

import * as routes from "libs/constants/routes"

@withRouter
class Navigation extends Component {
  pushUrl = url => {
    const { history } = this.props
    history.push(url)
  };
  NavigationAuth = () => {
    const { menu, underline, history } = this.props
    const active = history.location.pathname.substr(1)
    const items = menu.map((item, i) => {
      return (
        <Button
          key={i}
          onClick={() => this.pushUrl(`${item}`)}
          flat
          className={`${underline && active === item ? 'menuButton underline' : 'menuButton'}`}
        >
          {item}
        </Button>
      )
    })
    return (<div className="menu-withLogin">{items}</div>)
  }

  NavigationNonAuth = () => (
    <div className="menu-withoutLogin">
      <Button className="menuButton" flat onClick={() => this.pushUrl(`${routes.SIGN_IN}`)} >
        SIGN IN
      </Button>
      <Button className="menuButton" flat onClick={() => this.pushUrl(`${routes.SIGN_UP}`)} >
        SIGN UP
      </Button>
    </div>
  );
  render() {
    const { authUser } = this.props
    return (
      <div className="Navigation">
        {authUser ? this.NavigationAuth() : this.NavigationNonAuth()}
      </div>
    )
  }
}

Navigation.propTypes = {
  authUser: PropTypes.bool,
  history: PropTypes.func,
  menu: PropTypes.array,
  underline: PropTypes.bool
}
export default Navigation