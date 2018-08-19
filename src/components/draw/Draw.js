
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
    icon: 'dashboard'
},
{
    label: 'Icons',
    to: `${routes.Icons}`,
    icon: 'dashboard'
},
{
    label: 'Menu',
    to: `${routes.Menu}`,
    icon: 'dashboard'
},
{
    label: 'Vertical Navigation',
    to: `${routes.Navigation_Horizontal}`,
    icon: 'dashboard'
},
{
    label: 'Forms',
    to: `${routes.Forms}`,
    icon: 'dashboard'
},
{
    label: 'Graphs',
    to: `${routes.Graphs}`,
    icon: 'dashboard'
},
{
    label: 'BlocksList',
    to: `${routes.BlockList}`,
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
        this.state = { visible: true, position: 'left', active: 0 }
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
        const { visible, position, active, activePath } = this.state
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
}
export default Draw