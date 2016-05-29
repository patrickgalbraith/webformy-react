import React, { Component, PropTypes } from 'react'

const FooterTemplate = (props, context) => {
  if (context.container.index === context.container.dataSource.length - 1) {
    return <div>{props.children}</div>
  }

  return null
}

FooterTemplate.contextTypes = {
  container: React.PropTypes.object
}

export default FooterTemplate