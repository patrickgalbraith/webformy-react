import React, { Component, PropTypes } from 'react'

const FooterTemplate = (props, context) => {
  if (context.container.index === context.container.dataSource.length - 1) {
    return props.children
  }

  return null
}

FooterTemplate.contextTypes = {
  container: React.PropTypes.object
}

export default FooterTemplate