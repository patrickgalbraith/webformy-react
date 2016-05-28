import React, { Component, PropTypes } from 'react'

export default class GenreInfo extends Component {
  render() {
    return (
      <div>
        <Form>
          <Label>Label</Label>
          <TextBox></TextBox>
          <Button />
          <LinkButton></LinkButton>
          <ImageButton></ImageButton>
          <HyperLink></HyperLink>
          <DropDownList></DropDownList>
          <ListBox></ListBox>
          <DataGrid></DataGrid>
          <DataList></DataList>
          <Repeater></Repeater>
          <CheckBox></CheckBox>
          <CheckBoxList></CheckBoxList>
          <RadioButton></RadioButton>
          <RadioButtonList></RadioButtonList>
          <Image></Image>
          <Panel></Panel>
          <PlaceHolder></PlaceHolder>
          <Calendary></Calendary>
          <AdRotator></AdRotator>
          <Table></Table>
          <Xml></Xml>
          <Literal></Literal>

          {/* Validators */}
          <RequiredFieldValidator></RequiredFieldValidator>
          <CompareValidator></CompareValidator>
          <RangeValidator></RangeValidator>
          <RegularExpressionValidator></RegularExpressionValidator>
          <CustomValidator></CustomValidator>
        </Form>
      </div>
    )
  }
}