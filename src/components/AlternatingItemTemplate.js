import React, { Component, PropTypes } from 'react'

const AlternatingItemTemplate = (props, context) => {
  if (context.container.index % 2 !== 0) {
    return props.children
  }

  return null
}

AlternatingItemTemplate.contextTypes = {
  container: React.PropTypes.object
}

export default AlternatingItemTemplate