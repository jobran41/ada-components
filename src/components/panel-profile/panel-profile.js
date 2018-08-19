import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types"
import { Avatar, Button } from "react-md"

import './panel-profile.scss'

export default class PanelProfile extends Component {
  handleDetails = () => {
    const { handleDetails } = this.props
    if (typeof details === "function") {
      handleDetails()
    }
  }
  render() {
    const {
      profileName,
      address,
      tel,
      Email,
      className,
      responsive,
      colorHeader,
      urlImg,
      details,
      description
    } = this.props
    return (
      <div className={`${colorHeader ? colorHeader + '-header PanelProfile-header ' + className : 'PanelProfile-header ' + className}`}>
        <div className={`PanelProfile-header-info`}>
          <div className="PanelProfile-header-avatar">
            <Avatar
              className="PanelProfile-avatar"
              src={urlImg}
            />
          </div>
          <div className="PanelProfile-header-description">
            <h5>{profileName}</h5>
            {!(responsive === "md") &&
              <Fragment>
                <span>{address}</span>
                <p className="tel">{tel}</p>
                <p className="Email">{Email}</p>
              </Fragment>
            }
            {description && <p className="Email">{description}</p>}
          </div>
        </div>
        {details && <Button flat onClick={this.handleDetails} className="button">Details</Button>}
      </div>
    )
  }
}
PanelProfile.propTypes = {
  className: PropTypes.string,
  profileName: PropTypes.string,
  address: PropTypes.string,
  tel: PropTypes.string,
  Email: PropTypes.string,
  responsive: PropTypes.string,
  colorHeader: PropTypes.string,
  urlImg: PropTypes.string,
  handleDetails: PropTypes.func,
  details: PropTypes.bool,
  description: PropTypes.string
}