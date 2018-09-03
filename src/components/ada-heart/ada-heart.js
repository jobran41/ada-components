import React, { Component } from 'react'
import PropTypes from "prop-types"
import {
  Checkbox,
  Switch,
  FontIcon
} from 'react-md'
import './ada-heart.scss'
import AdaIcon from '../adaIcon'

export default class AdaHeart extends Component {

  render() {
    const { star, heart, switcher, eye } = this.props
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
        {star &&
          <Checkbox
            {...this.props}
            aria-label=""
            id="custom-checkbox-adaStar"
            name="using-adaHeart-icons"
            checkedCheckboxIcon={<AdaIcon viewBox="0 0 24 24" icon="startBorder" />}
            uncheckedCheckboxIcon={<AdaIcon viewBox="0 0 24 24" icon="start" />}
          />
        }
        {switcher &&
          <Switch
            {...this.props}
            id="switch-power"
            type="switch"
          />
        }
        {eye &&
          <Checkbox
            {...this.props}
            aria-label=""
            id="custom-checkbox-adaStar"
            name="using-adaHeart-icons"
            checkedCheckboxIcon={<FontIcon iconClassName={`mdi mdi-eye`} />}
            uncheckedCheckboxIcon={<FontIcon iconClassName={`mdi mdi-eye-outline`} />}
          />
        }
        {!star && !heart && !switcher && eye &&
          <Checkbox
            {...this.props}
            aria-label=""
            id="custom-checkbox-adaCheckbox"
            name="using-adaHeart-icons"
            type="checkbox"
          />}
      </div>
    )
  }
}
AdaHeart.propTypes = {
  star: PropTypes.bool,
  heart: PropTypes.bool,
  switcher: PropTypes.bool,
  eye: PropTypes.bool
}