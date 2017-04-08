import React, { Component, PropTypes } from 'react'

const Eval = (props, context) => {
  if (props.value && context.container.dataItem) {
    if (typeof props.value === 'function') {
      return props.value.call(null, context)
    } else {
      return context.container.dataItem[props.value]
    }
  }

  if (typeof(props.value) === 'string') {
    return props.value
  }

  if (props.children) {
    return props.children
  }

  return null
}

Eval.contextTypes = {
  container: React.PropTypes.object
}

export default Eval