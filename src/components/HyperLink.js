import React, { Component, PropTypes } from 'react'

const HyperLink = (props) =>
  <a {...props}>{props.children}</a>

HyperLink.defaultProps = {
  href: '#'
}

export default HyperLink