import React, { Component, PropTypes } from 'react'

const ListBox = (props) => {
  let select = []

  props.children.forEach(c => {
    if (c.props.select)
     select.push(c.props.value)
  })

  return (
    <select multiple="true" defaultValue={select} {...props}>{props.children}</select>
  )
}

export default ListBox