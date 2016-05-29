import React, { Component, PropTypes } from 'react'
import Eval from './Eval'

const Literal = (props) =>
  <Eval {...props}>{props.children}</Eval>

export default Literal