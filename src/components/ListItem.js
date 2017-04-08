import React, { Component, PropTypes } from 'react'
import { filterKeys } from '../helpers/object'

const ListItem = (props) => {
  const childProps = filterKeys(['text', 'select'], props)
  return (
    <option {...childProps}>{props.children}</option>
  )
}

export default ListItem