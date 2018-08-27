import React, { Component } from 'react'
import PropTypes from "prop-types"
import {
  FontIcon,
  TextField,
} from 'react-md'

import './style.scss'

export default class AdaSearch extends Component {
  render() {
    return (
        <TextField
          {...this.props}
          id="ada-search"
          placeholder="Search"
          type="text"
          block
          rightIcon={<FontIcon>search</FontIcon>}
          className="adaSearch"
        />
    )
  }
}
AdaSearch.propTypes = {
  handleSearch: PropTypes.func,
}