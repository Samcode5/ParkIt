import { View, Text,StyleSheet,TextInput, Button, Alert } from 'react-native'
import React from 'react'
import styles from '../styles/form'
import { useNavigation } from '@react-navigation/native'


const Login = () => {
  const navigation =useNavigation();

  const Pressed=(()=>{
 
      navigation.navigate('MapScreen')
  })
  

  return (
    <View style={styles.signup}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.details}>
      <Text style={styles.gender}>Username/Email</Text>
      <TextInput 
      style={styles.textinput}
      />
      <Text style={styles.password}  >Password</Text>
      <TextInput 
      style={styles.textinput}
      secureTextEntry={true}
      />
      </View>
      <Button title='Login' onPress={Pressed} color='#000000'></Button>
    </View>
  )
}




export default Login