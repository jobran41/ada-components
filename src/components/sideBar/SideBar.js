import React, { Component } from "react"
import PropTypes from "prop-types"
import { LinearProgress, Avatar, Button } from "react-md"

import PanelProfile from 'components/panel-profile'

import "./SideBar.scss"

class SideBar extends Component {

  addMore = () => {
    const { addMore } = this.props
    if (typeof addMore === 'function') {
      addMore()
    }
  }

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
  }

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
      colorBody,
      urlImg
    } = this.props
    return (
      <div className={`SideBar ${className + ' ' + colorBody}`}>
        <div className={`SideBar-header ${colorHeader ? colorHeader : ''}`}>
          <PanelProfile
            urlImg={urlImg}
            profileName={profileName}
            address={address}
            tel={tel}
            Email={Email}
            className={responsive ? "small-header" + className : className }
            responsive={responsive}
            colorHeader={colorHeader}
          />
          {!responsive && !this.isEmptyObject(this.props.ProgressBar) &&
            typeof this.props.ProgressBar === "object" && (
              !responsive && <div className="skillProgress">
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
          {!responsive && <div><ul className="SideBar-block socialLink">{this.renderSocial()}</ul> <hr /></div>}
          {!responsive && <div className="SideBar-block-budges-grade">
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
          <div className={responsive ? "" : "SideBar-footer" }>
            {renderButton && renderButton()}
            {!responsive && <div className="addMore" onClick={this.addMore}>
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
  responsive: PropTypes.bool,
  colorHeader: PropTypes.string,
  colorBody: PropTypes.string,
  urlImg: PropTypes.string,
  addMore: PropTypes.func
}

export default SideBar
