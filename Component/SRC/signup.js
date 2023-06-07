import React from 'react'
import { react, useEffect } from "react";
import { View, Image, StyleSheet, Text, ImageBackground, StatusBar, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import Ripple from 'react-native-material-ripple';



const Signup = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <StatusBar />
<ScrollView contentContainerStyle={{flexGrow:1,justifyContent:'space-around'}}>
      <View style={{ alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
       
        <Image
          style={styles.stretch}
          source={require('../assets/logo.png')}
        />
         
        
         <Text style={{
          color: '#E95D00',
          fontFamily: 'PoppinsRegular',
          textAlign: 'center',
          fontSize: 22,
        }}>SIGN UP</Text>
        </View>
     <View style={{marginHorizontal:50}}>

      <View style={{ borderBottomWidth: 1, borderColor: "#ffff",marginVertical:15 }}>
        <TextInput
          placeholder="Name"
          placeholderTextColor={"#fff"}
          style={{ color: "#fff", fontSize: 20, fontFamily: 'PoppinsRegular'}}
        />
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: "#ffff", marginVertical:15}}>
        <TextInput
          placeholder="Phone No."
          placeholderTextColor={"#fff"}
          style={{ color: "#fff", fontSize: 20, fontFamily: 'PoppinsRegular' }}
        />
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: "#ffff",marginVertical:20}}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={"#fff"}
          style={{ color: "#fff", fontSize: 20, fontFamily: 'PoppinsRegular' }}
        />
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: "#ffff",marginVertical:20}}>
        <TextInput
          placeholder="Confirm password"
          placeholderTextColor={"#fff"}
          style={{ color: "#fff", fontSize: 20, fontFamily: 'PoppinsRegular' }}
        />
      </View>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:0}}>
      <View style={{ alignItems: 'center' }}>
        <Ripple
          onPress={() => navigation.navigate("Login")}

          style={styles.ripple}
          rippleColor='#fff'
          rippleOpacity={0.9}
          rippleDuration={1000}
          rippleSize={1000}
          rippleSequential={true}
          rippleContainerBorderRadius={38}
        >
          <Text style={{ color: '#fff',  fontFamily: 'PoppinsRegular', fontSize: 25, textAlign: 'center', }}>SUBMIT</Text>
        </Ripple>
      </View>

      <View>
        <Text style={{
          color: '#fff',
          fontFamily: 'PoppinsRegular',
         
          alignSelf:'center',
          fontSize: 18,
        
        }}>already user?<Text
          onPress={() => navigation.navigate("Login")}
          style={{ marginLeft: 5, fontSize: 18, fontFamily: 'PoppinsSemiBold', }} > Login.</Text></Text>
      </View>
      </View>

      </ScrollView>
    </View>
  )
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  stretch: {
    justifyContent: 'center',
    alignItems: 'center',
    width:120,
    height:120,
  },
  ripple: {
    backgroundColor:'#FF6600',
        borderRadius:38,
        width: 238,
        height: 59,
        alignItems:'center',
        justifyContent:"center",
  },
})