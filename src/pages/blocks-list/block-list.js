import React, { Component } from "react"

import { ToDoList, UserList } from "components/block-list"

export default class BlockList extends Component {
  render() {
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
      </div>
    )
  }
}
