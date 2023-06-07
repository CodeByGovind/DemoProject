import React from "react";
import { StyleSheet, FlatList, Text, StatusBar, Image, View, SafeAreaView, TouchableOpacity,Dimensions} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Event1 from '../Event/Event1';
import Event2 from '../Event/Event2';
import Event3 from '../Event/Event3';
import Event4 from '../Event/Event4';
import Event5 from '../Event/Event5';

const {width,height} = Dimensions.get('screen');

const TopTab = createMaterialTopTabNavigator();
export default function Eventtab({navigation}) {
  return (
    <View style={{ flex: 1}}>
    <StatusBar  backgroundColor={"#231761"} />
      <View style={{ backgroundColor: '#0C1220', flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between', paddingHorizontal: 20, }}>
        <View><TouchableOpacity 
  onPress={() => navigation.goBack()}
  >
      <Image
       style={styles.icon3}
               source={require('./../../assets/back.png')}                  
               />
             </TouchableOpacity>
             </View>
             <View style={{flexDirection:'row'}}>
      <View>
        <Image
          style={styles.icon1}
          source={require('./../../assets/logo.png')}
        />
        </View>
        <View><Text style={{ color: '#fff', fontSize: 22, fontFamily: 'PoppinsRegular',paddingVertical:20}}>Sports Fantasy</Text></View>
        </View>
        
        
        <View><TouchableOpacity 
        onPress={() => navigation.navigate("Setting")}
        >
          <Image 
            style={styles.icon2}
            source={require('./../../assets/setting.png')}
          />
        </TouchableOpacity></View>
        
      </View>

      <TopTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#a8a7a7',
         
          tabBarStyle: {
            backgroundColor: '#FF6600',
            shadowColor: "#000",
            // borderBottomLeftRadius:20,
            // borderBottomRightRadius:20,
          }
        }}

      >
        <TopTab.Screen name="Cricket" component={Event1}
          options={{
            tabBarIcon: ({focused}) => (
             
              <Image
                style={{height: 22,
                  width: 24,
                  tintColor: focused ? '#444854' : '#fff',}}
                source={require('./../../assets/event1.png')}
              /> 
              
            ),
          }}
        />
        <TopTab.Screen name="Soccer" component={Event2}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
              style={{height: 22,
                width: 24,
                tintColor: focused ? '#444854' : '#fff',}}
                source={require('./../../assets/event2.png')}
              />
            ),
          }}

        />
        <TopTab.Screen name="BasketBall" component={Event3}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
              style={{height: 22,
                width: 24,
                tintColor: focused ? '#444854' : '#fff',}}
                source={require('./../../assets/event3.png')}
              />
            ),
          }}
        />
        <TopTab.Screen name="Volleyball" component={Event4}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
              style={{height: 22,
                width: 24,
                tintColor: focused ? '#444854' : '#fff',}}
                source={require('./../../assets/event4.png')}
              />
            ),
          }}
        />
        <TopTab.Screen name="Rugby" component={Event5}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
              style={{height: 22,
                width: 24,
                tintColor: focused ? '#444854' : '#fff',}}
                source={require('./../../assets/event5.png')}
              />
            ),
          }}
        />
      </TopTab.Navigator>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  icon1: {
    height: 65,
    width: 65,
  },
  icon2: {
    height: 30,
    width: 30,
  },
  icon3:{
    height:27,
    width:27,
  //  marginTop: 10,
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



  