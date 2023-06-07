import React from 'react'
import { View, Text } from 'react-native'
import SliderApp from '../Sport/sportslider';
import FlatData from '../Sport/Flatdata';
import RugbyNews from '../Sport/rugbynew';

export default function Sport({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:"#fff",}}>
    <SliderApp />
    <FlatData/>
    <RugbyNews/>
    </View>
  )
}