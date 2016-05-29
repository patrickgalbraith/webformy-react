import React, { Component, PropTypes } from 'react'

const HeaderTemplate = (props, context) => {
  if (context.container.index === 0) {
    return <div>{props.children}</div>
  }

  return null
}

HeaderTemplate.contextTypes = {
  container: React.PropTypes.object
}

export default HeaderTemplate