import * as React from 'react';
import { Image,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hometab from '../bottomscreen/hometab';
import Chattab from '../bottomscreen/chattab';
import Eventtab from '../bottomscreen/event';
import Usertab from '../bottomscreen/usertab';
import Wallettab from '../bottomscreen/wallettab';

import Chat from '../BottomChat/chat';


const Tab = createBottomTabNavigator();

function Bottomtab(){
  return (
    <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#2b1e6e',
                tabBarInactiveTintColor: '#a8a7a7',
                tabBarStyle: {
                    height: 55,
                    // flex:1,
                    backgroundColor: '#fff',
                    // borderTopLeftRadius:20,
                    // borderTopRightRadius:20,
                    position: 'absolute',
                    shadowColor: "#000",
                    // shadowOffset: {
                    //     width: 50,
                    //     height: 50,
                    // },
                    // shadowOpacity: 10.58,
                    // shadowRadius: 40.00
                    // elevation: 10,
                }
            }}
        >
      <Tab.Screen name="Home" component={Hometab}
       options={{
       tabBarIcon: ({ focused,}) =>  (
         
          <Image
          style={[styles.icon, { tintColor:focused? '#2b1e6e':'gray'}]}
            source={require('./../../assets/home.png')                  
            }/>
       ),             
      }} />
      <Tab.Screen name="Event" component={Eventtab} 
       options={{
          tabBarIcon: ({focused}) => (
          <Image
          style={[styles.icon, { tintColor:focused? '#2b1e6e':'gray'}]}
            source={require('./../../assets/event.png')                  
            }/>
       ),             
      }}
      
      />
      <Tab.Screen name="Chat" component={Chattab} 
      options={{
        tabBarIcon: ({focused}) => (
        <Image
        style={[styles.icon, { tintColor:focused? '#2b1e6e':'gray'}]}
          source={require('./../../assets/chat.png')                  
          }/>
     ),             
    }}
      />
      <Tab.Screen name="Wallet" component={Wallettab} 
      options={{
        tabBarIcon: ({focused}) => (
        <Image
        style={[styles.icon, { tintColor:focused? '#2b1e6e':'gray'}]}
          source={require('./../../assets/wallet.png')                  
          }/>
     ),             
    }}
      />
      <Tab.Screen name="User" component={Usertab}
      options={{
        tabBarIcon: ({focused}) => (
        <Image
        style={[styles.icon, { tintColor:focused? '#2b1e6e':'gray'}]}
          source={require('./../../assets/user.png')                  
          }/>
     ),             
    }}
      
      />
    </Tab.Navigator>
  );
}

export default Bottomtab;

const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor:'#000'
  },
  icon:{
    height:25,
    width:25,
    // borderRadius:50,
  },
 
})