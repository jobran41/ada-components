import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Button } from "react-md"

import "./SideBar.scss"

export default class MenuList extends Component {
  renderPeople = () => {
    const { listPeople } = this.props
    if (Array.isArray(listPeople)) {
      let listPeopleLocal = listPeople.map((item, i) => {
        return <li key={i}>{item.name}</li>
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
        return <li key={i}>{item.name}</li>
      })
      return listRoomLocal
    } else {
      return []
    }
  };

  render() {
    const { colorBody, renderButton, icon } = this.props
    return (
      <div className={`SideBar-body ${colorBody ? colorBody : ''}`}>
        <Button flat iconBefore={false} iconClassName={` mdi ${icon}`} />
        <ul className="SideBar-block socialLink">{this.renderPeople()}</ul>
        <hr />
        <ul className="SideBar-block socialLink">{this.renderPeople()}</ul>
        <div className="SideBar-footer">
          {renderButton && renderButton()}
          <div className="addMore" onClick={this.addMore}>
            <Button flat onClick={this.addMore} iconBefore={false} iconClassName="mdi mdi-plus">
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
  renderButton: PropTypes.renderButton,
  icon: PropTypes.string
}