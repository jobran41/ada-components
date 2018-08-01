import React, { Component, Fragment } from 'react'
import ContentHeader from 'components/content-header'

import './landing.scss'

export default class landing extends Component {
  render() {
    return (
      <Fragment>
        <div className="landing">
          <ContentHeader title="ADA INTERFACES / BRAND BOOK" date="2018" subclass="white-text" />
          <div className="landingText">
            <strong>ADA INTERFACES</strong><br/>
            BRAND BOOK<br/>
            IDENTITY & UI DESIGN GUIDELINE
          </div>
        </div>
        <div className="guideline">
          <ContentHeader title="ADA INTERFACES / BRAND BOOK" date="2018" subclass="gray-text" />
          <div className="guidelineText">
            <strong>ADA UI DESIGN GUIDELINE</strong>
            <ul>
              <li><strong>STYLE GUIDE</strong></li>
              <li>COLORS</li>
              <li>TYPOGRAPHY</li>
              <li>ICONS SET</li>
            </ul>
            <ul>
              <li><strong>DASHBOARD COMPONENTS GUIDE</strong></li>
              <li>DASHBOARD BASIC ELEMENTS</li>
              <li>MENUS & NAVIGATION</li>
              <li>FORMS</li>
              <li>GRAPH BLOCKS</li>
              <li>TEXT BLOCKS</li>
              <li>IMAGES PLACEMENT</li>
              <li>BUTTONS & ELEMENTS</li>
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}
