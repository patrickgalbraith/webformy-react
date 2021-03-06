import React, { Component, PropTypes } from 'react'

const SeparatorTemplate = (props, context) => {
  // Show on all but last item
  if (context.container.index !== context.container.dataSource.length - 1) {
    return props.children
  }

  return null
}

SeparatorTemplate.contextTypes = {
  container: React.PropTypes.object
}

export default SeparatorTemplate