import { Text, View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (

      <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, padding: 10 }}>
        <View style={{ marginTop: 10, padding: 15 }}>
          <Image
            style={styles.tinyLogo}
            source={require('../FlexDemo/image/myimg.jpeg')} />
          {/* <Text>_______________________________</Text> */}
          <Text style={styles.headerTitle3}> CONTACT____</Text>
          <Text style={styles.headerTitle2} >Address : </Text>
          <Text style={styles.headerTitle4} >52, rupesh yadav </Text>
          <Text style={styles.headerTitle4} >nagar, MIG colony</Text>
          <Text style={styles.headerTitle4} >LIG square</Text>
          <Text style={styles.headerTitle4} > indore (m.p.)</Text>

          <Text style={styles.headerTitle2}>Mobile_No.:</Text>
          <Text style={styles.headerTitle4}> 9009961036</Text>

          <Text style={styles.headerTitle2}>Email_Id :</Text>
          <Text style={styles.headerTitle4}>govindcarpenter23</Text>
          <Text style={styles.headerTitle4}>@gmail.com</Text>
        </View>

        <View style={{ marginTop: 30, paddingTop: 10 }}>
          <Text style={styles.headerTitle1}>Govind </Text>
          <Text style={styles.headerTitle1}>Carpenter </Text>
          <Text style={styles.headerTitle2}>React-Native </Text>
          <Text style={styles.headerTitle2}>Developer </Text>
          <Text style={styles.headerTitle2}> EDUCATION </Text>

          <Text style={styles.headerTitle4}>2016 - 2019</Text>
          <Text style={styles.headerTitle4}>B.Sc(MATHS)</Text>
          <Text style={styles.headerTitle4}>BU Bhopal</Text>

          <Text style={styles.headerTitle2}> SKILLS</Text>

          <Text style={styles.headerTitle4}>HTML & CSS</Text>
          <Text style={styles.headerTitle4}>JAVA SCRIPT</Text>
          <Text style={styles.headerTitle4}>React _ Native</Text>
          
          <Text style={styles.headerTitle2}>Work Experience</Text>
          <Text style={styles.headerTitle3}>fresher</Text>

        </View>
        <View>
        </View>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  headerTitle1: {
    fontSize: 32,
    fontWeight: 'bold',
    backgroundColor: 'white',
    textAlign: 'center',
    color: 'black',

  },
  headerTitle2: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'teal',
    textAlign: 'center',
    color: 'white',
    marginTop: 15,
    padding: 2,
  },
  headerTitle3: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'white',
    textAlign: 'center',
    color: 'red',
    marginTop: 30,
  },
  headerTitle4: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'white',
    textAlign: 'center',
    color: 'black',
  },
  headerTitle5: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
    textAlign: 'center',
    color: 'black',


  },
  TextInput: {

    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
  },
  TextInput1: {

    fontSize: 20,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
  },
  tinyLogo: {
    alignSelf: 'center',
    width: 170,
    height: 170,
    // padding: 10, margin: 20,
    borderRadius: 20,
    // 'cover', 'contain', 'stretch', 'repeat', 'center'
    resizeMode: 'stretch',
    // resizeMode: 'contain'
    // resizeMode: 'cover'
    // resizeMode: 'repeat'
    // resizeMode: 'center',

  }

})

