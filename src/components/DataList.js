import React, { Component, PropTypes } from 'react'

import Repeater                from './Repeater'
import ItemTemplate            from './ItemTemplate'
import AlternatingItemTemplate from './AlternatingItemTemplate'
import HeaderTemplate          from './HeaderTemplate'
import FooterTemplate          from './FooterTemplate'
import SeparatorTemplate       from './SeparatorTemplate'
import Eval                    from './Eval'

const DataList = (props) => {
  return (
    <table>
      <Repeater {...props}>
        <HeaderTemplate>
          <thead>
            <tr>
              <Eval value={ (ctx) => {
                return Object.keys(ctx.container.dataItem).map((key, idx) => <th key={idx}>{ key }</th>)
              }} />
            </tr>
          </thead>
        </HeaderTemplate>
        <ItemTemplate>
          <tbody>
            <Eval value={ (ctx) => {
              return (
                <tr>
                  { Object.keys(ctx.container.dataItem).map((key, idx) => <td key={idx}>{ ctx.container.dataItem[key] }</td>) }
                </tr>
              )}} />
          </tbody>
        </ItemTemplate>
        <SeparatorTemplate>
          <tbody>
            <Eval value={ (ctx) => {
              return (
                <tr>
                  { Object.keys(ctx.container.dataItem).map((key, idx) => <td key={idx}>{ "---" }</td>) }
                </tr>
              )}} />
          </tbody>
        </SeparatorTemplate>
      </Repeater>
    </table>
  )
}

export default DataList