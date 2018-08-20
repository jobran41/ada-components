import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, Badge, Button } from "react-md"
import { cls } from "reactutils"

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
        <div className={cls(this.initClass + "-icon")}>
          <Badge badgeContent={fileSize} primary badgeId="notifications-1">
            <Button icon>notifications</Button>
          </Badge>
        </div>
        <div className={cls(this.initClass + "-type")}>{typeFile} File</div>
        <div className={cls(this.initClass + "-action")}>
          Download this file
        </div>
        <Button flat onClick={() => this.downloadFile()}>
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
