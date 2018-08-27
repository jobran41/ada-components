import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, Button, FontIcon, Avatar } from "react-md"
import { cls } from "reactutils"

import './gift.scss'

export default class Gift extends Component {
    initClass = "gift";

    onSeeGift = (e) => {
        const { onSeeGift } = this.props
        if (onSeeGift) {
            onSeeGift(e)
        }
    }
    render() {
        const { className, title, message, linkObject, icon, theme, avatar } = this.props
        return (
            <Paper zDepth={1} className={cls(this.initClass, className, "", theme)}>
                <div className={cls(this.initClass + "-header")}>
                    <div className={cls(this.initClass + "-header-icon")}>
                        <Button icon className="closeButton">close</Button>
                    </div>
                </div>
                <div className={cls(this.initClass + "-content")}>
                   {icon &&  <FontIcon iconClassName={`mdi ${icon}`}/> }
                   {avatar &&  <Avatar src={avatar.path} className={cls(this.initClass + "-avatar")} /> }
                    <div className={cls(this.initClass + "-title")}>{title}</div>
                    <div className={cls(this.initClass + "-message")}>{message}</div>
                </div>
                {linkObject && <div className={cls(this.initClass + "-button", linkObject.position)}><Button flat primary onClick={linkObject.action} className="sendButton">{linkObject.title}</Button></div>}

            </Paper>
        )
    }
}

Gift.propTypes = {
    className: PropTypes.string,
    onSeeGift: PropTypes.func,
    linkObject: PropTypes.object,
    avatar: PropTypes.object,
    title: PropTypes.string,
    message: PropTypes.string,
    icon: PropTypes.string,
    theme:PropTypes.string
}
