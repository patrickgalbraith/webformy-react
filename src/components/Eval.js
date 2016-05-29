import React, { Component, PropTypes } from 'react'

const Eval = (props, context) => {
  if (props.value && context.container.dataItem) {
    if (typeof props.value === 'function') {
      return (<span>{props.value.call(null, context)}</span>)
    } else {
      return (<span>{context.container.dataItem[props.value]}</span>)
    }
  }

  return null
}

Eval.contextTypes = {
  container: React.PropTypes.object
}

export default Eval