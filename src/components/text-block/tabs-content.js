import React, { Component } from "react"
import PropTypes from "prop-types"
import { TabsContainer, Tabs } from "react-md"
import { cls } from "reactutils"

import './tabs-content.scss'

export default class ContainerTab extends Component {
  initClass = "tabs-content";

  render() {
    const { children, className } = this.props
    return (
      <TabsContainer className={cls(this.initClass, className)}>
        <Tabs tabId="simple-tab">{children}</Tabs>
      </TabsContainer>
    )
  }
}
ContainerTab.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
