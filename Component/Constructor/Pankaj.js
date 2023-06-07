import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native'
import React from 'react'

const Pankaj = () => {
  return (
    <ScrollView>
    <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
        <Image style={styles.img}
   source={require('../FlexDemo/image/rohit-sharma.jpg')}/>
   <Text style={{fontSize:32,alignSelf:'center'}}>Rohit</Text>
        </View>
        <View style={{flexDirection:'row'}}>
   
   <Image style={styles.img}
   source={require('../FlexDemo/image/rohit-sharma.jpg')}/>
   <Text style={{fontSize:32,alignSelf:'center'}}>Rohit</Text>
   </View>

   <Image style={styles.img}
   source={require('../FlexDemo/image/rohit-sharma.jpg')}/>
   <Image style={styles.img}
   source={require('../FlexDemo/image/rohit-sharma.jpg')}/>
   <Image style={styles.img}
   source={require('../FlexDemo/image/rohit-sharma.jpg')}/>
   <Image style={styles.img}
   source={require('../FlexDemo/image/rohit-sharma.jpg')}/>
   <Image style={styles.img}
   source={require('../FlexDemo/image/rohit-sharma.jpg')}/>
   <Image style={styles.img}
   source={require('../FlexDemo/image/rohit-sharma.jpg')}/>
   <Image style={styles.img}
   source={require('../FlexDemo/image/rohit-sharma.jpg')}/>
    </View>
    </ScrollView>

  )
}

export default Pankaj

const styles = StyleSheet.create({
    img:{
        // width:230,
        // height:200,
        // marginTop:50,
        // resizeMode: 'contain',
        // borderRadius:100,
        width: 200,
        height: 200,
        // 'cover', 'contain', 'stretch', 'repeat', 'center'
        resizeMode: 'stretch',
        // resizeMode: 'contain'
        // resizeMode: 'cover'
        // resizeMode: 'repeat'
        // resizeMode: 'center',
        borderRadius: 100,
        backgroundColor: 'teal',
        marginTop: 30,
        marginLeft: 15
    }
})