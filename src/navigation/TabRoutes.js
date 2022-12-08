import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Splash';
import Signup from '../screens/Signup';
import Login from '../screens/Login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes()
{
    return(
        <NavigationContainer>
      <Tab.Navigator screenOptions={{presentation:'transparentModal' ,headerShown:false}} initialRouteName='Home'>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Signup" component={Signup} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>

    )
}


export default TabRoutes;