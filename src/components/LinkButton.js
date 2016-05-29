import React, { Component, PropTypes } from 'react'

const LinkButton = (props) =>
  <a {...props}>{props.text}</a>

LinkButton.defaultProps = {
  href: '#'
}

export default LinkButton