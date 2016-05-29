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
            <Eval value={ (ctx) => {
              return Object.keys(ctx.container.dataItem).map((key) => <th>{ key }</th>)
            }} />
        </HeaderTemplate>
        <ItemTemplate>
          <Eval value={ (ctx) => {
            return (
              <tr>
                { Object.keys(ctx.container.dataItem).map((key) => <td>{ ctx.container.dataItem[key] }</td>) }
              </tr>
            )}} />
        </ItemTemplate>
        <SeparatorTemplate>
          <Eval value={ (ctx) => {
            return (
              <tr>
                { Object.keys(ctx.container.dataItem).map((key) => <td>{ "---" }</td>) }
              </tr>
            )}} />
        </SeparatorTemplate>
        <FooterTemplate>

        </FooterTemplate>
      </Repeater>
    </table>
  )
}

export default DataList