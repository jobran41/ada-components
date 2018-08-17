import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types"
import { Button } from "react-md"
import { withRouter } from "react-router"

import * as cookies from "tiny-cookie"
import { SideBar, MenuIcon } from 'components/sideBar'

import './navigation.scss'

@withRouter
class Navigation extends Component {
  editProfile = () => {

  }
  logout = () => {
    const { history } = this.props
    cookies.remove("login")
    history.push("/")
  };
  render() {
    return (
      <div className="navigation">
        <SideBar
          className="ada-lg"
          profileName="Instructor Name"
          skillsName="Game Instructor"
          address="Tunis, Tunisia"
          tel="00218867234"
          Email="jobran@gmail.com"
          ProgressBar={{ 'level': 80, 'indicatorMax': 320, 'indicatorMin': 120 }}
          social={["GITHUB", "TWITTER", "TECHNOLOGIE CSS"]}
          badges={["a", "b", "c", "d"]}
          grade="senior"
          renderButton={() => {
            return (
              <Fragment>
                <Button flat onClick={this.editProfile} iconBefore={false} iconClassName="mdi mdi-pencil">
                  Edit Profil
               </Button>
                <Button flat iconBefore={false} iconClassName="mdi mdi-information">
                  Information
               </Button>
                <Button
                  onClick={this.logout}
                  flat
                  iconBefore={false}
                  iconClassName="mdi mdi-home"
                >
                  Logout
            </Button>
              </Fragment>
            )
          }}
        />
        <SideBar
          className="ada-md"
          responsive="md"
          colorHeader="white"
          colorBody="black"
          profileName="Instructor Name"
          skillsName="Game Instructor"
          address="Tunis, Tunisia"
          tel="00218867234"
          Email="jobran@gmail.com"
          ProgressBar={{ 'level': 80, 'indicatorMax': 320, 'indicatorMin': 120 }}
          social={["GITHUB", "TWITTER", "TECHNOLOGIE CSS"]}
          badges={["a", "b", "c", "d"]}
          grade="senior"
          renderButton={() => {
            return (
              <Fragment>
                <Button
                  onClick={this.logout}
                  flat
                  iconBefore={false}
                  iconClassName="mdi mdi-home"
                >
                  Logout
                </Button>
              </Fragment>
            )
          }}
        />
        <MenuIcon
          renderButton={() => {
            return (
              <Fragment>
                <Button
                  onClick={this.logout}
                  icon
                  iconBefore={false}
                  iconClassName="mdi mdi-home"
                />
                <Button
                  onClick={this.logout}
                  icon
                  iconBefore={false}
                  iconClassName="mdi mdi-home"
                />
                <Button
                  onClick={this.logout}
                  icon
                  iconBefore={false}
                  iconClassName="mdi mdi-home"
                />
                <Button
                  onClick={this.logout}
                  icon
                  iconBefore={false}
                  iconClassName="mdi mdi-home"
                />
                <Button
                  onClick={this.logout}
                  icon
                  iconBefore={false}
                  iconClassName="mdi mdi-home"
                />
              </Fragment>
            )
          }}
        />
      </div>
    )
  }
}
Navigation.propTypes = {
  history: PropTypes.object,
}

export default Navigation