import * as React from 'react';
import { View, Image, StyleSheet, Button, Text, ImageBackground, StatusBar, Dimensions, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';




const Setting = ({ navigation }) => {
  const dimensions = useWindowDimensions()
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <StatusBar  backgroundColor={"#231761"} />
      <ScrollView contentContainerStyle={{ flexgrow: 1 }} >
      <View style={{flexDirection:'row',marginVertical:20,alignItems:'center',marginHorizontal:10}}>
              <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon3}
                source={require('../assets/back.png')}
              />
                 </TouchableOpacity>
              <Text style={{ fontSize: 22,color:'#fff',paddingHorizontal:10}}>Settings</Text>
          
         
            </View>

        <Searchbar
          style={{ borderRadius: 10, marginHorizontal: 20, fontFamily: 'PoppinsRegular' }}
          placeholder="search settings"
          onChangeText={onChangeSearch}
          value={searchQuery} />

        <View style={styles.border}>

        
            

           


          <View style={{flexDirection:'column',marginVertical:10}}>

          <TouchableOpacity
          style={{flexDirection:'row'}}
              onPress={() => navigation.navigate("Account")}
            >
            <Image
              style={styles.icon2}
              source={require('../assets/account1.png')}
            />
            
              <Text style={styles.text} >Account</Text>
            </TouchableOpacity>
     


            <TouchableOpacity
          style={{flexDirection:'row'}}
          onPress={() => navigation.navigate("Notification")}
            >
            <Image
              style={styles.icon2}
              source={require('../assets/notification.png')}
            />
              <Text style={styles.text}>Notifications</Text>
            </TouchableOpacity>
      

            <TouchableOpacity
          style={{flexDirection:'row'}}
          onPress={() => navigation.navigate("Appearence")}
            >
            <Image
              style={styles.icon2}
              source={require('../assets/eye.png')}
            />
              <Text style={styles.text}>Appearence</Text>
            </TouchableOpacity>
          

            <TouchableOpacity
          style={{flexDirection:'row'}}
          onPress={() => navigation.navigate("Privacy")}
            >
            <Image
              style={styles.icon2}
              source={require('../assets/lock.png')}
            />
           <Text style={styles.text}>Privacy</Text>
            </TouchableOpacity>
        

            <TouchableOpacity
          style={{flexDirection:'row'}}
          onPress={() => navigation.navigate("Helpsupport")}
            >
            <Image
              style={styles.icon2}
              source={require('../assets/headphone.png')}
            />
              <Text style={styles.text}>Help & Support</Text>
            </TouchableOpacity>
          

            <TouchableOpacity
          style={{flexDirection:'row'}}
          onPress={() => navigation.navigate("About")}
            >
            <Image
              style={styles.icon2}
              source={require('../assets/about.png')}
            />
           <Text style={styles.text}>About</Text>
            </TouchableOpacity>
          
        </View>


<View style={{borderBottomWidth:0.5,marginHorizontal: 30,borderColor:'gray',marginBottom:30}}><Text style={{paddingVertical:50}}></Text></View>

        </View>
      </ScrollView>

    </View>
  );
};

export default Setting;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C1220'
  },
  border: {
    flex: 1,
    paddingVertical:20,
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 5,
    marginVertical: 15,
    marginHorizontal:2,
  },
  icon1: {
    height: 69,
    width: 70,
    marginLeft: -50
  },
  icon2: {
    height: 35,
    width: 35,
    marginHorizontal: 30,
    marginVertical: 20,
  },
  icon3: {
    height: 30,
    width: 30,
    // paddingHorizontal:10,
  },
  text: {
    fontSize: 22,
    fontFamily: 'PoppinsRegular',
    color: '#000000B2',
    marginHorizontal: 10,
    marginVertical: 20,
  },
})
