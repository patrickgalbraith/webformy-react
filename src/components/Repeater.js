import React, { Component, PropTypes } from 'react'
import Context from './Context'

const hasChildWithType = (type, children) => {
  const node = children.filter((child) => child.type.name === type)
  return node ? node.length : false
}

export default class Repeater extends Component {
  render() {
    const props       = this.props
    const alternating = hasChildWithType('AlternatingItemTemplate', props.children)

    const items = props.visible ? props.dataSource.map((dataItem, index) => {
      const context = {
        index,
        dataItem,
        alternating,
        dataSource: props.dataSource
      }

      return (
        <Context key={index} container={context}>
          {props.children}
        </Context>
      )
    }) : null

    return (<div>{items}</div>)
  }
}

Repeater.defaultProps = {
  visible: true
}