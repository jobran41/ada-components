import React, { Component } from "react"
import ContentHeader from 'components/content-header'

import {
  ToDoList,
  UserList,
  ProjectList,
  TrackList,
  NotificationList,
  EventList,
  TrackInfo
} from "components/block-list"

import './style.scss'

export default class BlockList extends Component {
  onAddProject() {
    alert("Action button")
  }
  render() {
    const menuButtonExpertise = ["View", "Edit"]
    const itemsToDoList = [
      {
        title: "Task",
        description: "Lorem ipsum to do",
        checked: true
      },
      {
        title: "Task",
        description: "Lorem ipsum to do",
        checked: false
      },
      {
        title: "Task",
        description: "Lorem ipsum to do",
        checked: true
      },
      {
        title: "Task",
        description: "Lorem ipsum to do",
        checked: true
      },
      {
        title: "Task",
        description: "Lorem ipsum to do",
        checked: true
      },
      {
        title: "Task",
        description: "Lorem ipsum to do",
        checked: false
      }
    ]
    const itemsUserList = [
      {
        path: "http://i.pravatar.cc/150?img=3",
        name: "Student Name",
        job: "web",
        notification: true
      },
      {
        path: "http://i.pravatar.cc/150?img=68",
        name: "Student Name",
        job: "web",
        notification: false
      },
      {
        path: "http://i.pravatar.cc/150?img=49",
        name: "Student Name",
        job: "web",
        notification: true
      },
      {
        path: "http://i.pravatar.cc/150?img=36",
        name: "Student Name",
        job: "web",
        notification: false
      },
      {
        path: "http://i.pravatar.cc/150?img=33",
        name: "Student Name",
        job: "web",
        notification: true
      },
      {
        path: "http://i.pravatar.cc/150?img=12",
        name: "Student Name",
        job: "web",
        notification: true
      }
    ]
    const itemsProjectList = [
      {
        label: "Project 1",
        value: 52
      },
      {
        label: "Project 2",
        value: 30
      },
      {
        label: "Project 1",
        value: 52
      },
      {
        label: "Project 1",
        value: 52
      },
      {
        label: "Project 1",
        value: 42
      },
      {
        label: "Project 1",
        value: 52
      },
      {
        label: "Project 1",
        value: 52
      },
      {
        label: "Project 1",
        value: 72
      }
    ]
    const itemsTrackList = [
      {
        label: "Skill Done",
        value: "80%"
      },
      {
        label: "Wallet",
        value: "100$"
      },
      {
        label: "Tracks",
        value: "Game"
      },
      {
        label: "Time",
        value: "85 Hours"
      },
      {
        label: "Contract",
        value: "Game track,3 months"
      }
    ]
    const itemsNotificationList = [
      {
        numberOfNotification: 2,
        label: "Lorem ipsum",
        description: "Ac ne quis a nobis hoc",
        createdDate: "12:37"
      },
      {
        numberOfNotification: 1,
        label: "Lorem ipsum",
        description: "Ac ne quis a nobis hoc",
        createdDate: "12:37"
      },
      {
        numberOfNotification: 16,
        label: "Lorem ipsum",
        description: "Ac ne quis a nobis hoc",
        createdDate: "12:37"
      }
    ]
    const itemsEventList = [
      {
        label: "nobis hoc",
        description: "Ac ne quis a nobis hoc",
        createdDate: {
          day: 13,
          month: "January",
          time: "12:37"
        }
      },
      {
        label: "nobis hoc",
        description: "Ac ne quis a nobis hoc",
        createdDate: {
          day: 13,
          month: "January",
          time: "12:37"
        }
      },
      {
        label: "nobis hoc",
        description: "Ac ne quis a nobis hoc",
        createdDate: {
          day: 13,
          month: "January",
          time: "12:37"
        }
      },
      {
        label: "nobis hoc",
        description: "Ac ne quis a nobis hoc",
        createdDate: {
          day: 13,
          month: "January",
          time: "12:37"
        }
      }
    ]
    const itemsTrackInfo = [
      {
        color: "red",
        title: "Workshop 1",
        createdAt: "21 Oct",
        time: "12:37",
        avatars: [
          "http://i.pravatar.cc/150?img=25",
          "http://i.pravatar.cc/150?img=68",
          "http://i.pravatar.cc/150?img=3",
          "http://i.pravatar.cc/150?img=12"
        ],
        status: "Closed"
      },
      {
        color: "red",
        title: "Workshop 1",
        createdAt: "21 Oct",
        time: "12:37",
        avatars: [
          "http://i.pravatar.cc/150?img=49",
          "http://i.pravatar.cc/150?img=36"
        ],
        status: "2 Places left"
      },
      {
        color: "red",
        title: "Workshop 1",
        createdAt: "21 Oct",
        time: "12:37",
        avatars: [
          "http://i.pravatar.cc/150?img=33"
        ],
        status: "3 Places left"
      },
      {
        color: "red",
        title: "Workshop 1",
        createdAt: "21 Oct",
        time: "12:37",
        avatars: [
          "http://i.pravatar.cc/150?img=12",
          "http://i.pravatar.cc/150?img=11",
          "http://i.pravatar.cc/150?img=56"
        ],
        status: "1 Places left"
      },
      {
        color: "red",
        title: "Workshop 1",
        createdAt: "21 Oct",
        time: "12:37",
        avatars: [
          "http://i.pravatar.cc/150?img=3",
          "http://i.pravatar.cc/150?img=49"
        ],
        status: "2 Places left"
      },
      {
        color: "red",
        title: "Workshop 1",
        createdAt: "21 Oct",
        time: "12:37",
        avatars: [
          "http://i.pravatar.cc/150?img=68",
          "http://i.pravatar.cc/150?img=25"
        ],
        status: "2 Places left"
      },
      {
        color: "red",
        title: "Workshop 1",
        createdAt: "21 Oct",
        time: "12:37",
        avatars: [
          "http://i.pravatar.cc/150?img=33",
          "http://i.pravatar.cc/150?img=12",
          "http://i.pravatar.cc/150?img=49"
        ],
        status: "1 Places left"
      }
    ]
    return (
      <div className="blocklist">
        <ContentHeader title="ADA INTERFACES / BRAND BOOK" date="2018" subclass="gray-text" />
        <div className="blocklistContainer md-grid">
          <div className="blocklist-cell md-cell md-cell--3">
            <h3><strong>Text blocks & lists</strong></h3>
            <ToDoList
              title="To do list"
              description="Mon 20 January"
              items={itemsToDoList}
              className="blocklist-item"
              menuButton={menuButtonExpertise}
            />
            <NotificationList
              title="Notifications"
              description="Mon 20 January"
              menuButton={menuButtonExpertise}
              items={itemsNotificationList}
              className="blocklist-item"
            />
          </div>

          <div className="blocklist-cell md-cell md-cell--3">
          <UserList
            title="User list"
            description="These students can help you"
            items={itemsUserList}
            className="blocklist-item"
            menuButton={menuButtonExpertise}
          />
          <EventList
            title="Agenda"
            description="Weekly events"
            items={itemsEventList}
            className="blocklist-item"
            onAddEvent
          />
          </div>
          
          <div className="blocklist-cell md-cell md-cell--6">
            <h3 className="rightText">Text Blocks & Content list</h3>
            <div className="blocklist-grid md-grid">
             <div className="blocklist-cell md-cell md-cell--6">
              <TrackList
                title="Recent Updates"
                description="Student’s recents achievements"
                menuButton={menuButtonExpertise}
                items={itemsTrackList}
                className="blocklist-item"
              />
             </div>
             <div className="blocklist-cell md-cell md-cell--6">
             <ProjectList
                title="Projects"
                description="All projects in progress"
                items={itemsProjectList}
                className="blocklist-item"
                onAddProject
              />
             </div>
            </div>
            <div className="blocklist-cell md-cell md-cell--12">
              <TrackInfo
                imagePath="https://picsum.photos/300/200?image=1"
                title="Track"
                description="Project details and infomation"
                items={itemsTrackInfo}
                progress={50}
                className="blocklist-item"
                menuButton={menuButtonExpertise}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
