import { View, Text,StyleSheet, Button ,Image} from 'react-native'
import React from 'react'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
 Roboto_400Regular,
 Roboto_400Regular_Italic,
 Roboto_900Black
} from '@expo-google-fonts/roboto';




const Splash = ({navigation}) => {

  let [fontsload,error] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_900Black

  })
   if(!fontsload)
   {
    return <AppLoading/>
   }

  return (
    
    <View style={styles.splash}>
      <Image source={require('../images/logo.png')}></Image>
     <Text style={styles.name}>ParkIt</Text> 
     <Text style={styles.subtitle}>Parking made easy</Text>
      <Button onPress={() => navigation.navigate('Signup')} title='Signup' color="#000000"/>
     
    </View>
  )
}


const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#FFDE00',
    alignItems: 'center',
    justifyContent: 'center',
  },


  
 
  name:{
     fontSize:22,
     fontWeight:"bold",
     paddingTop:10,
     fontFamily:"Roboto_900Black",
     textAlign:'center'
     
},
subtitle:{
  fontFamily:"Roboto_400Regular_Italic",
  fontSize:15,
  marginBottom:100

}
});



export default Splash