import React, { Component } from 'react'
import PropTypes from "prop-types"

import ListIcons from './list-icon'

import './adaIcon.scss'

class AddIcon extends Component {
    renderGroup = () => {
        const { size, viewBox, fill, icon } = this.props
        let view = viewBox ? viewBox : "0 0 330 330"
        let inlineWidth = size ? size : "30px"
        let inlineHeight = size ? size : "30px"
        const currentIcon = ListIcons[icon]

        if (Array.isArray(currentIcon)) {
            return <svg
                width={inlineWidth}
                height={inlineHeight}
                viewBox={view}>
                <g>
                    {currentIcon.map((item, i) => {
                        return <path fill={fill} key={i} d={item} />
                    })}
                </g>
            </svg >
        } else {
            return <svg
                width={inlineWidth}
                height={inlineHeight}
                viewBox={view}>
                <path fill={fill} d={ListIcons[icon]} />
            </svg >
        }
    }
    renderName = () => {
        const { renderName } = this.props
        if (typeof renderName === 'function') {
            renderName()
        }
    }
    render() {
        return (<div className="dddIcon" onClick={this.renderName} >{this.renderGroup()}</div>)
    }
}

AddIcon.propTypes = {
    size: PropTypes.string,
    viewBox: PropTypes.string,
    fill: PropTypes.string,
    renderName: PropTypes.func,
    icon: PropTypes.string.isRequired,
}
export default AddIcon 