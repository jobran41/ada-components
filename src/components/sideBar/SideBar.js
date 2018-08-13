import React, { Component } from "react"
import PropTypes from "prop-types"
import { LinearProgress, Avatar, Button } from "react-md"

import "./SideBar.scss"

class SideBar extends Component {

  renderBadges = () => {
    const { badges } = this.props
    if (Array.isArray(badges)) {
      let badgesLocal = badges.map((item, i) => {
        return (
          <Avatar key={i} className="SideBar-budges-avatar">
            {" "}
            {item}
          </Avatar>
        )
      })
      return badgesLocal
    } else {
      return []
    }
  };

  renderSocial = () => {
    const { social } = this.props
    if (Array.isArray(social)) {
      let socialLocal = social.map((item, i) => {
        return <li key={i}>{item}</li>
      })
      return socialLocal
    } else {
      return []
    }
  };

  isEmptyObject = obj => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return false
    }
    return true
  };
  render() {
    const {
      profileName,
      address,
      tel,
      Email,
      grade,
      ProgressBar: { level, indicatorMax, indicatorMin },
      className,
      responsive,
      renderButton,
      colorHeader,
      colorBody
    } = this.props
    return (
      <div className={`SideBar ${className}`}>
        <div className={`SideBar-header ${colorHeader ? colorHeader : ''}`}>
          <div className="SideBar-header-info">
            <div className="SideBar-header-avatar">
              <Avatar
                className="SideBar-avatar"
                src="http://i.pravatar.cc/150?img=11"
              />
            </div>
            <div className="SideBar-header-description">
              <h5>{profileName}</h5>
              <span>{address}</span>
              <p className="tel">{tel}</p>
              <p className="Email">{Email}</p>
            </div>

          </div>
          {!this.isEmptyObject(this.props.ProgressBar) &&
            typeof this.props.ProgressBar === "object" && (
              !(responsive === "md") && <div className="skillProgress">
                <LinearProgress
                  value={level || 0}
                  id="SideBar-LinearProgress"
                // style={{ height: 100, width: 20 }}
                //progressClassName="horizontale-progress"
                //progressStyle={value => ({ top: `${100 - value}%`, width: "100%" })}
                />
                <div className="LinearProgress-details">
                  <span>{indicatorMin} % Skills</span>
                  <span>{indicatorMax} %</span>
                </div>
              </div>
            )}
        </div>
        <div className={`SideBar-body ${colorBody ? colorBody : ''}`}>
          <ul className="SideBar-block socialLink">{this.renderSocial()}</ul>
          <hr />
          {!(responsive === "md") && <div className="SideBar-block-budges-grade">
            <div className="SideBar-block budges">
              <div className="budges-header">Badges</div>
              <div className="budges-container">{this.renderBadges()}</div>
            </div>
            <hr />
            <div className="SideBar-block grade">
              <h5>Grade</h5>
              <p>{grade}</p>
            </div>
            <hr />
          </div>
          }
          <div className="SideBar-footer">
            {renderButton && renderButton()}
            {!(responsive === "md") && <div className="addMore" onClick={this.addMore}>
              <Button flat onClick={this.addMore} iconBefore={false} iconClassName="mdi mdi-plus">
                Add more
              </Button>
            </div>}

          </div>

        </div>

      </div>
    )
  }
}

SideBar.propTypes = {
  ProgressBar: PropTypes.object,
  className: PropTypes.string,
  dataSideBar: PropTypes.object,
  logout: PropTypes.func,
  history: PropTypes.func,
  profileName: PropTypes.string,
  address: PropTypes.string,
  grade: PropTypes.string,
  tel: PropTypes.string,
  skillsName: PropTypes.string,
  Email: PropTypes.string,
  social: PropTypes.array,
  badges: PropTypes.array,
  renderButton: PropTypes.func,
  responsive: PropTypes.string,
  colorHeader: PropTypes.string,
  colorBody: PropTypes.string,
}

export default SideBar
