import * as React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet, Button, Text, ImageBackground, StatusBar, Dimensions, useWindowDimensions,ScrollView,TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';


const Notification = ({ navigation }) => {
    const dimensions = useWindowDimensions()
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [state, setState] = useState({
      check :true,
      Data :true
    })
    return ( 
    <View style={styles.container}>
        <StatusBar />
        <ScrollView contentContainerStyle={{flex:1}}>
        
            <View style={{flexDirection:'row',marginVertical:20,alignItems:'center',marginHorizontal:10}}>
              <TouchableOpacity
               onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon3}
                source={require('../../assets/back.png')}
              />
                 </TouchableOpacity>
              <Text style={{ fontSize: 22,color:'#fff',paddingHorizontal:10}}>Notification</Text>
          
         
            </View>
       
            <Searchbar
            style={{borderRadius:10,marginHorizontal:20,fontFamily: 'PoppinsRegular'}}
        placeholder="search settings"
        onChangeText={onChangeSearch}
        value={searchQuery}/>

         <View style={styles.border}>


         <View style={{flexDirection:'row',marginVertical:30,marginHorizontal:20}}>
           <TouchableOpacity
           onPress={()=>setState({...state,check:! state.check})}
           >
             <Image source={ state.check?require("../../assets/toggleon.png"): require("../../assets/toggleoff.png")} style={{width:30,height:30,marginVertical:25}}  ></Image>
        </TouchableOpacity>
        

        <TouchableOpacity >
        <Text  style={styles.text} >Enable/Disable Notification</Text>
        </TouchableOpacity>
        </View>

        <View style={{borderBottomWidth:0.5,marginHorizontal: 30,borderColor:'gray',marginTop:'130%'}}></View> 
        </View>
     
      
        </ScrollView>
  
      </View>
    );
  };

export default Notification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C1220'
  },
  border: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    elevation: 18,
    shadowColor: "#fff",
    marginVertical: 20,
    marginLeft: 7,
    
  },
  icon1: {
    height: 69,
    width: 70,
  },
  icon2:{
    height: 40,
    width: 40,
    // marginHorizontal:10,
    // marginVertical:20,
  },
  icon3:{
    height: 25,
    width: 25,
    // marginHorizontal:10,
    marginVertical:6,
  },
  text:{
  fontSize:20,
  fontFamily:'PoppinsRegular',
  color:'#000000B2',
  marginHorizontal:30,
  marginVertical:25,
  },
  icon:{
    height: 30,
    width: 30,
    borderRadius:30,
    marginVertical:5,
    marginHorizontal:20,
  }
 
})