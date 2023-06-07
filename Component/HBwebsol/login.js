import React from 'react'
import {react, useEffect} from "react";
import { View, Image, StyleSheet,Text,StatusBar,TextInput,TouchableOpacity,ScrollView,Dimensions} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Ripple from 'react-native-material-ripple';


const Login = ({navigation}) => {
const {height, width} = Dimensions.get('window');
    const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
        <StatusBar/>
        <ScrollView contentContainerStyle={{flexGrow:1,justifyContent:'space-around'}}>
        <View style={{alignItems:'center'}}>
        <Image
        style={styles.stretch}
        source={require('../assets/logo.png')}
      />
 
    
      <Text style={{
          color:'#E95D00',
          fontFamily:'PoppinsRegular',
          textAlign:'center',
          fontSize:25,
          }}>LOGIN</Text>
        </View>

<View style={{marginHorizontal:50}}>
    <View style={{borderBottomWidth:1, borderColor:"#ffff",marginVertical:20}}>
    <TextInput
        placeholder="User Name"
        placeholderTextColor={"#fff"}
        style={{color:"#fff",fontSize:20,fontFamily:'PoppinsRegular'}}
      />
    </View>
    <View style={{borderBottomWidth:1, borderColor:"#ffff",marginVertical:20}}>
    <TextInput
        placeholder="Password"
        placeholderTextColor={"#fff"}
        style={{color:"#fff",fontSize:20,fontFamily:'PoppinsRegular'}}
      />
    </View>
    </View>


    <View style={{alignItems:'center'}}>
  
    <Ripple 
         onPress={() => navigation.navigate("Bottomtab")}
        
        style={styles.ripple}
        rippleColor='#fff'
        rippleOpacity={0.9}
        rippleDuration={1000}
        rippleSize={1000}
        rippleSequential={true}
        rippleContainerBorderRadius={38}
        >
        <Text style={{color:'#fff',fontFamily:'PoppinsRegular',fontSize:25,textAlign:'center'}}>SUBMIT</Text>
      </Ripple>
           <Text style={{
                color:'#fff',
                fontFamily:'PoppinsRegular',
                textAlign:'center',
                fontSize:18}}>new user?<Text
                onPress={() => navigation.navigate("Signup")}
                style={{marginLeft:5,fontSize:18,fontFamily:'PoppinsSemiBold'}} > Sign up.</Text></Text>

        </View>
        </ScrollView>
     </View>
  )
}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#000'
    },
    stretch: {
        justifyContent:'center',
        alignItems:'center',
        width:120,
        height:120,
        marginTop:50,
        // marginBottom:0
    },
  
      ripple:{
        backgroundColor:'#FF6600',
        borderRadius:38,
        width: 238,
        height: 59,
        alignItems:'center',
        justifyContent:"center",
     
      }
})