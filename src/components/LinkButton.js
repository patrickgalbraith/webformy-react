import React, { Component, PropTypes } from 'react'
import { filterKeys } from '../helpers/object'

const LinkButton = (props) => {
  const childProps = filterKeys(['text'], props)
  return (
    <a {...childProps}>{props.text}</a>
  )
}

LinkButton.defaultProps = {
  href: '#'
}

export default LinkButton