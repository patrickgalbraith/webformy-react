import React, { Component, PropTypes } from 'react'

const ItemTemplate = (props, context) => {
  if (!context.container.alternating || context.container.index % 2 === 0) {
    return props.children
  }

  return null;
}

ItemTemplate.contextTypes = {
  container: React.PropTypes.object
}

export default ItemTemplate