import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, Badge, Button } from "react-md"
import { cls } from "reactutils"

import './download.scss'

export default class Download extends Component {
  initClass = "download";
  downloadFile = () => {
    const { filePath } = this.props
    let a = document.createElement("A")
    a.href = filePath
    a.download = filePath.substr(filePath.lastIndexOf("/") + 1)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  };

  render() {
    const { className, fileSize, typeFile } = this.props
    return (
      <Paper zDepth={1} className={cls(this.initClass, className)}>
        <div className={cls(this.initClass + "-area")}>
          <Badge badgeContent={fileSize} primary badgeId="notifications-1">
            <Button icon iconClassName="mdi mdi-download" className="downloadIcon" />
          </Badge>
          <div className={cls(this.initClass + "-type")}>{typeFile} File</div>
          <div className={cls(this.initClass + "-action")}>
            Download this file
          </div>
        </div>
        
        <Button flat className="downloadButton" onClick={() => this.downloadFile()}>
          DOWNLOAD
        </Button>
      </Paper>
    )
  }
}

Download.propTypes = {
  className: PropTypes.string,
  fileSize: PropTypes.string,
  typeFile: PropTypes.string,
  filePath: PropTypes.string
}
