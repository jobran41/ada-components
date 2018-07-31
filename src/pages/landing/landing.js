import React, { Component } from 'react'
import ContentHeader from 'components/content-header'

import './landing.scss'

export default class landing extends Component {
  render() {
    return (
      <div className="landing">
        <ContentHeader title="ADA INTERFACES / BRAND BOOK" date="2018" subclass="white-text" />
        <div className="landingText">
          <strong>ADA INTERFACES</strong><br/>
          BRAND BOOK<br/>
          IDENTITY & UI DESIGN GUIDELINE
        </div>
      </div>
    )
  }
}
