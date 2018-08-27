import React, { Component, Fragment } from 'react'
import { FontIcon, Button } from 'react-md'

import ContentHeader from 'components/content-header'
import AdaSearch from 'components/ada-search'
import AdaCategory from 'components/ada-category'
import AdaNotifications from 'components/ada-notifications'
import AdaStepper from 'components/ada-stepper'
import Ticket from 'components/ticket'
import Badges from 'components/badges'
import SocialPanel from 'components/social-panel'
import AdaAlerts from 'components/ada-alerts'

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
            <AdaStepper active={2} stepperData={["1", "2", "3", "4", "5", "6", "7", "8", "9"]} />
            <br />
            <AdaStepper active={1} widthBorder theme="blue" stepperData={["Standard", "Medium", "High"]} />
            <br />
            <AdaStepper active={0} widthBorder theme="green" stepperData={["Standard", "Medium", "High"]} />
            <br />
            <AdaStepper active={2} widthBorder stepperData={["Standard", "Medium", "High"]} />

            <Ticket titleLeft="Title" titleTop="Step 1" description="lorem lorem lorem" />
          </div>
          <div className="elementsCell md-cell md-cell--3">
            <AdaNotifications
              iconName="notifications"
              alertItem="2"
            />
          </div>
          <div className="elementsCell md-cell md-cell--5">
            <Badges title="Badges" badgesOfAvatars={["Man01", "Man02", "Man03"]} />
            <AdaAlerts color="white" iconLeft='mdi-plus' iconRight='mdi-close' text="Success" />
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
