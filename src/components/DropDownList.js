import React, { Component, PropTypes } from 'react'

const DropDownList = (props) =>
  <select {...props}>{props.children}</select>

export default DropDownList