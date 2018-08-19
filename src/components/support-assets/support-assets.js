import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Button } from "react-md"

export default class SupportAssets extends Component {
  plus = () => {
    const { plus } = this.props
    if (typeof plus === 'function') {
      plus()
    }
  }
  render() {
    const { type, url, title, description, autoplay, responsive, playListKey } = this.props
    const autoplayVideo = autoplay ? "?autoplay=1" : null
    const playlist = playListKey ? `?playlist=${playListKey}&loop=1` : null
    return (
      <div className="support-asset">
        {type === "video" && url.includes(".mp4") && < div >
          <video controls
            src={url}
            poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
            width="620">
            you can <a href="https://archive.org/details/BigBuckBunny_124">download it</a>

          </video>
        </div>}
        {type === "video" && url.includes("youtube.com") && !playlist && < div >
          <iframe title="myFrame" width="420" height="315"
            src={url + autoplayVideo}>
          </iframe>
        </div>}
        {type === "video" && url.includes("youtube.com") && playlist && < div >
          <iframe title="myFrame" width="420" height="315"
            src={url + playlist}>
          </iframe>
        </div>}
        {type === "img" &&
          <div>
            <img src={url} alt="title" />
            <div className="info">
              <div>{title}</div>
              <div>{description}</div>
            </div>
            {!responsive && <Button flat onClick={this.plus} iconBefore={false} iconClassName="mdi mdi-plus" />}
          </div>}
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
  plus: PropTypes.fun,
  responsive: PropTypes.string,
  playListKey: PropTypes.string
}
/** playListKey=tgbNymZ7vqY */