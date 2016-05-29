import React, { Component, PropTypes } from 'react'

const AlternatingItemTemplate = (props, context) => {
  if (context.container.index % 2 !== 0) {
    return <div>{context.container.index}{props.children}</div>
  }

  return null
}

AlternatingItemTemplate.contextTypes = {
  container: React.PropTypes.object
}

export default AlternatingItemTemplate