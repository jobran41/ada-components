import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, MenuButton, Slider, Button } from "react-md"
import { cls } from "reactutils"

import "./filters.scss"

export default class Filters extends Component {
  initClass = "filters";
  renderFilters = () => {
    const { items } = this.props
    return items.map((it, index) => {
      return (
        <div className={cls(this.initClass + "-list")} key={index}>
          <div className={cls(this.initClass + "-min")}>{it.min}</div>
          <div className={cls(this.initClass + "-filter")}>
            <Slider
              id="continuous-default-value-slider"
              label=""
              defaultValue={it.value}
              {...it.filterProps}
            />
          </div>
          <div className={cls(this.initClass + "-max")}>+ {it.max}</div>
        </div>
      )
    })
  };

  render() {
    const { className, title, description, menuButton } = this.props
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
          {this.renderFilters()}
        </div>
        <div className={cls(this.initClass + "-footer")}>
          <Button flat className="buttonApply">
            Apply
          </Button>
          <Button flat className="buttonReset">
            Reset
          </Button>
        </div>
      </Paper>
    )
  }
}
Filters.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  items: PropTypes.array,
  menuButton: PropTypes.array
}
