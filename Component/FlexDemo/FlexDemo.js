import { Text, View,ImageBackground } from 'react-native'
import React, { Component } from 'react'

export default class FlexDemo extends Component {
  render() {
    return (
      <View style={{flex:1 ,backgroundColor:'grey'}}> 
      {/* <scrollbars> */}
        <View style={{flex:1,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>FlexDemo 1</Text>
      </View>
      <View style={{flex:1,backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>FlexDemo 2</Text>
      </View>
      <View style={{flex:6,backgroundColor:'olive',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>FlexDemo 3</Text>
      </View>
      <View style={{flex:1,backgroundColor:'gold',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>FlexDemo 4</Text>
      </View>





      {/* <View style={{flex:1,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>FlexDemo 1</Text>
      </View>
      <View style={{flex:1,backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>FlexDemo 2</Text>
      </View>
      <View style={{flex:1,backgroundColor:'olive',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>FlexDemo 3</Text>
      </View>
      <View style={{flex:1,backgroundColor:'gold',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>FlexDemo 4</Text>
      </View> */}
      {/* </scrollbars> */}
      </View>
    )
  }
}





