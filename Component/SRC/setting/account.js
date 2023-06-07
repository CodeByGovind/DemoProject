import * as React from 'react';
import { View, Image, StyleSheet, Button, Text, ImageBackground, StatusBar, Dimensions, useWindowDimensions,ScrollView,TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';



const Account = ({ navigation }) => {
    const dimensions = useWindowDimensions()
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
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
              <Text style={{ fontSize: 22,color:'#fff',paddingHorizontal:10}}>Accounts</Text>
            </View>

            <Searchbar
            style={{borderRadius:10,marginHorizontal:20,fontFamily: 'PoppinsRegular'}}
        placeholder="search settings"
        onChangeText={onChangeSearch}
        value={searchQuery}/>

         <View style={styles.border}>
         <View style={{flexDirection:'column'}}>


        <View style={{marginVertical:70}}>
        <TouchableOpacity 
         style={{flexDirection:'row'}}
         onPress={() => navigation.navigate("Account")}
        >
        <Image
          style={styles.icon2}
          source={require('../../assets/verification1.png')}
        />
        <Text  style={styles.text} >Account verification</Text>
        </TouchableOpacity>

       
        <TouchableOpacity 
         style={{flexDirection:'row',paddingVertical:30}}
         onPress={() => navigation.navigate("Account")}
        >
        <Image
          style={styles.icon2}
          source={require('../../assets/warning.png')}
        />
        <Text  style={styles.text} >Deactivate temporarily</Text>
        </TouchableOpacity>
     

     
        <TouchableOpacity 
         style={{flexDirection:'row',paddingVertical:10}}
         onPress={() => navigation.navigate("Account")}
        >
        <Image
          style={styles.icon2}
          source={require('../../assets/delete.png')}
        />
        <Text  style={styles.text} >Delete account</Text>
        </TouchableOpacity>
       
        <View style={{borderBottomWidth:0.5,marginHorizontal: 30,borderColor:'gray',marginTop:'85%'}}></View> 
        </View>


        </View>
        </View>
        </ScrollView>
  
      </View>
    );
  };

export default Account;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C1220'
  },
  border: {
    flex: 1,
    paddingVertical:10,
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 5,
    marginVertical: 20,
    marginHorizontal:2,
  },
  icon1: {
    height: 60,
    width: 70,
  },
  icon2:{
    height: 35,
    width: 35,
    marginHorizontal:20,
  },
  icon3: {
    height: 25,
    width: 25,
    marginHorizontal: 10,
    marginVertical: 7,
  },
  text: {
    fontSize: 20,
    fontFamily: 'PoppinsRegular',
    color: '#000000B2',
    marginHorizontal: 10,
    
  },
  icon:{
    height: 30,
    width: 30,
    borderRadius:30,
    marginVertical:5,
    marginHorizontal:20,
  }
 
})