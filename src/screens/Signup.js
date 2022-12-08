import { View, Text,TextInput, Button,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/form';


const Signup = ({navigation}) => {

const Pressed=(() =>{
    navigation.navigate('Login')
   
})

  return (
    <View style={styles.signup}>
      <SafeAreaView>
        <View style={styles.details}>
        <Text style={styles.header}>Signup</Text>
      <Text style={styles.name}>Name</Text>
      <TextInput 
      style={styles.textinput}
      />
      <Text style={styles.email}>Email</Text>
      <TextInput 
      style={styles.textinput}
      />
      <Text style={styles.gender}>Gender</Text>
      <TextInput 
      style={styles.textinput}
      />
      <Text style={styles.password}  >Password</Text>
      <TextInput 
      style={styles.textinput}
      secureTextEntry={true}
      />
      </View>
      <Button onPress={(Pressed)} title='Sign in' color="#000000" />
      <View style={styles.bottom}>
      <Text style={styles.already}>Already Signup?</Text>
      <TouchableOpacity onPress={Pressed}>
        <Text>Sign in</Text>
      </TouchableOpacity>
      </View>
      
   
      </SafeAreaView>
    </View>
  )
}



  

export default Signup