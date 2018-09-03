import React, { Component } from 'react'
import PropTypes from "prop-types"
import {
  Checkbox,
  Switch
} from 'react-md'
import './ada-heart.scss'
import AdaIcon from '../adaIcon'

export default class AdaHeart extends Component {

  render() {
    const { start, heart, switcher } = this.props
    return (
      <div className="adaHeart">
        {heart &&
          <Checkbox
            {...this.props}
            aria-label=""
            id="custom-checkbox-adaHeart"
            name="using-adaHeart-icons"
            checkedCheckboxIcon={<AdaIcon viewBox="0 0 24 24" icon="favoriteUnChecked" />}
            uncheckedCheckboxIcon={<AdaIcon viewBox="0 0 24 24" icon="favoriteChecked" />}
          />
        }
        {start &&
          <Checkbox
            {...this.props}
            aria-label=""
            id="custom-checkbox-adaStart"
            name="using-adaHeart-icons"
            checkedCheckboxIcon={<AdaIcon viewBox="0 0 24 24" icon="startBorder" />}
            uncheckedCheckboxIcon={<AdaIcon viewBox="0 0 24 24" icon="start" />}
          />
        }
        {!start && !heart && !switcher &&
          <Checkbox
            {...this.props}
            aria-label=""
            id="custom-checkbox-adaCheckbox"
            name="using-adaHeart-icons"
            type="checkbox"
          />}
        {switcher &&
          <Switch
            {...this.props}
            id="switch-power"
            type="switch"
          />
        }

      </div>
    )
  }
}
AdaHeart.propTypes = {
  start: PropTypes.bool,
  heart: PropTypes.bool,
  switcher: PropTypes.bool
}