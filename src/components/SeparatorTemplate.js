import React, { Component, PropTypes } from 'react'

const SeparatorTemplate = (props, context) => {
  // Show on all but last item
  if (context.index !== context.dataSource.length - 1) {
    return <div>{props.children}</div>
  }

  return null
}

SeparatorTemplate.contextTypes = {
  index:      React.PropTypes.number,
  dataItem:   React.PropTypes.object,
  dataSource: React.PropTypes.array,
}

export default SeparatorTemplate