import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
// import { Icon } from 'react-native-vector-icons/icon';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';




const Tab = createMaterialTopTabNavigator();
class ResponsiveUi extends Component {
    render() {
        return (
            <Tab.Navigator

                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) => {
                        let iconName;
                        //===============================================================================
                        // "md-log-in","md-log-in-outline","md-log-in-sharp","md-log-out","md-log-out-outline","md-log-out-sharp","md-logo-amazon","md-logo-amplify","md-logo-android","md-logo-angular","md-logo-apple","md-logo-apple-appstore","md-logo-bitbucket","md-logo-bitcoin"
                        // md-search","md-search-circle","md-search-circle-outline","md-search-circle-sharp",
                        if (route.name == "Home") {
                            iconName = focused ? 'home' : 'home-outline';
                        }
                        else if (route.name === 'bussines') {
                            iconName = focused
                                ? 'menu'
                                : 'menu-outline';
                        }
                        else if (route.name === 'Person') {
                            iconName = focused
                                ? 'people'
                                : 'people-outline';
                        }
                        else if (route.name === 'Notification') {
                            iconName = focused
                                ? 'person'
                                : 'person-outline';
                        }
                        else if (route.name == "Menu") {
                            iconName = focused ? 'menu' : 'menu-outline';
                        }
                        return <Ionicons name={iconName} size={20} color={color} />;
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarActiveBackgroundColor: 'white',
                    tabBarInactiveBackgroundColor: 'silver',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: { height: 90 },
                    tabBarLabelStyle: {
                        fontSize: 10,
                    }
                })}
            >
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="bussines" component={bussines} options={{ headerShown: false }} />
                <Tab.Screen name="Person" component={Person} options={{ headerShown: false }} />
                <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
                <Tab.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
            </Tab.Navigator>


        )
    }
}


export default ResponsiveUi



function Home() {
    return (
        <View>
            <Text style={styles.text}>Home</Text>
        </View>
    )
}
function bussines() {
    return (
        <View>
            <Text style={styles.text}>bussines</Text>
        </View>
    )
}
function Person() {
    return (
        <View>
            <Text style={styles.text}>Person</Text>
        </View>
    )
}
function Notification() {
    return (
        <View>
            <Text style={styles.text}>Notification</Text>
        </View>
    )
}
function Menu() {
    return (
        <View>
            <Text style={styles.text}>Menu</Text>
        </View>
    )
}




const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        justifyContent: 'center',
        color: 'red',
    }


})