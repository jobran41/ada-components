import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types"
import { Button } from "react-md"
import { withRouter } from "react-router"

import * as cookies from "tiny-cookie"
import { SideBar, MenuIcon, MenuList } from 'components/sideBar'

import './navigation.scss'

@withRouter
class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listPeople: [{ name: "jobran", urlImg: "http://i.pravatar.cc/150?img=11" }, { name: "hamdi", url: "http://i.pravatar.cc/150?img=11" }],
      listRoom: [{ name: "Romm1", urlImg: "http://i.pravatar.cc/150?img=11" }, { name: "Room2", url: "http://i.pravatar.cc/150?img=11" }]
    }
  }

  editProfile = () => {

  }
  logout = () => {
    const { history } = this.props
    cookies.remove("login")
    history.push("/")
  };
  render() {
    const { listPeople, listRoom } = this.state
    return (
      <div className="navigation">
        <SideBar
          className="ada-md"
          responsive="md"
          colorHeader="white"
          colorBody="white"
          ProgressBar=""
          urlImg="http://i.pravatar.cc/150?img=11"
          profileName="Instructor Name"
          renderButton={() => {
            return (
              <Fragment>

                <Button
                  flat
                >
                  Lorem
              </Button>
                <Button
                  flat
                >
                  Lorem
              </Button>
              </Fragment>
            )
          }}
        />
        <SideBar
          className="ada-md"
          responsive="md"
          colorHeader="blue"
          colorBody="white"
          ProgressBar=""
          urlImg="http://i.pravatar.cc/150?img=11"
          profileName="Instructor Name"
          renderButton={() => {
            return (
              <Fragment>
                <Button
                  flat
                  className="active"
                >
                  Lorem
                </Button>
                <Button
                  flat
                >
                  Lorem
                </Button>
                <Button
                  flat
                >
                  Lorem
                </Button>
              </Fragment>
            )
          }}
        />

        <SideBar
          className="ada-lg"
          profileName="Instructor Name"
          skillsName="Game Instructor"
          address="Tunis, Tunisia"
          tel="00218867234"
          urlImg="http://i.pravatar.cc/150?img=11"
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

        <MenuList icon="mdi-plus" listPeople={listPeople} listRoom={listRoom} />
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