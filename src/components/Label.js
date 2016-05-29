import React, { Component, PropTypes } from 'react'

const Label = (props) => {
  return (<label {...props}>{props.children}</label>)
}

export default Label