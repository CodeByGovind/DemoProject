import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './signup';
import Login from './login';
import Dashboard from './dashboard';

const Stack = createNativeStackNavigator();
function Rootstacknavigater() {
    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName='Signup'>
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Rootstacknavigater;

