import React, { Component, PropTypes } from 'react'
import { filterKeys } from '../helpers/object'

const Button = (props) => {
  const childProps = filterKeys(['text'], props)
  return (
    <button {...childProps}>{props.text}</button>
  )
}

export default Button