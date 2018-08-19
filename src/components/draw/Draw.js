
import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Drawer, Button } from 'react-md'
import { connect } from 'react-redux'
import { withRouter } from "react-router"

import { toggleTopbar } from "modules/app/actions"
import NavItemLink from './NavItemLink'
import * as routes from "libs/constants/routes"

import './style.scss'

const navItems = [{
    label: 'Home',
    to: `${routes.LANDING}`,
    icon: 'home'
},
{
    label: 'Colors',
    to: `${routes.colors}`,
    icon: 'color_lens'
},
{
    label: 'Icons',
    to: `${routes.Icons}`,
    icon: 'mood'
},
{
    label: 'Menu',
    to: `${routes.Menu}`,
    icon: 'menu'
},
{
    label: 'Vertical Navigation',
    to: `${routes.Navigation_Horizontal}`,
    icon: 'menu'
},
{
    label: 'Forms',
    to: `${routes.Forms}`,
    icon: 'list_alt'
},
{
    label: 'Graphs',
    to: `${routes.Graphs}`,
    icon: 'pie_chart'
},
{
    label: 'BlocksList',
    to: `${routes.BlockList}`,
    icon: 'view_quilt'
},
{
    label: 'Media',
    to: `${routes.Media}`,
    icon: 'dashboard'
},
{
    label: 'Elements',
    to: `${routes.Elements}`,
    icon: 'dashboard'
},
{
    label: 'Avatars',
    to: `${routes.Avatars}`,
    icon: 'dashboard'
},
]
@connect(({ app }) => ({
    sideBarIsTrue: app.topbarCollapsed
}), { toggleTopbar })
@withRouter
class Draw extends Component {

    constructor(props) {
        super(props)
        const Items = navItems.map(elem => {
            return elem.to.substr(1)
        })
        const activeItem = Items.indexOf(props.history.location.pathname.substr(1))
        this.state = { visible: true, position: 'left', active: activeItem || 0 }
    }


    openDrawerRight = () => {
        this.setState({ visible: true, position: 'right' })
    };

    closeDrawer = () => {
        const { closeDrawer } = this.props
        closeDrawer(false)
    };

    handleVisibility = (visible) => {
        this.setState({ visible: true })
    };
    handleRoute = (i) => {
        this.setState({ active: i })
    }
    render() {
        const { visible, position, active } = this.state
        return (
            <Drawer
                id="simple-drawer-example"
                type={Drawer.DrawerTypes.TEMPORARY}
                overlay={false}
                visible={visible}
                position={position}
                onVisibilityChange={this.handleVisibility}
                navItems={navItems.map((props, i) => <NavItemLink handleRoute={this.handleRoute} active={i === active || undefined} {...props} i={i} key={i} />)}
                header={<Button onClick={this.closeDrawer} icon className="closeMenuButton">clear</Button>}
                className="sideBarContainer"
            />
        )
    }
}
Draw.propTypes = {
    closeDrawer: PropTypes.func,
    history: PropTypes.func
}
export default Draw