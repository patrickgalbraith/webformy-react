import React, { Component, PropTypes } from 'react'

const FooterTemplate = (props, context) => {
  if (context.index === context.dataSource.length - 1) {
    return <div>{props.children}</div>
  }

  return null
}

FooterTemplate.contextTypes = {
  index:      React.PropTypes.number,
  dataItem:   React.PropTypes.object,
  dataSource: React.PropTypes.array,
}

export default FooterTemplate