import React, { Component, PropTypes } from 'react'

// Converts props to context
const Context = React.createClass({
  childContextTypes: {
    index:      React.PropTypes.number,
    dataItem:   React.PropTypes.object,
    dataSource: React.PropTypes.array,
  },

  getChildContext: function() {
    let ctx = Object.assign({}, this.props)
    delete ctx['children']
    return ctx
  },

  render: function() {
    return (
      <div>{this.props.children}</div>
    )
  }
})

export default Context