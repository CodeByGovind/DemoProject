import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Settings!</Text>
        </View>
    );
}

function ContactScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Career screen</Text>
        </View>
    );
}

function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Profile screen</Text>
      </View>
    );
  }
  function OutlineScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Outline screen</Text>
      </View>
    );
  }
const Tab = createBottomTabNavigator();

export default function TabDemo() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name == "Home") {
                            iconName = focused ? 'albums' : 'albums-outline';
                        }
                        else if (route.name === 'Profile') {
                            iconName = focused
                              ? 'menu'
                              : 'menu-outline';
                          }
                          else if (route.name === 'outline') {
                            iconName = focused
                              ? 'md-infinite'
                              : 'md-infinite-outline';
                          }
                        else if (route.name === 'Contact') {
                            iconName = focused
                              ? 'ios-notifications-circle'
                              : 'ios-notifications-circle-outline';
                          } 
                        else if (route.name == "Settings") {
                            iconName = focused ? 'calendar' : 'calendar-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={60} color={color} />;
                    },
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: { height: 100 },
                    tabBarLabelStyle: {
                        fontSize: 23,
                      }
                    
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}} />
                <Tab.Screen name="Contact" component={ContactScreen}
                    options={{ headerShown: false}} />
                <Tab.Screen name="Profile" component={ProfileScreen}options={{headerShown: false}}/>
                <Tab.Screen name="outline" component={OutlineScreen}options={{headerShown: false}}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}