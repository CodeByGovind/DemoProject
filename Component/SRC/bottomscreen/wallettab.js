import * as React from 'react';
import { View, Image, StyleSheet, Button, Text, ImageBackground, StatusBar, Dimensions, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';



const Wallettab = ({ navigation }) => {
  const dimensions = useWindowDimensions()
  return (

    <View style={styles.container}>
      <StatusBar  backgroundColor={"#231761"} />
      <ScrollView contentContainerStyle={{ flexgrow: 1 }}>
      <View style={{backgroundColor:'#0C1220', flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
  <TouchableOpacity style={{}}
  onPress={() => navigation.goBack()}
  >
      <Image
       style={styles.icon3}
               source={require('./../../assets/back.png')}                  
               />
             </TouchableOpacity>
      <Image
             style={styles.icon}
               source={require('./../../assets/logo.png')}                  
               />
      <Text style={{color:'#fff',fontSize:24,fontFamily:'PoppinsRegular',marginLeft:-40,marginTop:10}}>Sports Fantasy</Text>
      <Text></Text>
      </View>



        <View style={styles.border}>
          <Text style={styles.text}>My Wallet</Text>
          <Text style={{
            color: '#fff', fontSize: 25, textAlign: 'center', marginTop: -50, elevation: 20, shadowColor: "#000",
            marginLeft: 7,
          }}>₹ 100.00</Text>

        </View>
        <View style={styles.border1}>
          <TouchableOpacity><Image
            style={styles.icon1}
            source={require('../../assets/bhimupi.png')
            } /></TouchableOpacity>

          <TouchableOpacity><Image
            style={styles.icon1}
            source={require('../../assets/scan.png')
            } /></TouchableOpacity>

          <TouchableOpacity><Image
            style={styles.icon1}
            source={require('../../assets/bankcard.png')
            } />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon1}
              source={require('../../assets/bank.png')
              } />
          </TouchableOpacity>


        </View>
        <View style={styles.border2}>
          <Text style={{ color: '#0C1220', fontSize: 22, textAlign: 'center', }}>My Cards</Text>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between',alignItems:'center'}}>

            <Text style={{ color: '#0C1220', fontSize: 20, textAlign: 'center', fontSize: 20 }}> 1234 XXXX XXXX 1234</Text>
            <Text style={{ color: '#0C1220', fontSize: 20, textAlign: 'center', fontSize: 20 }}>09/2023</Text>
            <View style={{paddingHorizontal: 10 }}>
              <Image
                style={styles.icon2}
                source={require('../../assets/visa.png')
                } />
            </View>
          </View>
        </View>
        <View style={styles.border3}>
          <Text style={{ color: '#fff', fontSize: 22, textAlign: 'center', marginBottom: 30, paddingVertical: 10 }}>Activity</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, marginHorizontal: 10 }}>

            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center', fontSize: 20 }}>Winning ammount</Text>
            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center', fontSize: 20 }}>+ ₹ 10</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 8 }}>

            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center', fontSize: 20 }}>Money added</Text>
            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center', fontSize: 20 }}>+ ₹ 50</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8, marginHorizontal: 10 }}>

            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center', fontSize: 20 }}>Withdrawal</Text>
            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center', fontSize: 20 }}>- ₹ 50</Text>
          </View>
        </View>
      </ScrollView>

    </View>
  );
};

export default Wallettab;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C1220'
  },
  border: {
    borderRadius: 10,
    backgroundColor: "#F0853F",
    elevation: 18,
    shadowColor: "#fff",
    marginVertical: 20,
    alignSelf: "center",
    width: '98%',
    height: '20%',
  },
  border1: {
    // flex: 0.15,
    flexDirection: 'row',
    borderRadius: 12,
    backgroundColor: "#D9D9D9",
    elevation: 18,
    shadowColor: "#fff",
    alignItems:'center',
    alignSelf:'center',
    width: '96.5%',
    height: Dimensions.get('window').height / 12,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginHorizontal:10,
  marginTop: -12,
  },
  border2: {
    borderRadius: 10,
    backgroundColor: "#B0B1B4",
    elevation: 18,
    shadowColor: "#fff",
    marginVertical: 10,
    alignSelf: "center",
    width: '98%',
    height: 145,
    // marginTop: 5,
    opacity: 40,
  },
  border3: {
    flex: 0.69,
    // height:height/3.5,
    borderRadius: 10,
    backgroundColor: "#444854",
    // marginTop: -10,
    alignSelf: "center",
    width: '98%',
    height: Dimensions.get('window').height / 2.54
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
    marginVertical: 40,
  },
  icon:{
    width: 65,
    height: 65,
  },
  icon1: {
    width: 40,
    height: 40,
  },
  icon2: {
    width: 50,
    height: 50,
  },
  icon3: {
    width: 30,
    height: 30,
    marginTop: 17,
  }

})