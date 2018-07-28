import React, { Component } from "react"

import {
  Evaluation,
  PieCircle,
  LogChart,
  Calendar,
  NewCalendar,
  NewChart
} from "components/charts"

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
        <Evaluation
          title="Expertise"
          description="Expertise levels"
          menuButton={menuButtonExpertise}
          items={itemsExpertise}
        />
        <PieCircle
          title="Activities"
          description="Total Skills progress graph"
          items={itemsActivities}
          menuButton={menuButtonExpertise}
        />
        <LogChart
          title="LogTime"
          description="weekly in and Out"
          items={LogTimeItems}
          menuButton={menuButtonExpertise}
        />
        <Calendar title="Calendar" year={"2018"} />
        <NewCalendar title="Calendar" year={"2018"} />
        <NewChart menuButton={menuButtonExpertise} />
      </div>
    )
  }
}
