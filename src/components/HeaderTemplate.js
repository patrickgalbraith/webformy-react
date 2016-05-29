import React, { Component, PropTypes } from 'react'

const HeaderTemplate = (props, context) => {
  if (context.index === 0) {
    return <div>{props.children}</div>
  }

  return null
}

HeaderTemplate.contextTypes = {
  index:      React.PropTypes.number,
  dataItem:   React.PropTypes.object,
  dataSource: React.PropTypes.array,
}

export default HeaderTemplate