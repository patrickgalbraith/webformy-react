import React, { Component, PropTypes } from 'react'
import Context from './Context'

export default class Repeater extends Component {
  render() {
    const props = this.props

    const items = props.visible ? props.dataSource.map((dataItem, index) => {
      return (
        <Context key={index} index={index} dataItem={dataItem} dataSource={props.dataSource}>
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