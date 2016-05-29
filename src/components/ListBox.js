import React, { Component, PropTypes } from 'react'

const ListBox = (props) =>
  <select multiple="true" {...props}>{props.children}</select>

export default ListBox