import React, { Component, PropTypes } from 'react'

const ItemTemplate = (props, context) => {
  if (context.index % 2 !== 0) {
    return <div>{props.children}</div>
  }

  return null;
}

ItemTemplate.contextTypes = {
  index:      React.PropTypes.number,
  dataItem:   React.PropTypes.object,
  dataSource: React.PropTypes.array,
}

export default ItemTemplate