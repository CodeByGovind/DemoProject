import * as React from 'react';
import {react, useEffect} from "react";
import { View, Image, StyleSheet, Button,Text,ImageBackground,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Splash = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => navigation.navigate("Login"), 1000);
  }, []);

  return (
    <View style={styles.container}>
       <StatusBar/>
     <ImageBackground style={styles.bg} source={require('../assets/splash1.png')}>
       <View style={{paddingVertical:50}}>
      <Image
        style={styles.stretch}
        source={require('../assets/logo.png')}
      />
      </View>
      <View style={{backgroundColor:'#0C1220',paddingVertical:1,marginLeft:-40,marginTop:-80}}>
      <Text style={styles.Text}>SPORTS FANTASY</Text>
      </View>
      </ImageBackground>
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  stretch: {
   justifyContent:'center',
   alignItems:'center',
   marginTop:'130%',
   marginHorizontal:160,
   width:150,
   height:150,

  },
  bg:{
    height:'100%',
    width:'114%',
    backgroundColor:'#0C1220'
  },
  Text:{
    color:'#FFFFFF',
    textAlign:'center',
    fontSize:40,
    fontFamily:'PoppinsMedium',
  }

});

