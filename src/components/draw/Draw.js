
import React, { PureComponent } from 'react'
import { Drawer } from 'react-md'
import { connect } from 'react-redux'

import { toggleTopbar } from "modules/app/actions"
import NavItemLink from './NavItemLink'
import * as routes from "libs/constants/routes"

const navItems = [{
    label: 'Home',
    to: `${routes.LANDING}`,
    icon: 'home'
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
export default class SimpleDrawer extends PureComponent {
    state = { visible: true, position: 'left' };
    openDrawerRight = () => {
        this.setState({ visible: true, position: 'right' })
    };

    closeDrawer = () => {
        this.setState({ visible: false })
    };

    handleVisibility = (visible) => {
        this.setState({ visible: true })
    };

    render() {
        const { visible, position } = this.state

        return (
            <div>
                <Drawer
                    id="simple-drawer-example"
                    type={Drawer.DrawerTypes.TEMPORARY}
                    overlay={false}
                    visible={visible}
                    position={position}
                    onVisibilityChange={this.handleVisibility}
                    navItems={navItems.map(props => <NavItemLink {...props} key={props.to} />)}
                    header="ada components"
                />
            </div>
        )
    }
}