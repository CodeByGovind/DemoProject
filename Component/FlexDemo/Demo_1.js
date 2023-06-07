import { Text, TextInput, StyleSheet, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'

export default class Flexemployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empName: ""
    };
  }
  allData = () => {
    console.log(this.state.empName)

  }

  render() {
    return (

      <View style={{ flex: 1, backgroundColor: 'lightgrey' }}>
        <ScrollView>
          <View style={{
            flexDirection: 'column', flex: 1, backgroundColor: 'pink',
            margin: 15, borderRadius: 15
          }}>

            <Text style={{ fontsize: 40, fontWeight: 'bold', backgroundColor: 'olive' }}> Employee Details </Text>
            <View style={{ flex: 1, backgroundColor: 'White' }}>

              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Image
                  style={style.tinyLogo1}
                  source={require('../FlexDemo/image/userlogo.jpg')} />

              </View>


              <TextInput
                placeholder='Enter a employee name'
                style={style.textInputStyle}
                onChangeText={(e) =>
                  this.setState(() => ({
                    empName: e
                  }))
                }
              ></TextInput>

              <TextInput
                placeholder='Enter a employee ID'
                style={style.textInputStyle}
              ></TextInput>

              <TextInput
                placeholder='Enter a Company Name'
                style={style.textInputStyle}
              ></TextInput>

              <TextInput
                placeholder='Enter a Post'
                style={style.textInputStyle}
              ></TextInput>

              <TextInput
                placeholder='Enter a Working Hour'
                style={style.textInputStyle}
              ></TextInput>

              <TextInput
                placeholder='Enter a Pf'
                style={style.textInputStyle}
              ></TextInput>

              <TextInput
                placeholder='Enter a Incentive'
                style={style.textInputStyle}
              ></TextInput>

              <TextInput
                placeholder='Enter a Employee Medical Issue'
                style={style.textInputStyle}
              ></TextInput>

              <TextInput
                placeholder='Enter a Salary'
                style={style.textInputStyle}
              ></TextInput>

            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={{ backgroundColor: 'green', alignItems: 'center' }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold' }}> Sumbit </Text></TouchableOpacity>

      </View>
    )
  }
}
const style = StyleSheet.create({
  textInputStyle: {

    fontSize: 32,
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    padding: 20
  },


  tinyLogo1: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 150,
    backgroundColor: 'White',


    textStyle: {

      fontSize: 32,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 10,


    }
  }
}
)
