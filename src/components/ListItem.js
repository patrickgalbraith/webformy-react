import React, { Component, PropTypes } from 'react'

const ListItem = (props) =>
  <option selected={props.select} {...props}>{props.children}</option>

export default ListItem