import React, { Component } from 'react'
import PropTypes from "prop-types"

import ListIcons from './list-icon'

import './adaIcon.scss'

class AddIcon extends Component {
    renderGroupe = () => {
        const { width, height, viewBox, fill, icon } = this.props
        let view = viewBox ? viewBox : "0 0 330 330"
        let inlineWidth = width ? width : "30px"
        let inlineHeight = height ? height : "30px"
        const currentIcon = ListIcons[icon]

        if (Array.isArray(currentIcon)) {
            return <svg
                width={inlineWidth}
                height={inlineHeight}
                viewBox={view}>
                <g>
                    {currentIcon.map((item, i) => {
                        return <path key={i} d={item} />
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
        renderName()
    }
    render() {
        return (<div className="dddIcon" onClick={this.renderName} >{this.renderGroupe()}</div>)
    }
}

AddIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string,
    fill: PropTypes.string,
    renderName: PropTypes.func,
    icon: PropTypes.string
}
export default AddIcon 