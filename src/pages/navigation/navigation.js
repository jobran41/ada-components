import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types"
import { Button } from "react-md"
import { withRouter } from "react-router"
import ContentHeader from 'components/content-header'


import * as cookies from "tiny-cookie"
import { SideBar, MenuIcon, MenuList } from 'components/sideBar'

import Docs from "components/docs"

import { docsSideBar, docsMenuList, docsMenuIcon } from "pages/docs-props"

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
        <ContentHeader title="ADA INTERFACES / BRAND BOOK" date="2018" subclass="gray-text" />
        <div className="navigationContainer md-grid">
          <div className="navigationCell md-cell md-cell--2">
            <Docs
              title={"SideBar"}
              docsProps={docsSideBar}
              dataCode={`
                <SideBar
                  className=""
                  responsive
                  colorHeader="white"
                  colorBody="white"
                  ProgressBar=""
                  urlImg="http://i.pravatar.cc/150?img=11"
                  profileName="Instructor Name"
                  renderButton={() => {
                    return (
                      <div className="simpleMenu">
                        <Button flat className="active"> Lorem </Button>
                        <Button flat> Lorem </Button>
                        <Button flat> Lorem </Button>
                        <Button flat> Lorem </Button>
                        <Button flat> Lorem </Button>
                        <Button flat> Lorem </Button>
                      </div>
                    )
                  }}
              />
              `}
            >
              <SideBar
                className=""
                responsive
                colorHeader="white"
                colorBody="white"
                ProgressBar=""
                urlImg="http://i.pravatar.cc/150?img=11"
                profileName="Instructor Name"
                renderButton={() => {
                  return (
                    <div className="simpleMenu">
                      <Button flat className="active"> Lorem </Button>
                      <Button flat> Lorem </Button>
                      <Button flat> Lorem </Button>
                      <Button flat> Lorem </Button>
                      <Button flat> Lorem </Button>
                      <Button flat> Lorem </Button>
                    </div>
                  )
                }}
              />
            </Docs>
          </div>
          <div className="navigationCell md-cell md-cell--2">
            <Docs
              title={"SideBar"}
              docsProps={docsSideBar}
              dataCode={`
                <SideBar
                  className=""
                  responsive
                  colorHeader="white"
                  colorBody="white"
                  ProgressBar=""
                  urlImg="http://i.pravatar.cc/150?img=11"
                  profileName="Instructor Name"
                  renderButton={() => {
                    return (
                      <div className="simpleMenu">
                        <Button flat className="active"> Lorem </Button>
                        <Button flat> Lorem </Button>
                        <Button flat> Lorem </Button>
                        <Button flat> Lorem </Button>
                        <Button flat> Lorem </Button>
                        <Button flat> Lorem </Button>
                      </div>
                    )
                  }}
              />
              `}
            >
              <SideBar
                className=""
                responsive
                colorHeader="blue"
                colorBody="white"
                ProgressBar=""
                urlImg="http://i.pravatar.cc/150?img=11"
                profileName="Instructor Name"
                renderButton={() => {
                  return (
                    <div className="underlineMenu">
                      <Button flat className="active"> Lorem </Button>
                      <Button flat> Lorem </Button>
                      <Button flat> Lorem </Button>
                      <Button flat> Lorem </Button>
                      <Button flat> Lorem </Button>
                      <Button flat> Lorem </Button>
                    </div>
                  )
                }}
              />
            </Docs>
          </div>
          <div className="navigationCell md-cell md-cell--3">
            <Docs
              title={"SideBar"}
              docsProps={docsSideBar}
              dataCode={`
                <SideBar
                  className=""
                  responsive
                  colorHeader="white"
                  colorBody="white"
                  ProgressBar=""
                  urlImg="http://i.pravatar.cc/150?img=11"
                  profileName="Instructor Name"
                  renderButton={() => {
                    return (
                      <div className="simpleMenu">
                        <Button flat className="active"> Lorem </Button>
                        <Button flat> Lorem </Button>
                        <Button flat> Lorem </Button>
                        <Button flat> Lorem </Button>
                        <Button flat> Lorem </Button>
                        <Button flat> Lorem </Button>
                      </div>
                    )
                  }}
              />
              `}
            >
              <SideBar
                className=""
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
            </Docs>
          </div>
          <div className="navigationCell md-cell md-cell--3">
            <Docs
              title={"MenuList"}
              docsProps={docsMenuList}
              dataCode={`<MenuList icon="mdi-dots-horizontal" colorBody="light" listPeople={listPeople} listRoom={listRoom} />`}
            >
              <MenuList icon="mdi-dots-horizontal" colorBody="light" listPeople={listPeople} listRoom={listRoom} />
            </Docs>
          </div>
          <div className="navigationCell md-cell md-cell--1">
            <Docs
              title={"MenuIcon"}
              docsProps={docsMenuIcon}
              dataCode={`
                <MenuIcon
                  renderButton={() => {
                    return (
                      <Fragment>
                        <Button onClick={this.logout} icon iconClassName="mdi mdi-home-outline" />
                        <Button onClick={this.logout} icon iconClassName="mdi mdi-account-multiple-outline" />
                        <Button  onClick={this.logout} icon iconClassName="mdi mdi-pencil-box-outline" />
                        <Button onClick={this.logout} icon iconClassName="mdi mdi-bell-ring-outline" />
                        <Button onClick={this.logout} icon iconClassName="mdi mdi-image-filter" />
                        <Button onClick={this.logout} icon iconClassName="mdi mdi-telegram" />
                        <Button onClick={this.logout} icon iconClassName="mdi mdi-lightbulb-on-outline" />
                        <Button onClick={this.logout} icon iconClassName="mdi mdi-lock-outline" />
                        <Button onClick={this.logout} icon iconClassName="mdi mdi-wrench" />
                        <Button onClick={this.logout} icon iconClassName="mdi mdi-help" />
                      </Fragment>
                    )
                  }}
                />
              `}
            >
              <MenuIcon
                renderButton={() => {
                  return (
                    <Fragment>
                      <Button onClick={this.logout} icon iconClassName="mdi mdi-home-outline" />
                      <Button onClick={this.logout} icon iconClassName="mdi mdi-account-multiple-outline" />
                      <Button  onClick={this.logout} icon iconClassName="mdi mdi-pencil-box-outline" />
                      <Button onClick={this.logout} icon iconClassName="mdi mdi-bell-ring-outline" />
                      <Button onClick={this.logout} icon iconClassName="mdi mdi-image-filter" />
                      <Button onClick={this.logout} icon iconClassName="mdi mdi-telegram" />
                      <Button onClick={this.logout} icon iconClassName="mdi mdi-lightbulb-on-outline" />
                      <Button onClick={this.logout} icon iconClassName="mdi mdi-lock-outline" />
                      <Button onClick={this.logout} icon iconClassName="mdi mdi-wrench" />
                      <Button onClick={this.logout} icon iconClassName="mdi mdi-help" />
                    </Fragment>
                  )
                }}
              />
            </Docs>
          </div>
        </div>
      </div>
    )
  }
}
Navigation.propTypes = {
  history: PropTypes.object,
}

export default Navigation