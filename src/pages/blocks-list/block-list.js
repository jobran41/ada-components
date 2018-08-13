import React, { Component } from "react"

import {
  ToDoList,
  UserList,
  ProjectList,
  TrackList,
  NotificationList,
  EventList,
  TrackInfo
} from "components/block-list"

export default class BlockList extends Component {
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
      },
      {
        title: "Task",
        description: "Lorem ipsum to do",
        checked: false
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
      }
    ]
    const itemsUserList = [
      {
        path: "",
        name: "Student Name",
        job: "web",
        notification: true
      },
      {
        path: "",
        name: "Student Name",
        job: "web",
        notification: true
      },
      {
        path: "",
        name: "Student Name",
        job: "web",
        notification: true
      },
      {
        path: "",
        name: "Student Name",
        job: "web",
        notification: true
      },
      {
        path: "",
        name: "Student Name",
        job: "web",
        notification: true
      },
      {
        path: "",
        name: "Student Name",
        job: "web",
        notification: true
      },
      {
        path: "",
        name: "Student Name",
        job: "web",
        notification: true
      },
      {
        path: "",
        name: "Student Name",
        job: "web",
        notification: true
      },
      {
        path: "",
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
          "http://via.placeholder.com/350x150",
          "http://via.placeholder.com/350x150"
        ],
        status: "2 Places left"
      },
      {
        color: "red",
        title: "Workshop 1",
        createdAt: "21 Oct",
        time: "12:37",
        avatars: [
          "http://via.placeholder.com/350x150",
          "http://via.placeholder.com/350x150"
        ],
        status: "2 Places left"
      },
      {
        color: "red",
        title: "Workshop 1",
        createdAt: "21 Oct",
        time: "12:37",
        avatars: [
          "http://via.placeholder.com/350x150",
          "http://via.placeholder.com/350x150"
        ],
        status: "2 Places left"
      },
      {
        color: "red",
        title: "Workshop 1",
        createdAt: "21 Oct",
        time: "12:37",
        avatars: [
          "http://via.placeholder.com/350x150",
          "http://via.placeholder.com/350x150"
        ],
        status: "2 Places left"
      },
      {
        color: "red",
        title: "Workshop 1",
        createdAt: "21 Oct",
        time: "12:37",
        avatars: [
          "http://via.placeholder.com/350x150",
          "http://via.placeholder.com/350x150"
        ],
        status: "2 Places left"
      },
      {
        color: "red",
        title: "Workshop 1",
        createdAt: "21 Oct",
        time: "12:37",
        avatars: [
          "http://via.placeholder.com/350x150",
          "http://via.placeholder.com/350x150"
        ],
        status: "2 Places left"
      },
      {
        color: "red",
        title: "Workshop 1",
        createdAt: "21 Oct",
        time: "12:37",
        avatars: [
          "http://via.placeholder.com/350x150",
          "http://via.placeholder.com/350x150"
        ],
        status: "2 Places left"
      }
    ]
    return (
      <div>
        <ToDoList
          title="To do list"
          description="Mon 20 January"
          items={itemsToDoList}
        />
        <UserList
          title="User list"
          description="These students can help you"
          items={itemsUserList}
        />
        <ProjectList
          title="Projects"
          description="All projects in progress"
          items={itemsProjectList}
        />
        <TrackList
          title="Recent Updates"
          description="Student’s recents achievements"
          menuButton={menuButtonExpertise}
          items={itemsTrackList}
        />
        <NotificationList
          title="Notifications"
          description="Mon 20 January"
          menuButton={menuButtonExpertise}
          items={itemsNotificationList}
        />
        <EventList
          title="Agenda"
          description="Weekly events"
          items={itemsEventList}
        />
        <TrackInfo
          imagePath="http://via.placeholder.com/350x150"
          title="Track"
          description="Project details and infomation"
          items={itemsTrackInfo}
          progress={50}
        />
      </div>
    )
  }
}
