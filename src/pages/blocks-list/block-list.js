import React, { Component } from "react"
import ContentHeader from "components/content-header"
import {
  docsToDoList,
  docsNotificationList,
  docsComments,
  docsPersonalInfo,
  docsChatList,
  docsUserList,
  docsEventList,
  docsReviews,
  docsFilters,
  docsTrackList,
  docsRating,
  docsProjectList,
  docsTimer,
  docsTrackInfo,
  docsDownload,
  docsGift,
  docsDiscover,
  docsUpload,
  docsContainerTab,
  docsInterests
} from "pages/docs-props"

import {
  ToDoList,
  UserList,
  ProjectList,
  TrackList,
  NotificationList,
  EventList,
  TrackInfo
} from "components/block-list"
import {
  Comment,
  Timer,
  Rating,
  Reviews,
  Download,
  Upload,
  Filters,
  PersonalInfo,
  Gift,
  ChatList,
  //ChatBox,
  Interests,
  Discover,
  ContainerTab,
  Tab
} from "components/text-block"
import Docs from "components/docs"

import "./style.scss"

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
        avatars: ["http://i.pravatar.cc/150?img=33"],
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
    const commentItems = [
      {
        path: "http://i.pravatar.cc/150?img=33",
        name: "Student Name",
        createdDate: "2 Month ago",
        description: "lorem ipsum dolerm tsoun dfrizer uplod ishler conita"
      },
      {
        path: "http://i.pravatar.cc/150?img=11",
        name: "Student Name",
        createdDate: "2 Month ago",
        description: "lorem ipsum dolerm tsoun dfrizer uplod ishler conita"
      },
      {
        path: "http://i.pravatar.cc/150?img=65",
        name: "Student Name",
        createdDate: "2 Month ago",
        description: "lorem ipsum dolerm tsoun dfrizer uplod ishler conita"
      },
      {
        path: "http://i.pravatar.cc/150?img=12",
        name: "Student Name",
        createdDate: "2 Month ago",
        description: "lorem ipsum dolerm tsoun dfrizer uplod ishler conita"
      }
    ]
    const ratingItems = [
      {
        star: 5,
        number: 123,
        value: 40
      },
      {
        star: 5,
        number: 123,
        value: 40
      },
      {
        star: 5,
        number: 123,
        value: 40
      },
      {
        star: 5,
        number: 123,
        value: 40
      },
      {
        star: 5,
        number: 123,
        value: 40
      }
    ]
    const FiltersItems = [
      {
        min: -100,
        max: 100,
        value: 50
      },
      {
        min: -100,
        max: 100,
        value: 50
      },
      {
        min: -100,
        max: 100,
        value: 50
      },
      {
        min: -100,
        max: 100,
        value: 50
      },
      {
        min: -100,
        max: 100,
        value: 50
      }
    ]
    const userObject = {
      name: "Student Name",
      points: 741,
      maxPoints: 1000,
      path: "http://i.pravatar.cc/150?img=49",
      percent: 70
    }
    const itemsChatList = [
      {
        name: "Student Name",
        path: "http://i.pravatar.cc/150?img=49",
        status: "onLine"
      },
      {
        name: "Student Name",
        path: "http://i.pravatar.cc/150?img=33",
        status: "offLine"
      },
      {
        name: "Student Name",
        path: "http://i.pravatar.cc/150?img=25",
        status: "onLine"
      },
      {
        name: "Student Name",
        path: "http://i.pravatar.cc/150?img=12",
        status: "offLine"
      },
      {
        name: "Student Name",
        path: "http://i.pravatar.cc/150?img=3",
        status: "onLine"
      },
      {
        name: "Student Name",
        path: "http://i.pravatar.cc/150?img=11",
        status: "offLine"
      },
      {
        name: "Student Name",
        path: "http://i.pravatar.cc/150?img=69",
        status: "onLine"
      }
    ]
    const interestsItems = [
      {
        label: "Gaming",
        className: "customClassName",
        classNameActive: "orange"
      },
      {
        label: "Techno",
        className: "customClassName",
        classNameActive: "blue"
      },
      {
        label: "Web",
        classNameActive: "green"
      },
      {
        label: "Web design",
        classNameActive: "purple"
      },
      {
        label: "3D",
        classNameActive: "grey"
      },
      {
        label: "Html",
        classNameActive: "red"
      },
      {
        label: "Javascript",
        classNameActive: "orange"
      },
      {
        label: "Gaming",
        classNameActive: "grey"
      },
      {
        label: "web",
        classNameActive: "blue"
      }
    ]
    /*const itemsChatBox = {
      members: [],
      chats: []
    }*/
    const lorem = `Elit cupidatat excepteur ullamco labore exercitation amet consectetur. Sunt duis ipsum voluptate commodo ipsum mollit quis elit tempor anim eiusmod aliqua. Elit sint minim eiusmod consectetur cillum aliqua est exercitation. Amet anim occaecat excepteur velit. Fugiat id consequat cillum non quis nisi anim non magna proident fugiat magna duis.`

    return (
      <div className="blocklist">
        <ContentHeader
          title="ADA INTERFACES / BRAND BOOK"
          date="2018"
          subclass="gray-text"
        />
        <div className="blocklistContainer md-grid">
          <div className="blocklist-cell md-cell md-cell--3">
            <h3>
              <strong>Text blocks & lists</strong>
            </h3>
            <Docs
              title={"ToDoList"}
              docsProps={docsToDoList}
              dataCode={`
              <ToDoList
              title="To do list"
              description="Mon 20 January"
              items={itemsToDoList}
              className="blocklist-item"
              menuButton={menuButtonExpertise}
            />`}
            >
              <ToDoList
                title="To do list"
                description="Mon 20 January"
                items={itemsToDoList}
                className="blocklist-item"
                menuButton={menuButtonExpertise}
              />
            </Docs>
            <Docs
              title={"NotificationList"}
              docsProps={docsNotificationList}
              dataCode={`
              <NotificationList
              title="Notifications"
              description="Mon 20 January"
              menuButton={menuButtonExpertise}
              items={itemsNotificationList}
              className="blocklist-item"
            />`}
            >
              <NotificationList
                title="Notifications"
                description="Mon 20 January"
                menuButton={menuButtonExpertise}
                items={itemsNotificationList}
                className="blocklist-item"
              />
            </Docs>
            <Docs
              title={"Comments"}
              docsProps={docsComments}
              dataCode={`
              <Comment
              title="Comments"
              description="4 Comments"
              items={commentItems}
              currentUser={{ path: "http://i.pravatar.cc/150?img=3" }}
              className="blocklist-item"
            />`}
            >
              <Comment
                title="Comments"
                description="4 Comments"
                items={commentItems}
                currentUser={{ path: "http://i.pravatar.cc/150?img=3" }}
                className="blocklist-item"
              />
            </Docs>
            <Docs
              title={"PersonalInfo"}
              docsProps={docsPersonalInfo}
              dataCode={`
              <PersonalInfo
              userObject={userObject}
              menuButton={menuButtonExpertise}
              className="blocklist-item"
            />`}
            >
              <PersonalInfo
                userObject={userObject}
                menuButton={menuButtonExpertise}
                className="blocklist-item"
              />
            </Docs>
            <Docs
              title={"Gift"}
              docsProps={docsGift}
              dataCode={`
              <Gift
              title="New Arrivals !"
              message="See how they are"
              icon="mdi-bike"
              theme="blue"
              className="blocklist-item"
              linkObject={{ title: "Say Hello", position: "center" }}
            />`}
            >
              <Gift
                title="New Arrivals !"
                message="See how they are"
                icon="mdi-bike"
                theme="blue"
                className="blocklist-item"
                linkObject={{ title: "Say Hello", position: "center" }}
              />
            </Docs>
            <Docs
              title={"Gift"}
              docsProps={docsGift}
              dataCode={`
              <Gift
              title="New Arrivals !"
              message="See how they are"
              icon="mdi-bike"
              theme="blue"
              className="blocklist-item"
              linkObject={{ title: "Say Hello", position: "center" }}
            />`}
            >
              <Gift
                title="Product 2"
                message="species matrimonii, dotis"
                className="blocklist-item"
                avatar={{
                  path:
                    "https://imgplaceholder.com/100x100/1876d1/ffffff/fa-image"
                }}
                linkObject={{ title: "Details", position: "right" }}
              />
            </Docs>
            <Docs
              title={"ChatList"}
              docsProps={docsChatList}
              dataCode={`
              <ChatList
              title="Chat List"
              className="blocklist-item"
              description="Chat with other students"
              items={itemsChatList}
              menuButton={menuButtonExpertise}
            />`}
            >
              <ChatList
                title="Chat List"
                className="blocklist-item"
                description="Chat with other students"
                items={itemsChatList}
                menuButton={menuButtonExpertise}
              />
            </Docs>
          </div>

          <div className="blocklist-cell md-cell md-cell--3">
            <Docs
              title={"UserList"}
              docsProps={docsUserList}
              dataCode={`
              <UserList
              title="User list"
              description="These students can help you"
              items={itemsUserList}
              className="blocklist-item"
              menuButton={menuButtonExpertise}
            />`}
            >
              <UserList
                title="User list"
                description="These students can help you"
                items={itemsUserList}
                className="blocklist-item"
                menuButton={menuButtonExpertise}
              />
            </Docs>
            <Docs
              title={"EventList"}
              docsProps={docsEventList}
              dataCode={`
              <EventList
              title="Agenda"
              description="Weekly events"
              items={itemsEventList}
              className="blocklist-item"
              onAddEvent={() => {}}
            />`}
            >
              <EventList
                title="Agenda"
                description="Weekly events"
                items={itemsEventList}
                className="blocklist-item"
                onAddEvent={() => {}}
              />
            </Docs>
            <Docs
              title={"Reviews"}
              docsProps={docsReviews}
              dataCode={`
              <Reviews
              title="Reviews"
              className="blocklist-item"
              negativePorcentage={15}
              positivePorcentage={75}
            />`}
            >
              <Reviews
                title="Reviews"
                className="blocklist-item"
                negativePorcentage={15}
                positivePorcentage={75}
              />
            </Docs>
            <Docs
              title={"Filters"}
              docsProps={docsFilters}
              dataCode={`
              <Filters
              className="blocklist-item"
              title="Filters"
              items={FiltersItems}
              menuButton={menuButtonExpertise}
            />`}
            >
              <Filters
                className="blocklist-item"
                title="Filters"
                items={FiltersItems}
                menuButton={menuButtonExpertise}
              />
            </Docs>
            <Docs
              title={"Gift"}
              docsProps={docsGift}
              dataCode={`
              <Gift
              title="New Arrivals !"
              message="See how they are"
              icon="mdi-bike"
              theme="blue"
              className="blocklist-item"
              linkObject={{ title: "Say Hello", position: "center" }}
            />`}
            >
              <Gift
                title="Awesome!"
                message="You've reached the first level."
                icon="mdi-gift"
                theme="light"
                className="blocklist-item"
                linkObject={{ title: "See Gifts", position: "center" }}
              />
            </Docs>
            <Docs
              title={"Gift"}
              docsProps={docsGift}
              dataCode={`
              <Gift
              title="New Arrivals !"
              message="See how they are"
              icon="mdi-bike"
              theme="blue"
              className="blocklist-item"
              linkObject={{ title: "Say Hello", position: "center" }}
            />`}
            >
              <Gift
                title="Product 1"
                message="species matrimonii, dotis"
                className="blocklist-item"
                avatar={{
                  path: "http://placehold.jp/1876d1/ffffff/150x150.png"
                }}
                linkObject={{ title: "Details", position: "right" }}
              />
            </Docs>
            <Docs
              title={"Gift"}
              docsProps={docsGift}
              dataCode={`
              <Gift
              title="New Arrivals !"
              message="See how they are"
              icon="mdi-bike"
              theme="blue"
              className="blocklist-item"
              linkObject={{ title: "Say Hello", position: "center" }}
            />`}
            >
              <Gift
                title="1 New update"
                icon="mdi-puzzle"
                theme="blue"
                className="blocklist-item"
                linkObject={{ title: "Continue", position: "center" }}
              />
            </Docs>
            {/*<ChatBox
              title="Chat box 1"
              className="blocklist-item"
              items={itemsChatBox}
            />*/}
          </div>

          <div className="blocklist-cell md-cell md-cell--6">
            <h3 className="rightText">Text Blocks & Content list</h3>
            <div className="blocklist-grid md-grid">
              <div className="blocklist-cell md-cell md-cell--6">
                <Docs
                  title={"TrackList"}
                  docsProps={docsTrackList}
                  dataCode={`
              <TrackList
                  title="Recent Updates"
                  description="Student’s recents achievements"
                  menuButton={menuButtonExpertise}
                  items={itemsTrackList}
                  className="blocklist-item"
                />`}
                >
                  <TrackList
                    title="Recent Updates"
                    description="Student’s recents achievements"
                    menuButton={menuButtonExpertise}
                    items={itemsTrackList}
                    className="blocklist-item"
                  />
                </Docs>
                <Docs
                  title={"Rating"}
                  docsProps={docsRating}
                  dataCode={`<Rating
              title="Rating"
              items={ratingItems}
              average={"4.7"}
              cumulates={"0.4"}
              className="blocklist-item"
            />`}
                >
                  <Rating
                    title="Rating"
                    items={ratingItems}
                    average={"4.7"}
                    cumulates={"0.4"}
                    className="blocklist-item"
                  />
                </Docs>
              </div>
              <div className="blocklist-cell md-cell md-cell--6">
                <Docs
                  title={"ProjectList"}
                  docsProps={docsProjectList}
                  dataCode={`<ProjectList
              title="Projects"
              description="All projects in progress"
              items={itemsProjectList}
              className="blocklist-item"
              onAddProject={() => {}}
            />`}
                >
                  <ProjectList
                    title="Projects"
                    description="All projects in progress"
                    items={itemsProjectList}
                    className="blocklist-item"
                    onAddProject={() => {}}
                  />
                </Docs>
                <Docs
                  title={"Timer"}
                  docsProps={docsTimer}
                  dataCode={`<Timer className="blocklist-item" />`}
                >
                  <Timer className="blocklist-item" />
                </Docs>
              </div>
            </div>
            <div className="blocklist-cell md-cell md-cell--12">
              <Docs
                title={"TrackInfo"}
                docsProps={docsTrackInfo}
                dataCode={`<TrackInfo
              imagePath="https://picsum.photos/300/200?image=1"
              title="Track"
              description="Project details and infomation"
              items={itemsTrackInfo}
              progress={50}
              className="blocklist-item"
              menuButton={menuButtonExpertise}
            />`}
              >
                <TrackInfo
                  imagePath="https://picsum.photos/300/200?image=1"
                  title="Track"
                  description="Project details and infomation"
                  items={itemsTrackInfo}
                  progress={50}
                  className="blocklist-item"
                  menuButton={menuButtonExpertise}
                />
              </Docs>
            </div>
            <div className="blocklist-grid md-grid">
              <div className="blocklist-cell md-cell md-cell--6">
                <Docs
                  title={"Download"}
                  docsProps={docsDownload}
                  dataCode={`<Download
              fileSize={"700"}
              typeFile={"ZIP"}
              filePath={""}
              className="blocklist-item"
            />`}
                >
                  <Download
                    fileSize={"700"}
                    typeFile={"ZIP"}
                    filePath={""}
                    className="blocklist-item"
                  />
                </Docs>
                <Docs
                  title={"Gift"}
                  docsProps={docsGift}
                  dataCode={`
              <Gift
              title="New Arrivals !"
              message="See how they are"
              icon="mdi-bike"
              theme="blue"
              className="blocklist-item"
              linkObject={{ title: "Say Hello", position: "center" }}
            />`}
                >
                  <Gift
                    title="Any Idea ?"
                    message="Note all your great ideas"
                    icon="mdi-lightbulb-on-outline"
                    theme="dark"
                    className="blocklist-item"
                    linkObject={{ title: "Make a note", position: "center" }}
                  />
                </Docs>
                <Docs
                  title={"Gift"}
                  docsProps={docsGift}
                  dataCode={`
              <Gift
              title="New Arrivals !"
              message="See how they are"
              icon="mdi-bike"
              theme="blue"
              className="blocklist-item"
              linkObject={{ title: "Say Hello", position: "center" }}
            />`}
                >
                  <Gift
                    title="Product 3"
                    message="species matrimonii, dotis"
                    className="blocklist-item"
                    avatar={{
                      path:
                        "https://imgplaceholder.com/100x100/1de9b6/ffffff/fa-image"
                    }}
                    linkObject={{ title: "Details", position: "right" }}
                  />
                </Docs>
                <Docs
                  title={"Discover"}
                  docsProps={docsDiscover}
                  dataCode={`
              <Discover
                  title="Discover"
                  description="Find someone to follow"
                  className="blocklist-item"
                  items={itemsUserList}
                  menuButton={menuButtonExpertise}
                />`}
                >
                  <Discover
                    title="Discover"
                    description="Find someone to follow"
                    className="blocklist-item"
                    items={itemsUserList}
                    menuButton={menuButtonExpertise}
                  />
                </Docs>
              </div>
              <div className="blocklist-cell md-cell md-cell--6">
                <Docs
                  title={"Upload"}
                  docsProps={docsUpload}
                  dataCode={`<Upload fileSize={"700"} className="blocklist-item" />`}
                >
                  <Upload fileSize={"700"} className="blocklist-item" />
                </Docs>
                <Docs
                  title={"Gift"}
                  docsProps={docsGift}
                  dataCode={`
              <Gift
              title="New Arrivals !"
              message="See how they are"
              icon="mdi-bike"
              theme="blue"
              className="blocklist-item"
              linkObject={{ title: "Say Hello", position: "center" }}
            />`}
                >
                  <Gift
                    title="Great work !"
                    className="blocklist-item"
                    message="Project finished"
                    theme="light"
                    icon="mdi-trophy-outline"
                  />
                </Docs>
                <Docs
                  title={"Gift"}
                  docsProps={docsGift}
                  dataCode={`
              <Gift
              title="New Arrivals !"
              message="See how they are"
              icon="mdi-bike"
              theme="blue"
              className="blocklist-item"
              linkObject={{ title: "Say Hello", position: "center" }}
            />`}
                >
                  <Gift
                    title="Save your data"
                    message="Don't forget to save your data"
                    icon="mdi-content-save"
                    theme="green"
                    className="blocklist-item"
                    linkObject={{ title: "Save now", position: "center" }}
                  />
                </Docs>
                <Docs
                  title={"ContainerTab"}
                  docsProps={docsContainerTab}
                  dataCode={`
              <ContainerTab className="blocklist-item">
                  <Tab label="Tab 1">{lorem}</Tab>
                  <Tab label="Tab 2">{lorem}</Tab>
                  <Tab label="Tab 3">{lorem}</Tab>
                  <Tab label="Tab 4">{lorem}</Tab>
                </ContainerTab>`}
                >
                  <ContainerTab className="blocklist-item">
                    <Tab label="Tab 1">{lorem}</Tab>
                    <Tab label="Tab 2">{lorem}</Tab>
                    <Tab label="Tab 3">{lorem}</Tab>
                    <Tab label="Tab 4">{lorem}</Tab>
                  </ContainerTab>
                </Docs>
                <Docs
                  title={"Interests"}
                  docsProps={docsInterests}
                  dataCode={`
              <Interests
                  items={interestsItems}
                  className="blocklist-item"
                  title="Choose your interest"
                />`}
                >
                  <Interests
                    items={interestsItems}
                    className="blocklist-item"
                    title="Choose your interest"
                  />
                </Docs>
              </div>
            </div>
          </div>
        </div>
        {/*
        
       
        
        
        
        
        */}
      </div>
    )
  }
}
