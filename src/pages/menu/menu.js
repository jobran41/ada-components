import React, { Component } from 'react'
import ContentHeader from 'components/content-header'

import TopBar from 'components/top-bar'
import { menu } from './helpers'
import Docs from "components/docs"

import { docsTopBar } from "pages/docs-props"

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
        <ContentHeader title="ADA INTERFACES / BRAND BOOK" date="2018" subclass="gray-text" />
        <div className="menuContainer">
          <div className="barsContainer">
            <h4>Navigation Bar</h4>
            <Docs
              title={"TopBar"}
              docsProps={docsTopBar}
              dataCode={`
               import TopBar from 'components/top-bar'
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
                  const menu = ["Dashboard", "Aquarium", "Lab", "Form", "Tuto", 'menu']
                  <TopBar 
                    className="navBar" 
                    color="blue" 
                    logoName="Logo" 
                    authUser={true} 
                    menu={menu} 
                    userName="Jobran amairi" 
                    sideBarIsTrue={sideBarIsTrue} 
                    onToggleClick={this.onToggleClick}
                  />
                }}
              `}
            >
              <TopBar
                className="navBar"
                color="blue"
                logoName="Logo"
                authUser={true}
                menu={menu}
                userName="Jobran amairi"
                sideBarIsTrue={sideBarIsTrue}
                onToggleClick={this.onToggleClick}
              />
            </Docs>
            <Docs
              title={"TopBar"}
              docsProps={docsTopBar}
              dataCode={`
                <TopBar 
                  className="navBar" 
                  color="blue" 
                  logoName="Logo" 
                  authUser={true} 
                  menu={menu} 
                  userName="Jobran amairi" 
                  sideBarIsTrue={sideBarIsTrue} 
                  onToggleClick={this.onToggleClick}
                />
              `}
            >
              <TopBar
                className="navBar"
                underline color="blue"
                logoName="Logo"
                authUser={true}
                menu={menu}
                userName="Jobran amairi"
                sideBarIsTrue={sideBarIsTrue}
                onToggleClick={this.onToggleClick}
              />
            </Docs>
            <Docs
              title={"TopBar"}
              docsProps={docsTopBar}
              dataCode={`
                <TopBar 
                  className="navBar" 
                  color="blue" 
                  logoName="Logo" 
                  authUser={true} 
                  menu={menu} 
                  userName="Jobran amairi" 
                  sideBarIsTrue={sideBarIsTrue} 
                  onToggleClick={this.onToggleClick}
                />
              `}
            >
              <TopBar className="navBar" logoName="Logo" authUser={true} menu={menu} userName="Jobran amairi" sideBarIsTrue={sideBarIsTrue} onToggleClick={this.onToggleClick} />
            </Docs>
            <Docs
              title={"TopBar"}
              docsProps={docsTopBar}
              dataCode={`
                <TopBar 
                  className="navBar" 
                  color="blue" 
                  logoName="Logo" 
                  authUser={true} 
                  menu={menu} 
                  userName="Jobran amairi" 
                  sideBarIsTrue={sideBarIsTrue} 
                  onToggleClick={this.onToggleClick}
                />
              `}
            >
              <TopBar className="navBar" underline logoName="Logo" authUser={true} menu={menu} userName="Jobran amairi" sideBarIsTrue={sideBarIsTrue} onToggleClick={this.onToggleClick} />
            </Docs>
          </div>

          <div className="barsContainer">
            <h4>Profile Bar</h4>
            <Docs
              title={"TopBar"}
              docsProps={docsTopBar}
              dataCode={`
                <TopBar 
                  className="navBar" 
                  color="blue" 
                  logoName="Logo" 
                  authUser={true} 
                  menu={menu} 
                  userName="Jobran amairi" 
                  sideBarIsTrue={sideBarIsTrue} 
                  onToggleClick={this.onToggleClick}
                />
              `}
            >
              <TopBar className="navBar" ProfileBar logoName="Logo" authUser={true} menu={menu} userName="Jobran amairi" sideBarIsTrue={sideBarIsTrue} onToggleClick={this.onToggleClick} />
            </Docs>
            <Docs
              title={"TopBar"}
              docsProps={docsTopBar}
              dataCode={`
                <TopBar 
                  className="navBar" 
                  color="blue" 
                  logoName="Logo" 
                  authUser={true} 
                  menu={menu} 
                  userName="Jobran amairi" 
                  sideBarIsTrue={sideBarIsTrue} 
                  onToggleClick={this.onToggleClick}
                />
              `}
            >
              <TopBar className="navBar" color="black" ProfileBar logoName="Logo" authUser={true} menu={menu} userName="Jobran amairi" sideBarIsTrue={sideBarIsTrue} onToggleClick={this.onToggleClick} />
            </Docs>
            <Docs
              title={"TopBar"}
              docsProps={docsTopBar}
              dataCode={`
                <TopBar 
                  className="navBar" 
                  color="blue" 
                  logoName="Logo" 
                  authUser={true} 
                  menu={menu} 
                  userName="Jobran amairi" 
                  sideBarIsTrue={sideBarIsTrue} 
                  onToggleClick={this.onToggleClick}
                />
              `}
            >
              <TopBar className="navBar" underline color="black" ProfileBar logoName="Logo" authUser={true} menu={menu} userName="Jobran amairi" sideBarIsTrue={sideBarIsTrue} onToggleClick={this.onToggleClick} />
            </Docs>
          </div>
        </div>

      </div>
    )
  }
}
