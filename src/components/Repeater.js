import React, { Component, PropTypes } from 'react'

const getChildByType = (type, children, fallback = null) => {
  const node = children.filter((child) => child.type.name === type)[0]
  return node ? node : fallback
}

const defaultProps = {
  visible: true,
  children: {}
}

export default class Repeater extends Component {
  render() {
    let props = Object.assign({}, defaultProps, this.props)

    const headerTemplate          = getChildByType('HeaderTemplate', props.children)
    const footerTemplate          = getChildByType('FooterTemplate', props.children)
    const itemTemplate            = getChildByType('ItemTemplate', props.children)
    const alternatingItemTemplate = getChildByType('AlternatingItemTemplate', props.children, itemTemplate)
    const separatorTemplate       = getChildByType('SeparatorTemplate', props.children)

    const items = props.visible ? props.dataSource.map((dataItem, key) => {
      let o = []

      if (key === 0) {
        o.push(headerTemplate)
      }

      if (key % 2 === 0) {
        o.push(itemTemplate)
      } else {
        o.push(alternatingItemTemplate)
      }

      if (key === props.dataSource.length -1) {
        o.push(footerTemplate)
      } else {
        o.push(separatorTemplate)
      }

      return o
    }) : null

    return (<div>{items}</div>)
  }
}

Repeater.childContextTypes = {

}