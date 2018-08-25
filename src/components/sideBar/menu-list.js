import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Button, Avatar } from "react-md"

import "./menu-list.scss"

export default class MenuList extends Component {
  renderPeople = () => {
    const { listPeople } = this.props
    if (Array.isArray(listPeople)) {
      let listPeopleLocal = listPeople.map((item, i) => {
        return <div className="listItem" key={i}>
          <Avatar
            src={item.urlImg}
          />
          <div className="name">{item.name}</div>
          <Button icon primary className="listItem-button">visibility</Button>
        </div>
      })
      return listPeopleLocal
    } else {
      return []
    }
  };
  addMore = () => {
    const { addMore } = this.props
    if (typeof addMore === 'function') {
      addMore()
    }
  }
  plus = () => {
    const { plus } = this.props
    if (typeof plus === 'function') {
      plus()
    }
  }
  renderRooms = () => {
    const { listRoom } = this.props
    if (Array.isArray(listRoom)) {
      let listRoomLocal = listRoom.map((item, i) => {
        return <div className="listItem" key={i}>
          <Avatar
            src={item.urlImg}
          />
          <div className="name">{item.name}</div>
        </div>
      })
      return listRoomLocal
    } else {
      return []
    }
  };

  render() {
    const { colorBody, renderButton, icon } = this.props 
    return (
      <div className={`SideMenuList ${colorBody || ''}`}>
        {icon ? 
          <Button onClick={this.plus} primary className="headerButton" icon iconClassName={` mdi ${icon}`} />
          : ""
        }
        <div className="menuListBlock">
          <div className="menuListBlock-header">
            <h4>Rooms</h4>
            <Button icon>add_circle_outline</Button>
          </div>
          {this.renderRooms()}
        </div>

        <div className="menuListBlock">
          <div className="menuListBlock-header">
            <h4>People</h4>
            <Button icon>add_circle_outline</Button>
          </div>
          {this.renderPeople()}
        </div>

        <div className="menuListFooter">
          {renderButton ? renderButton() : null}
          <div className="addMore">
            <Button flat iconBefore={false} onClick={this.addMore} iconClassName="mdi mdi-plus">
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
  renderButton: PropTypes.func,
  addMore: PropTypes.func,
  plus: PropTypes.func
}