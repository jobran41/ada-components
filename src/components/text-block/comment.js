import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton, Avatar, TextField, Button } from "react-md"
import { cls } from "reactutils"

export default class Comment extends Component {
  initClass = "comment";
  constructor(props) {
    super(props)
    this.state = {
      comment: ""
    }
  }
  renderComment = () => {
    const { items } = this.props
    return items.map((it, index) => {
      return (
        <div className={cls(this.initClass + "-list")}>
          <div className={cls(this.initClass + "-avatar")}>
            <Avatar src={it.path} role="presentation" />
          </div>
          <div className={cls(this.initClass + "-comment-body")}>
            <div className={cls(this.initClass + "-comment-header")}>
              <span className={cls(this.initClass + "-comment-header-name")}>
                {it.name}
              </span>
              <span className={cls(this.initClass + "-comment-header-date")}>
                {it.createdDate}
              </span>
            </div>
            <div className={cls(this.initClass + "-comment-description")}>
              {it.description}
            </div>
          </div>
        </div>
      )
    })
  };

  onAddComment = () => {
    const { onAddComment } = this.props
    const { comment } = this.state
    if (onAddComment) {
      onAddComment(comment)
    }
  };

  render() {
    const {
      className,
      title,
      description,
      menuButton,
      currentUser
    } = this.props
    return (
      <Paper zDepth={1} className={cls(this.initClass, className)}>
        <div className={cls(this.initClass + "-header")}>
          <div className={cls(this.initClass + "-headerContainer")}>
            <div className={cls(this.initClass + "-title")}>{title}</div>
            {description && (
              <div className={cls(this.initClass + "-description")}>
                {description}
              </div>
            )}
          </div>
          {menuButton && (
            <MenuButton id={`${this.initClass}_id`} icon menuItems={menuButton}>
              more_vert
            </MenuButton>
          )}
        </div>
        <div className={cls(this.initClass + "-content")}>
          {this.renderComment()}
        </div>
        <div className={cls(this.initClass + "-footer")}>
          <div className={cls(this.initClass + "-list")}>
            <div className={cls(this.initClass + "-avatar")}>
              <Avatar src={currentUser.path} role="presentation" />
            </div>
            <div className={cls(this.initClass + "-comment-body")}>
              <TextField
                id="floating-multiline"
                label="Type your comment"
                lineDirection="right"
                rows={3}
                placeholder="What do you think"
                onChange={comment => this.setState({ comment })}
              />
              <Button flat onClick={() => this.onAddComment()}>
                Comment
              </Button>
            </div>
          </div>
        </div>
      </Paper>
    )
  }
}
Comment.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onAddEvent: PropTypes.func,
  items: PropTypes.array,
  onChecklist: PropTypes.func,
  menuButton: PropTypes.array,
  currentUser: PropTypes.object,
  onAddComment: PropTypes.func
}
