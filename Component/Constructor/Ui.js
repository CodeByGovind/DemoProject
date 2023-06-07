import { View, Text,Image,StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function Ui() {
  return (
    <ScrollView>
    <View style={{flex:1}}>
        {/* //========main============================ */}
      <Text>Ui</Text>
        {/* //========1st============================ */}

      <ScrollView horizontal={true}>
      <View style={{flexDirection:'row'}}>
        <View>
        <Image source={require('../FlexDemo/image/s31.jpg')}
        style={styles.img}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>
        <View>
        <Image source={require('../FlexDemo/image/s1.jpg')}
        style={styles.img}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>
        <View>
        <Image source={require('../FlexDemo/image/s2.jpg')}
        style={styles.img}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>
        <View>
        <Image source={require('../FlexDemo/image/s3.jpg')}
        style={styles.img}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>
        
    </View>
    
    </ScrollView>
        {/* //========2nd============================ */}

    <View>
    <Text style={{fontSize:22,color:"black",marginTop:10,fontWeight:'bold'}}> Top rated near you</Text>    

    <ScrollView  horizontal={true}>
      <View style={{flexDirection:'row'}}>
         
        <View>
        <Image source={require('../FlexDemo/image/s9.jpg')}
        style={styles.img2}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>
        <View>
        <Image source={require('../FlexDemo/image/s8.jpg')}
        style={styles.img2}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>
        <View>
        <Image source={require('../FlexDemo/image/s7.jpg')}
        style={styles.img2}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>
        <View>
        <Image source={require('../FlexDemo/image/s6.jpg')}
        style={styles.img2}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>
        <View>
        <Image source={require('../FlexDemo/image/s5.jpg')}
        style={styles.img2}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>

    </View>
    </ScrollView>
    </View>
    {/* //==========4=================== */}
    <View>
    <Text style={{fontSize:22,color:"black",marginTop:10,fontWeight:'bold'}}>What's on your mind ?</Text>    

    <ScrollView  horizontal={true}>
      <View style={{flexDirection:'row'}}>
         
        <View>
        <Image source={require('../FlexDemo/image/s9.jpg')}
        style={styles.img3}
        />
      <Text style={styles.text}>magi</Text>    
        </View>
        <View>
        <Image source={require('../FlexDemo/image/s8.jpg')}
        style={styles.img3}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>
        <View>
        <Image source={require('../FlexDemo/image/s7.jpg')}
        style={styles.img3}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>
        <View>
        <Image source={require('../FlexDemo/image/s6.jpg')}
        style={styles.img3}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>
        <View>
        <Image source={require('../FlexDemo/image/s5.jpg')}
        style={styles.img3}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>

    </View>
    </ScrollView>
    </View>
    {/* ===================5================= */}
    <View>
    <Text style={{fontSize:22,color:"black",marginTop:10,fontWeight:'bold'}}> Top rated near you</Text>    

    <ScrollView>
      <View style={{flexDirection:'column'}}>
         
        <View>
        <Image source={require('../FlexDemo/image/s9.jpg')}
        style={styles.img2}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>
        <View>
        <Image source={require('../FlexDemo/image/s8.jpg')}
        style={styles.img2}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>
        <View>
        <Image source={require('../FlexDemo/image/s7.jpg')}
        style={styles.img2}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>
        <View>
        <Image source={require('../FlexDemo/image/s6.jpg')}
        style={styles.img2}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>
        <View>
        <Image source={require('../FlexDemo/image/s5.jpg')}
        style={styles.img2}
        />
      <Text style={styles.text}>Ui</Text>    
        </View>

    </View>
    </ScrollView>
    </View>
    </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    img:{
        width: 340,
        height: 180,
        // 'cover', 'contain', 'stretch', 'repeat', 'center'
        // resizeMode: 'stretch',
        // resizeMode: 'contain',
        resizeMode: 'cover',
        // resizeMode: 'repeat',
        // resizeMode: 'center',
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 15
    },
    img2:{
        width: 130,
        height: 140,
        // 'cover', 'contain', 'stretch', 'repeat', 'center'
        // resizeMode: 'stretch',
        // resizeMode: 'contain',
        resizeMode: 'cover',
        // resizeMode: 'repeat',
        // resizeMode: 'center',
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 15
    },
    img3:{
        width: 75,
        height: 75,
        // 'cover', 'contain', 'stretch', 'repeat', 'center'
        // resizeMode: 'stretch',
        // resizeMode: 'contain',
        resizeMode: 'cover',
        // resizeMode: 'repeat',
        // resizeMode: 'center',
        borderRadius: 100,
        marginTop: 30,
        marginLeft: 15
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        // backgroundColor: 'black',
        textAlign: 'center',
        color: 'black',
        // borderWidth: 1,
        width: 70,
        borderRadius: 50,
        alignSelf: 'center',
        borderColor: 'black',
        marginTop: 10
    }
})