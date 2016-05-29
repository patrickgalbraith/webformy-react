import React, { Component, PropTypes } from 'react'
import { evaluateProps } from '../evaluateProps'

const TextBox = (props, context) => {
  props = Object.assign({}, props, evaluateProps({
    defaultValue: props.defaultValue
  }, context))

  if (props.multiLine) {
    return (
      <textarea {...props} />
    )
  } else {
    return (
      <input type="text" {...props} />
    )
  }
}

export default TextBox