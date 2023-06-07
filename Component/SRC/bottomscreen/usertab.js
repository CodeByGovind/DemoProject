import * as React from 'react';
import { View, Image, StyleSheet, Button,Text,ImageBackground,StatusBar,Dimensions,TouchableOpacity} from 'react-native';




const {width,height} = Dimensions.get('screen');
const Usertab = ({ navigation }) => {
    return (
      <View style={styles.container}>

      <View style={{backgroundColor:'#0C1220', flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
  <TouchableOpacity style={{marginTop:12}}
  onPress={() => navigation.goBack()}
  >
      <Image
       style={styles.icon3}
               source={require('./../../assets/back.png')}                  
               />
             </TouchableOpacity>
      <Image
             style={styles.icon1}
               source={require('./../../assets/logo.png')}                  
               />
      <Text style={{color:'#fff',fontSize:24,fontFamily:'PoppinsRegular',marginLeft:-40,marginTop:10}}>Sports Fantasy</Text>
      <Text></Text>
      </View>

      <View style={{alignItems:'center',marginVertical:30}}>
      <Image
             style={styles.icon}
               source={require('../../assets/pic.png')}                  
               />
               <Text style={{color:'#FFFFFF',fontSize:20}}>Lara Croft</Text>
               </View>
               <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'#fff'}}>
               <View>
               <Text style={{color:'#FFFFFF',marginLeft:110,fontSize:20}}>Followers</Text>
               <Text style={{color:'#FFFFFF',textAlign:'center',marginLeft:110,fontSize:20}}>10</Text>
               </View>
               <View style={{borderWidth:1,borderColor:'#fff',marginHorizontal:30}}></View>
               <View>
               <Text style={{color:'#FFFFFF',marginLeft:-10,fontSize:20}}>Following</Text>
               <Text style={{color:'#FFFFFF',textAlign:'center',fontSize:20}}>10</Text>
               </View>
               </View>

               <View style={{flexDirection:'row',marginVertical:30,marginHorizontal:30}}>
               <Image
             style={styles.icon2}
               source={require('../../assets/pic.png')}                  
               />
               <View style={{marginHorizontal:20}}>
               <Text style={{color:'#FFFFFF',fontSize:20,fontFamily: 'PoppinsRegular',}}>e-mail</Text>
               <Text style={{color:'#FFFFFF',fontSize:15,fontFamily: 'PoppinsRegular',}}>helloworld@mail.com</Text>
               </View>
               </View>
               <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:30}}>
               <Image
             style={styles.icon2}
               source={require('../../assets/pic.png')}                  
               />
               <View style={{marginHorizontal:20}}>
               <Text style={{color:'#FFFFFF',fontSize:20,fontFamily: 'PoppinsRegular',}}>Phone</Text>
               <Text style={{color:'#FFFFFF',fontSize:15,fontFamily: 'PoppinsRegular',}}>+91 7777111122</Text>
               </View>
               </View>
      </View>
      );
};

export default Usertab;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#0C1220'
  },
  icon:{
    height:170,
    width:170,
    // height:height/5,
    // width:width/2.4,
    borderRadius:100,
  },
  icon1:{
    height:59,
    width:70,
  },
  icon2:{
    height:50,
    width:50,
    marginVertical:8,
  },
  icon3:{
    height:30,
    width:30,
  },
  top: {
    flex: 1,
    height: "1%",
    alignItems: "center",
    justifyContent: "center",
  },
  flatListContainer: {
    flex: 1,
  },
 
})

