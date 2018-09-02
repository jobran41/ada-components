import React, { Component, Fragment } from 'react'
import { FontIcon, Button } from 'react-md'

import ContentHeader from 'components/content-header'
import AdaSearch from 'components/ada-search'
import AdaCategory from 'components/ada-category'
import AdaNotifications from 'components/ada-notifications'
import AdaStepper from 'components/ada-stepper'
import Ticket from 'components/ticket'
// import Badges from 'components/badges'
import SocialPanel from 'components/social-panel'
import AdaAlerts from 'components/ada-alerts'
import ProfileAvatar from 'components/profile-avatar'
import AdaHeart from 'components/ada-heart'

import './style.scss'

export default class Elements extends Component {

  handleSearch = (v) => { }
  render() {
    const STRING_ITEMS = ['Zero', 'One', 'Two', 'Three']
    return (
      <div className="elements">
        <ContentHeader title="Basic Elements Used Across the Dashboard" date="2018" subclass="gray-text" />
        <div className="elementsContainer md-grid">
          <div className="elementsCell md-cell md-cell--4">
            <AdaSearch onChange={this.handleSearch} />
            <br />
            <AdaCategory
              id="ada-category"
              menuItems={STRING_ITEMS}
              placeholder="Select Category"
              dropdownIcon={<FontIcon>add</FontIcon>}
            />
            <br />
            <AdaStepper updateField={this.updateField} stepperData={["1", "2", "3", "4", "5", "6", "7", "8", "9"]} />
            <br />
            <AdaStepper active={1} widthBorder theme="blue" stepperData={["Standard", "Medium", "High"]} />
            <br />
            <AdaStepper widthBorder theme="green" stepperData={["Standard", "Medium", "High"]} />
            <br />
            <AdaStepper active={2} widthBorder stepperData={["Standard", "Medium", "High"]} />
            <br />

          </div>
          <div className="elementsCell md-cell md-cell--3">
            <div className="middleComponent">
              <AdaNotifications
                iconName="notifications"
                alertItem="2"
              />
              <AdaNotifications
                iconName="message"
                alertItem="1"
              />
            </div>
            <div className="middleComponent">
              <ProfileAvatar active path="http://i.pravatar.cc/150?img=3" />
              <ProfileAvatar path="http://i.pravatar.cc/150?img=3" />
            </div>
            <br />
            <AdaHeart />
            <br />
          </div>
          <div className="elementsCell md-cell md-cell--5">
            <div className="ticketWrapper">
              <Ticket titleLeft={<h2>1</h2>} className="ticketItem" titleTop="Step 1" description="Lorem ipsum" />
              <Ticket titleLeft={<h2>2</h2>} className="ticketItem" theme="green" titleTop="Step 1" description="Lorem ipsum" />
              <Ticket titleLeft={<h2>3</h2>} className="ticketItem" theme="purple" titleTop="Step 1" description="Lorem ipsum" />
            </div>
            <br />
            <Ticket titleLeft="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
            <br />
            {/*<Badges title="Badges" badgesOfAvatars={["Man01", "Man02", "Man03"]} />*/}
            <AdaAlerts theme="green" iconLeft='mdi-check-circle-outline' iconRight='mdi-close' text="Success" />
            <br />
            <AdaAlerts iconLeft='mdi-information-outline' iconRight='mdi-close' text="Information" />
            <br />
            <AdaAlerts theme="orange" iconLeft='mdi-alert-circle-outline' iconRight='mdi-close' text="Worning" />
            <br />
            <AdaAlerts theme="red" iconLeft='mdi-alert-outline' iconRight='mdi-close' text="Alert message" />
            <br />
            <SocialPanel renderButton={() => {
              return (
                <Fragment>
                  <Button icon iconClassName="mdi mdi-google" />
                  <Button icon iconClassName="mdi mdi-facebook" />
                  <Button icon iconClassName="mdi mdi-twitter" />
                </Fragment>
              )
            }} />
          </div>
        </div>
      </div>
    )
  }
}
