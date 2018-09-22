import React, { Component } from 'react'
import PropTypes from "prop-types"


import './support-assets.scss'

export default class SupportAssets extends Component {
  handleclassName = () => {
    const {
      className,
      responsive
    } = this.props
    if (responsive && className) {
      return (
        "support-asset smallWapper " + className
      )
    } else if (responsive && !className) {
      return "support-asset smallWapper"
    }
    else if (!responsive && className) {
      return "support-asset " + className
    }
    else {
      return "support-asset"
    }
  }
  render() {
    const { type, url, title, description, autoplay, playListKey, poster, actionButton } = this.props
    const autoplayVideo = autoplay ? "?autoplay=1" : null
    const playlist = playListKey ? `?playlist=${playListKey}&loop=1` : null
    return (
      <div className={this.handleclassName()}>
        {type === "video" && url.includes(".mp4") &&
          <video controls
            src={url}
            poster={poster}
          >
          </video>
        }
        {type === "video" && url.includes("youtube.com") && !playlist &&
          <iframe title="myFrame"
            src={url + autoplayVideo}>
          </iframe>
        }
        {type === "video" && url.includes("youtube.com") && playlist &&
          <iframe title="myFrame"
            src={url + playlist}>
          </iframe>
        }
        {type === "img" &&
          <React.Fragment>
            <div className="imageWapper">
              <img src={url} alt="title" />
            </div>
            <div className="info">
              <div className="name">{title}</div>
              <div>{description}</div>
              <div className="plusButton">{actionButton && actionButton()}</div>
            </div>

          </React.Fragment>}
      </div>
    )
  }
}
SupportAssets.propTypes = {
  type: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  autoplay: PropTypes.bool,
  className: PropTypes.string,
  actionButton: PropTypes.node,
  poster: PropTypes.string,
  responsive: PropTypes.bool,
  playListKey: PropTypes.string
}
/** playListKey=tgbNymZ7vqY */