import React, { Component, PropTypes } from 'react'

import Label             from './components/Label'
import DataList          from './components/DataList'
import Repeater          from './components/Repeater'
import ItemTemplate      from './components/ItemTemplate'
import HeaderTemplate    from './components/HeaderTemplate'
import FooterTemplate    from './components/FooterTemplate'
import SeparatorTemplate from './components/SeparatorTemplate'
import TextBox           from './components/TextBox'
import HiddenField       from './components/HiddenField'
import Button            from './components/Button'
import LinkButton        from './components/LinkButton'
import ImageButton       from './components/ImageButton'
import HyperLink         from './components/HyperLink'
import DropDownList      from './components/DropDownList'
import ListBox           from './components/ListBox'
import ListItem          from './components/ListItem'
import Literal           from './components/Literal'
import Eval              from './components/Eval'

export default class Global extends Component {
  render() {
    return (
      <div>
        <p><Label>Label</Label></p>

        <p><TextBox defaultValue="Test" /></p>
        <p><TextBox defaultValue={(ctx) => "Test2"} multiLine={true} /></p>

        <DataList
          dataSource={[
            { title: "Title 1" },
            { title: "Title 2" },
            { title: "Title 3" }
          ]} />

        <Repeater
          dataSource={[
            { title: "Title 1"},
            { title: "Title 2"},
            { title: "Title 3"}
          ]}
          visible={true}>
          <HeaderTemplate>
            <p>Header</p>
          </HeaderTemplate>
          <ItemTemplate>
            <p>Item: <Eval value="title" /></p>
          </ItemTemplate>
          <SeparatorTemplate>
            <hr />
          </SeparatorTemplate>
          <FooterTemplate>
            <p>Footer</p>
          </FooterTemplate>
        </Repeater>

        <p><HiddenField /></p>
        <p><Button text="Submit!" /></p>
        <p><LinkButton text="Link Button!" /></p>
        <p><ImageButton /></p>
        <p><HyperLink>Link Text</HyperLink></p>
        <p>
          <DropDownList>
            <ListItem select={true} value="M">M</ListItem>
            <ListItem value="F">F</ListItem>
            <ListItem value="U">U</ListItem>
          </DropDownList>
        </p>
        <p>
          <ListBox>
            <ListItem value="M">M</ListItem>
            <ListItem value="F">F</ListItem>
            <ListItem select={true} value="U">U</ListItem>
          </ListBox>
        </p>
        <p><Literal text="Test Literal" /></p>

        {/*
        <WebForm></WebForm>

        <DataGrid></DataGrid>

        <CheckBox></CheckBox>
        <CheckBoxList></CheckBoxList>
        <RadioButton></RadioButton>
        <RadioButtonList></RadioButtonList>
        <Image></Image>
        <Panel></Panel>
        <PlaceHolder></PlaceHolder>
        <MultiView>
          <View></View>
          <View></View>
        </MultiView>
        <Calendar></Calendar>
        <AdRotator></AdRotator>
        <Table></Table>
        <Xml></Xml>
        <Literal></Literal>

        <RequiredFieldValidator></RequiredFieldValidator>
        <CompareValidator></CompareValidator>
        <RangeValidator></RangeValidator>
        <RegularExpressionValidator></RegularExpressionValidator>
        <CustomValidator></CustomValidator>
        */}
      </div>
    )
  }
}