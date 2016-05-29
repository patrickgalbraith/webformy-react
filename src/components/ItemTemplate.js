import React, { Component, PropTypes } from 'react'

const ItemTemplate = (props, context) => {
  if (!context.container.alternating || context.container.index % 2 === 0) {
    return <div>{props.children}</div>
  }

  return null;
}

ItemTemplate.contextTypes = {
  container: React.PropTypes.object
}

export default ItemTemplate