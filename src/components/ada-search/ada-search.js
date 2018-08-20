import React, { Component } from 'react'
import PropTypes from "prop-types"
import {
  FontIcon,
  TextField,
} from 'react-md'


export default class AdaSearch extends Component {
  render() {
    return (
      <div className="adaSearch">
        <TextField
          {...this.props}
          id="ada-search"
          label="Search"
          type="text"
          rightIcon={<FontIcon>search</FontIcon>}
          size={10}
        />
      </div>
    )
  }
}
AdaSearch.propTypes = {
  handleSearch: PropTypes.func,
}