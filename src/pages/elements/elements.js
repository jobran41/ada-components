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
import ProfileAvatar from 'components/profile-avatar'
import AdaHeart from 'components/ada-heart'
import AdaProgress from 'components/ada-progress'
import AdaPagination from 'components/ada-pagination'
import AdaAvatar from 'components/ada-avatar'
import AdaTag from 'components/ada-tag'
import AdaSlider from 'components/ada-slider'

import './style.scss'

export default class Elements extends Component {
  constructor(props) {
    super(props)
    let exampleItems = [...Array(150).keys()].map(i => ({ id: (i + 1), name: 'Item ' + (i + 1) }))
    this.state = {
      exampleItems: exampleItems,
      pageOfItems: []
    }
  }
  handleSearch = (v) => { }
  onChangePage = (pageOfItems) => {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems })
  }

  render() {
    const STRING_ITEMS = ['Zero', 'One', 'Two', 'Three']
    const roundAvatar = ["Man01", "Man02", "Man03"].map((elem, i) => {
      return <AdaAvatar width={50} height={50} round key={i} name={elem} />
    })

    return (
      <div className="elements" >
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
            <AdaProgress item={{ value: 50, max: 100, min: 0, id: 'ada-progress' }} />
            <br />
            <SocialPanel color="red" renderButton={() => {
              return (
                <Fragment>
                  <Button icon iconClassName="mdi mdi-google" />
                  <Button icon iconClassName="mdi mdi-facebook" />
                  <Button icon iconClassName="mdi mdi-instagram" />
                  <Button icon iconClassName="mdi mdi-twitter" />
                  <Button icon iconClassName="mdi mdi-linkedin" />
                  <Button icon iconClassName="mdi mdi-play-box-outline" />
                </Fragment>
              )
            }} />
            <br />
            <SocialPanel color="blue" renderButton={() => {
              return (
                <Fragment>
                  <Button icon iconClassName="mdi mdi-google" />
                  <Button icon iconClassName="mdi mdi-facebook" />
                  <Button icon iconClassName="mdi mdi-instagram" />
                  <Button icon iconClassName="mdi mdi-twitter" />
                  <Button icon iconClassName="mdi mdi-linkedin" />
                  <Button icon iconClassName="mdi mdi-play-box-outline" />
                </Fragment>
              )
            }} />
            <br />
            <SocialPanel color="purple" renderButton={() => {
              return (
                <Fragment>
                  <Button icon iconClassName="mdi mdi-google" />
                  <Button icon iconClassName="mdi mdi-facebook" />
                  <Button icon iconClassName="mdi mdi-instagram" />
                  <Button icon iconClassName="mdi mdi-twitter" />
                  <Button icon iconClassName="mdi mdi-linkedin" />
                  <Button icon iconClassName="mdi mdi-play-box-outline" />
                </Fragment>
              )
            }} />
            <br />
            <SocialPanel renderButton={() => {
              return (
                <Fragment>
                  <Button icon iconClassName="mdi mdi-google" />
                  <Button icon iconClassName="mdi mdi-facebook" />
                  <Button icon iconClassName="mdi mdi-instagram" />
                  <Button icon iconClassName="mdi mdi-twitter" />
                  <Button icon iconClassName="mdi mdi-linkedin" />
                  <Button icon iconClassName="mdi mdi-play-box-outline" />
                </Fragment>
              )
            }} />
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
              <AdaNotifications
                iconName="add"
                alertItem="2"
              />
              <AdaNotifications
                iconName="folder"
                alertItem="1"
              />
            </div>
            <div className="middleComponent">
              <ProfileAvatar active path="http://i.pravatar.cc/150?img=3" />
              <ProfileAvatar path="http://i.pravatar.cc/150?img=3" />
            </div>
            <br />
            <div className="elemButtonWrapper">
              <AdaHeart label="design" checked={true} id="checkbox1" />
              <AdaHeart label="developpement" checked={false} id="checkbox2" />
            </div>
            <br />
            <AdaHeart heart="true" label="Likes" id="checkbox3" />
            <br />
            <AdaHeart star="true" label="Rate" id="checkbox4" />
            <br />
            <div className="elemButtonWrapper">
              <AdaHeart name="switcher1" switcher="true" label="on" checked={true} id="checkbox5" />
              <AdaHeart name="switcher2" switcher="true" label="off" checked={false} id="checkbox5" />
            </div>
            <br />
            <AdaHeart eye="true" label="Views" id="checkbox6" />
            <br />
            {roundAvatar}
            <br />

          </div>
          <div className="elementsCell md-cell md-cell--5">
            <Badges title="Badges" badgesOfAvatars={["Man01", "Man02", "Man03"]} />
            <br />
            <Badges title="Badges" badgesOfAvatars={["Man01", "Man02", "Man03"]} theme="dark" />
            <br />
            <div className="ticketWrapper">
              <Ticket titleLeft={<h2>1</h2>} className="ticketItem" titleTop="Step 1" description="Lorem ipsum" />
              <Ticket titleLeft={<h2>2</h2>} className="ticketItem" theme="green" titleTop="Step 1" description="Lorem ipsum" />
              <Ticket titleLeft={<h2>3</h2>} className="ticketItem" theme="purple" titleTop="Step 1" description="Lorem ipsum" />
            </div>
            <br />
            <AdaTag iconLeft='mdi-check-circle-outline' iconRight='mdi-note-plus-outline' text="New Note" />
            <br />
            <AdaTag theme="blue" iconLeft='mdi-check-circle-outline' iconRight='mdi-email-outline' text="New Message" />
            <br />
            <AdaTag readOnly="true" iconLeft='mdi-check-circle-outline' iconRight='mdi-close' text="Success" />
            <br />
            <AdaTag theme="blue" readOnly="true" iconLeft='mdi-check-circle-outline' iconRight='mdi-close' text="Success" />
            <br />
            <Ticket titleLeft="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
            <br />
            <AdaAlerts theme="green" iconLeft='mdi-check-circle-outline' iconRight='mdi-close' text="Success" />
            <br />
            <AdaAlerts iconLeft='mdi-information-outline' iconRight='mdi-close' text="Information" />
            <br />
            <AdaAlerts theme="orange" iconLeft='mdi-alert-circle-outline' iconRight='mdi-close' text="Worning" />
            <br />
            <AdaAlerts theme="red" iconLeft='mdi-alert-outline' iconRight='mdi-close' text="Alert message" />
            <br />
            <div className="paginationWapper">
              <div className="paginationItems">
                {this.state.pageOfItems.map(item =>
                  <div className="pagination-item" key={item.id}>{item.name}</div>
                )}
              </div>
              <AdaPagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
