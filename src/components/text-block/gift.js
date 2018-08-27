import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, Button, FontIcon } from "react-md"
import { cls } from "reactutils"

export default class Gift extends Component {
    initClass = "gift";

    onSeeGift = (e) => {
        const { onSeeGift } = this.props
        if (onSeeGift) {
            onSeeGift(e)
        }
    }
    render() {
        const { className, title, message, linkObject, icon } = this.props
        return (
            <Paper zDepth={1} className={cls(this.initClass, className)}>
                <div className={cls(this.initClass + "-header")}>
                    <div className={cls(this.initClass + "-header-icon")}>
                        <Button icon>close</Button>
                    </div>
                </div>
                <div className={cls(this.initClass + "-header")}>
                    <FontIcon>{icon}</FontIcon>
                    <div className={cls(this.initClass + "-title")}>{title}</div>
                    <div className={cls(this.initClass + "-message")}>{message}</div>
                </div>
                {linkObject && <div className={cls(this.initClass + "-button", linkObject.position)}><Button flat onClick={linkObject.action}>{linkObject.title}</Button></div>}

            </Paper>
        )
    }
}

Gift.propTypes = {
    className: PropTypes.string,
    onSeeGift: PropTypes.func,
    linkObject: PropTypes.object,
    title: PropTypes.string,
    message: PropTypes.string,
    icon: PropTypes.string
}
