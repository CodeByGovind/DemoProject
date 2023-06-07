import { Text, View, Image, StyleSheet, ScrollView, Switch } from 'react-native'
import React, { Component } from 'react';

export default class FlexDemoAssigment extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: 'grey' }}>
          <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Switch
              value={true}
              onValueChange={(val) => console.log(val)} />


          </View>
          <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 30 }}>


          </View>
          {/* <ScrollView horizontal={false}> */}
          <View style={{ flex: 1, backgroundColor: 'grey', flexDirection: 'column' }}>
            <View style={{ backgroundColor: 'black', flexDirection: 'row', }}>
              <View>
                <Image
                  style={styles.tinyLogo}
                  source={require('../FlexDemo/image/rohit-sharma.jpg')} />

              </View>

              <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>FlexDemo 1</Text>
                <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
              </View>

              <View>
                <View />
              </View>

              <View style={{ backgroundColor: 'black', flexDirection: 'row', }}>
                <View>
                  <Image
                    style={styles.tinyLogo}
                    source={require('../FlexDemo/image/rohit-sharma.jpg')} />

                </View>

                <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>FlexDemo 1</Text>
                  <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                  <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                  <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                </View>
              </View>

            </View>



            <View>
              <View style={{ backgroundColor: 'black', flexDirection: 'row', }}>
                <View>
                  <Image
                    style={styles.tinyLogo}
                    source={require('../FlexDemo/image/rohit-sharma.jpg')} />

                </View>

                <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>FlexDemo 1</Text>
                  <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                  <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                  <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                </View>
              </View>

            </View>


            <View>
              <View style={{ backgroundColor: 'black', flexDirection: 'row', }}>
                <View>
                  <Image
                    style={styles.tinyLogo}
                    source={require('../FlexDemo/image/rohit-sharma.jpg')} />

                </View>

                <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>FlexDemo 1</Text>
                  <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                  <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                  <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                </View>


              </View>
            </View>
            <View style={{ flex: 1, backgroundColor: 'grey', flexDirection: 'column' }}>
              <View style={{ backgroundColor: 'black', flexDirection: 'row', }}>
                <View>
                  <Image
                    style={styles.tinyLogo}
                    source={require('../FlexDemo/image/rohit-sharma.jpg')} />

                </View>

                <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>FlexDemo 1</Text>
                  <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                  <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                  <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                </View>
              </View>

              <View>
                <View style={{ backgroundColor: 'black', flexDirection: 'row', }}>
                  <View>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../FlexDemo/image/rohit-sharma.jpg')} />

                  </View>

                  <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>FlexDemo 1</Text>
                    <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                    <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                    <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                  </View>
                </View>

              </View>



              <View>
                <View style={{ backgroundColor: 'black', flexDirection: 'row', }}>
                  <View>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../FlexDemo/image/rohit-sharma.jpg')} />

                  </View>

                  <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>FlexDemo 1</Text>
                    <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                    <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                    <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                  </View>
                </View>

              </View>


              <View>
                <View style={{ backgroundColor: 'black', flexDirection: 'row', }}>
                  <View>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../FlexDemo/image/rohit-sharma.jpg')} />

                  </View>

                  <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>FlexDemo 1</Text>
                    <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                    <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                    <Text style={{ fontSize: 26, color: 'black' }}>FlexDemo 1</Text>
                  </View>


                </View>
              </View>
            </View>

          </View>
          {/* </ScrollView> */}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    // alignSelf :'center',
    // justifyContent:'center',
    width: 200,
    height: 200,
    margin: 10,
    // 'cover', 'contain', 'stretch', 'repeat', 'center'
    resizeMode: 'stretch',
    // resizeMode: 'contain'
    // resizeMode: 'cover'
    // resizeMode: 'repeat'
    //  resizeMode: 'center',
    borderRadius: 100
  }
})
