import React, { Component, PropTypes } from 'react'
import { evaluateProps } from '../helpers/evaluateProps'
import { filterKeys } from '../helpers/object'

const TextBox = (props, context) => {
  props = Object.assign({}, props, evaluateProps({
    defaultValue: props.defaultValue
  }, context))

  // Filter props
  const childProps = filterKeys(['multiLine'], props)

  if (props.multiLine) {
    return (
      <textarea {...childProps} />
    )
  } else {
    return (
      <input type="text" {...childProps} />
    )
  }
}

export default TextBox