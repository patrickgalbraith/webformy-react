import React, { Component, PropTypes } from 'react'

const getChildByType = (type, children) => {
  return children.filter((child) => child.type.name === type)[0]
}

const defaultProps = {
  visible: true,
  children: {}
}

const Repeater = (props) => {
  props = Object.assign({}, defaultProps, props)

  const headerTemplate          = getChildByType('HeaderTemplate', props.children)
  const footerTemplate          = getChildByType('FooterTemplate', props.children)
  const itemTemplate            = getChildByType('ItemTemplate', props.children)
  const alternatingItemTemplate = getChildByType('AlternatingItemTemplate', props.children)
  const separatorTemplate       = getChildByType('SeparatorTemplate', props.children)

  const items = props.visible ? props.dataSource.map((dataItem, key) => {
    return itemTemplate

    let o = []

    if (key === 0) {
      o.push(headerTemplate)
    }

    // if (key % 2 === 0) {
      o.push(itemTemplate)
    // } else {
    //   o.push(alternatingItemTemplate)
    // }

    if (key === props.dataSource.length -1) {
      o.push(footerTemplate)
    } else {
      // o.push(separatorTemplate)
    }

    return o
  }) : null

  return (<div>{items}</div>)
}

export default Repeater

export const HeaderTemplate = (props) => {
  return <div>{props.children}</div>
}

export const ItemTemplate = (props) => {
  return <div>{props.children}</div>
}

export const AlternatingItemTemplate = (props) => {
  return <div>{props.children}</div>
}

export const FooterTemplate = (props) => {
  return <div>{props.children}</div>
}

export const SeparatorTemplate = (props) => {
  return <div>{props.children}</div>
}
