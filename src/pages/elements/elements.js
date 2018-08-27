import React, { Component } from 'react'
import { FontIcon, LinearProgress } from 'react-md'

import AdaSearch from 'components/ada-search'
import AdaCategory from 'components/ada-category'
import AdaNotifications from 'components/ada-notifications'
import AdaStepper from 'components/ada-stepper'

export default class Elements extends Component {

  handleSearch = (v) => { }
  render() {
    const STRING_ITEMS = ['Zero', 'One', 'Two', 'Three']
    return (
      <div className="Elements">
        <div className="elementsContainer md-grid">
          <div className="elementsCell md-cell md-cell--4">
            <AdaSearch onChange={this.handleSearch} />
            <AdaCategory
              id="ada-category"
              menuItems={STRING_ITEMS}
              label="Select Category"
              className="md-cell"
              dropdownIcon={<FontIcon>add</FontIcon>}
            />
            <LinearProgress
              value={10}
              id="SideBar-LinearProgress"
            // style={{ height: 100, width: 20 }}
            //progressClassName="horizontale-progress"
            //progressStyle={value => ({ top: `${100 - value}%`, width: "100%" })}
            />
            <AdaNotifications
              iconName="notifications"
              alertItem="2"
            />
            <AdaStepper active="0" stepperData={["1", "2", "3"]} />
          </div>
        </div>
      </div>
    )
  }
}
