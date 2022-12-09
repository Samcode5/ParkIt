import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import MapScreen from '../screens/MapScreen';
import UserLocation from '../screens/UserLocation';
import Profile from '../screens/Profile';
import BookingScreen from '../screens/BookingScreen';

const Stack = createStackNavigator();

function Routes()
{
    return(
        <NavigationContainer>
      <Stack.Navigator screenOptions={{presentation:'transparentModal' ,headerShown:false}} initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="UserLocation" component={UserLocation}/>
        <Stack.Screen name="MapScreen" component={MapScreen}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="BookingScreen" component={BookingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

    )
}


export default Routes;