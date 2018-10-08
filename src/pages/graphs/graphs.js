import React, { Component } from "react"
import ContentHeader from "components/content-header"

import {
  Evaluation,
  PieCircle,
  LogChart,
  Calendar,
  NewCalendar,
  NewChart
} from "components/charts"
import Docs from "components/docs"
import {
  docsPieCircle,
  docsNewChart,
  docsLogChart,
  docsEvaluation,
  docsNewCalendar,
  docsCalendar
} from "pages/docs-props"

import "./style.scss"

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
        <ContentHeader
          title="ADA INTERFACES / BRAND BOOK"
          date="2018"
          subclass="gray-text"
        />
        <div className="GraphsWrapper">
          <div className="Graphs-header">
            <h3>Graphs</h3>
            <h4>Basic graphs used across the dachboards</h4>
          </div>
          <div className="GraphsContainer md-grid">
            <div className="md-cell md-cell--3 Graphs-cell">
              <Docs
                title={"PieCircle"}
                docsProps={docsPieCircle}
                dataCode={`
                import {
                  PieCircle,
                } from "components/charts"
                const menuButtonExpertise = ["View", "Edit"]
                <PieCircle
                  title="Activities"
                  description="Total Skills progress graph"
                  items={itemsActivities}
                  menuButton={menuButtonExpertise}
                  className="Graphs-item"
                />
              `}
              >
                <PieCircle
                  title="Activities"
                  description="Total Skills progress graph"
                  items={itemsActivities}
                  menuButton={menuButtonExpertise}
                  className="Graphs-item"
                />
              </Docs>
              <Docs
                title={"NewChart"}
                docsProps={docsNewChart}
                dataCode={`
                import {
                  NewChart
                } from "components/charts"
                const menuButtonExpertise = ["View", "Edit"]
                <NewChart
                menuButton={menuButtonExpertise}
                className="Graphs-item"
              />`}
              >
                <NewChart
                  menuButton={menuButtonExpertise}
                  className="Graphs-item"
                />
              </Docs>
            </div>

            <div className="md-cell md-cell--3 Graphs-cell">
              <Docs
                title={"LogChart"}
                docsProps={docsLogChart}
                dataCode={`
                import {
                  LogChart
                } from "components/charts"
                const menuButtonExpertise = ["View", "Edit"]
                const LogTimeItems = [
                  { name: "M", value: { from: 9, to: 18 } },
                  { name: "T", value: { from: 12, to: 20 } },
                  { name: "T", value: { from: 9, to: 15 } },
                  { name: "M", value: { from: 9, to: 13 } },
                  { name: "M", value: { from: 13, to: 20 } }
                ]
                <LogChart
                  title="LogTime"
                  description="weekly in and Out"
                  items={LogTimeItems}
                  menuButton={menuButtonExpertise}
                  className="Graphs-item"
                />
              `}
              >
                <LogChart
                  title="LogTime"
                  description="weekly in and Out"
                  items={LogTimeItems}
                  menuButton={menuButtonExpertise}
                  className="Graphs-item"
                />
              </Docs>
            </div>

            <div className="md-cell md-cell--3 Graphs-cell">
              <Docs
                title={"Evaluation"}
                docsProps={docsEvaluation}
                dataCode={`
                import {
                  Evaluation,
                } from "components/charts"
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
                <Evaluation
                  title="Expertise"
                  description="Expertise levels"
                  menuButton={menuButtonExpertise}
                  items={itemsExpertise}
                  className="Graphs-item"
                />
              `}
              >
                <Evaluation
                  title="Expertise"
                  description="Expertise levels"
                  menuButton={menuButtonExpertise}
                  items={itemsExpertise}
                  className="Graphs-item"
                />
              </Docs>
            </div>

            <div className="md-cell md-cell--3 Graphs-cell">
              <Docs
                title={"NewCalendar"}
                docsProps={docsNewCalendar}
                dataCode={`
                import {
                  NewChart
                } from "components/charts"
                <NewCalendar
                  title="Calendar"
                  year={"2018"}
                  className="Graphs-item "
                />
              `}
              >
                <NewCalendar
                  title="Calendar"
                  year={"2018"}
                  className="Graphs-item "
                />
              </Docs>
              <Docs
                title={"Calendar"}
                docsProps={docsCalendar}
                dataCode={`
                import {
                  Calendar
                } from "components/charts"
                <Calendar
                className="Graphs-item"
              />
              `}
              >
                <Calendar className="Graphs-item" />
              </Docs>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
