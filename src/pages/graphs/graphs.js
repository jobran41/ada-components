import React, { Component } from "react"
import ContentHeader from 'components/content-header'

import {
  Evaluation,
  PieCircle,
  LogChart,
  Calendar,
  NewCalendar,
  NewChart
} from "components/charts"

import './style.scss'

export default class Graphs extends Component {
  render() {
    const menuButtonExpertise = ["View", "Edit"]
    const itemsExpertise = [
      {
        label: "css",
        progress: 30
      },
      {
        label: "Javascript",
        progress: 70
      },
      {
        label: "Html",
        progress: 10
      },
      {
        label: "Other",
        progress: 50
      },
      {
        label: "Other",
        progress: 0
      },
      {
        label: "Other",
        progress: 0
      },
      {
        label: "Other",
        progress: 0
      },
      {
        label: "Other",
        progress: 0
      },
      {
        label: "Other",
        progress: 0
      }
    ]
    const itemsActivities = [
      { name: "Game", value: 355 },
      { name: "Web", value: 200 },
      { name: "AI", value: 130 }
    ]
    const LogTimeItems = [
      { name: "M", value: { from: 9, to: 18 } },
      { name: "T", value: { from: 12, to: 20 } },
      { name: "T", value: { from: 9, to: 15 } },
      { name: "M", value: { from: 9, to: 13 } },
      { name: "M", value: { from: 13, to: 20 } }
    ]
    return (
      <div className="Graphs">
        <ContentHeader title="ADA INTERFACES / BRAND BOOK" date="2018" subclass="gray-text" />
        <div className="GraphsContainer md-grid">
          <Evaluation
            title="Expertise"
            description="Expertise levels"
            menuButton={menuButtonExpertise}
            items={itemsExpertise}
            className="Graphs-item md-cell md-cell--4"
          />
          <PieCircle
            title="Activities"
            description="Total Skills progress graph"
            items={itemsActivities}
            menuButton={menuButtonExpertise}
            className="Graphs-item md-cell md-cell--4"
          />
          <LogChart
            title="LogTime"
            description="weekly in and Out"
            items={LogTimeItems}
            menuButton={menuButtonExpertise}
            className="Graphs-item md-cell md-cell--4"
          />
          <Calendar title="Calendar" year={"2018"} className="Graphs-item md-cell md-cell--4" />
          <NewCalendar title="Calendar" year={"2018"} className="Graphs-item md-cell md-cell--4" />
          <NewChart menuButton={menuButtonExpertise} className="Graphs-item md-cell md-cell--4" />
        </div>
      </div>
    )
  }
}
