import React, { Component, PropTypes } from 'react'

// Converts props to context
const Context = React.createClass({
  childContextTypes: {
    container: React.PropTypes.object
  },

  getChildContext: function() {
    return { container: this.props.container }
  },

  render: function() {
    return this.props.children
  }
})

export default Context