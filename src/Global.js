import React, { Component, PropTypes } from 'react'

import Label from './components/Label'
import Repeater from './components/Repeater'
import ItemTemplate from './components/ItemTemplate'
import HeaderTemplate from './components/HeaderTemplate'
import FooterTemplate from './components/FooterTemplate'
import TextBox from './components/TextBox'

export default class Global extends Component {
  render() {
    return (
      <div>
        <p><Label>Label</Label></p>
        <p><TextBox defaultValue="Test" /></p>
        <p><TextBox defaultValue="Test2" multiLine={true} /></p>
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
            <p>Test Item</p>
          </ItemTemplate>
          <FooterTemplate>
            <p>Footer</p>
          </FooterTemplate>
        </Repeater>
      </div>
    )
  }
}


// import * from './components'

// export default class Global extends Component {
//   render() {
//     return (
//       <div>
//         <WebForm>
//           <Label>Label</Label>
//           <TextBox value="Test" />
//           <TextBox value="Test" multiLine={true} />
//           <HiddenField />
//           <Button text="Submit!" />
//           <LinkButton />
//           <ImageButton />
//           <HyperLink></HyperLink>
//           <DropDownList>
//             <ListItem select={true} value="M">M</ListItem>
//             <ListItem value="F">F</ListItem>
//             <ListItem value="U">U</ListItem>
//           </DropDownList>
//           <ListBox></ListBox>
//           <DataGrid></DataGrid>
//           <DataList>
//             <HeaderTemplate></HeaderTemplate>
//             <ItemTemplate></ItemTemplate>
//             <AlternatingItemTemplate></AlternatingItemTemplate>
//             <FooterTemplate></FooterTemplate>
//           </DataList>
//           <Repeater
//             dataSource={[
//               { title: "Title 1"},
//               { title: "Title 2"},
//               { title: "Title 3"}
//             ]}
//             visible={true}>
//             <HeaderTemplate>
//               <p>Header</p>
//             </HeaderTemplate>
//             <ItemTemplate>
//               <p><Eval value="title" /></p>
//               <p><Eval value={() => this.dataItem.title} /></p>
//             </ItemTemplate>
//             <AlternatingItemTemplate>
//               <p>Alt: <Eval value="title" /></p>
//               <p>Alt: <Eval value={() => this.dataItem.title} /></p>
//             </AlternatingItemTemplate>
//             <SeparatorTemplate>
//               <hr />
//             </SeparatorTemplate>
//             <FooterTemplate>
//               <p>Footer</p>
//             </FooterTemplate>
//           </Repeater>
//           <CheckBox></CheckBox>
//           <CheckBoxList></CheckBoxList>
//           <RadioButton></RadioButton>
//           <RadioButtonList></RadioButtonList>
//           <Image></Image>
//           <Panel></Panel>
//           <PlaceHolder></PlaceHolder>
//           <MultiView>
//             <View></View>
//             <View></View>
//           </MultiView>
//           <Calendary></Calendary>
//           <AdRotator></AdRotator>
//           <Table></Table>
//           <Xml></Xml>
//           <Literal></Literal>

//           {/* Validators */}
//           <RequiredFieldValidator></RequiredFieldValidator>
//           <CompareValidator></CompareValidator>
//           <RangeValidator></RangeValidator>
//           <RegularExpressionValidator></RegularExpressionValidator>
//           <CustomValidator></CustomValidator>
//         </WebForm>
//       </div>
//     )
//   }
// }