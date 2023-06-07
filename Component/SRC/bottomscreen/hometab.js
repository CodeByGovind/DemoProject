
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, FlatList, TouchableOpacity,StatusBar} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Sport from '../home/sport';
import Volleyboll from '../home/volleyboll';
import Cricket from '../home/cricket';
import Basketball from '../home/basketball';
import Ball from '../home/ball';


const TopTab = createMaterialTopTabNavigator();
export default function Hometab({navigation}) {
  return (
    <View style={{ flex: 1}}>
   <StatusBar  backgroundColor={"#231761"} />
      <View style={{ backgroundColor: '#2b1e6e', flexDirection: 'row', alignItems: 'center',justifyContent:'space-evenly'}}>
        <View style={{marginHorizontal:40}}></View>
    <View style={{flexDirection:'row'}}>
      <View style={{}}>
        <Image
          style={styles.icon1}
          source={require('./../../assets/logo.png')}
        />
        </View>
        <View><Text style={{ color: '#fff', fontSize: 22, fontFamily: 'PoppinsRegular',paddingVertical:20,marginRight:30}}>Sports Fantasy</Text></View>
        </View>
        
        
        <View style={{paddingHorizontal:20}}><TouchableOpacity 
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
          // tabBarActiveTintColor: '#000',
          // tabBarInactiveTintColor: '#a8a7a7',
          tabBarStyle: {
            backgroundColor: '#fff',
            // shadowColor: "#000",
          //  borderBottomLeftRadius:22,
          //  borderBottomRightRadius:22,
             
          }
        }}

      >
        <TopTab.Screen name="Rugby" component={Sport}
          options={{
            tabBarIcon: () => (
              <Image
                style={styles.icon}
                source={require('./../../assets/sport.png')}
              />
            ),
          }}
        />
        <TopTab.Screen name="Volleyboll" component={Volleyboll}
          options={{
            tabBarIcon: () => (
              <Image
                style={styles.icon}
                source={require('./../../assets/volleyboll.png')}
              />
            ),
          }}

        />
        <TopTab.Screen name="Cricket" component={Cricket}
          options={{
            tabBarIcon: () => (
              <Image
                style={styles.icon}
                source={require('./../../assets/cricket.png')}
              />
            ),
          }}
        />
        <TopTab.Screen name="Basketball" component={Basketball}
          options={{
            tabBarIcon: () => (
              <Image
                style={styles.icon}
                source={require('./../../assets/basket1.png')}
              />
            ),
          }}
        />
        <TopTab.Screen name="Ball" component={Ball}
          options={{
            tabBarIcon: () => (
              <Image
                style={styles.icon}
                source={require('./../../assets/ball.png')}
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
  icon: {
    height: 25,
    width: 25,
  },
  icon1: {
    height: 65,
    width: 65,
  },
  icon2: {
    height: 30,
    width: 30,
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






