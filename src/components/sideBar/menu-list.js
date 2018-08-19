import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Button, Avatar } from "react-md"

import "./SideBar.scss"

export default class MenuList extends Component {
  renderPeople = () => {
    const { listPeople } = this.props
    if (Array.isArray(listPeople)) {
      let listPeopleLocal = listPeople.map((item, i) => {
        return <li key={i}>
          <Avatar
            src={item.urlImg}
          />
          {item.name}
        </li>
      })
      return listPeopleLocal
    } else {
      return []
    }
  };

  renderRooms = () => {
    const { listRoom } = this.props
    if (Array.isArray(listRoom)) {
      let listRoomLocal = listRoom.map((item, i) => {
        return <li key={i}>
          <Avatar
            src={item.urlImg}
          />
          {item.name}
        </li>
      })
      return listRoomLocal
    } else {
      return []
    }
  };

  render() {
    const { colorBody, renderButton, icon } = this.props
    console.log(colorBody, renderButton, icon)
    return (
      <div className={`SideBar-body ${colorBody || null}`}>
        <Button flat iconBefore={false} iconClassName={` mdi ${icon || null}`} />
        <h4>Rooms</h4>
        <ul className="SideBar-block socialLink">{this.renderPeople()}</ul>
        <hr />
        <h4>People</h4>
        <ul className="SideBar-block socialLink">{this.renderPeople()}</ul>
        <div className="SideBar-footer">
          {renderButton ? renderButton() : null}
          <div className="addMore">
            <Button flat iconBefore={false} iconClassName="mdi mdi-plus">
              Add more
          </Button>
          </div>
        </div>
      </div>
    )
  }
}

MenuList.propTypes = {
  listPeople: PropTypes.array,
  listRoom: PropTypes.array,
  colorBody: PropTypes.string,
  icon: PropTypes.string,
  renderButton: PropTypes.func
}