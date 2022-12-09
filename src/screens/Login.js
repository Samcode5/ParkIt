// import { View, Text,StyleSheet,TextInput, Button, Alert } from 'react-native'
// import React from 'react'
// import styles from '../styles/form'
// import { useNavigation } from '@react-navigation/native'


// const Login = () => {
//   const navigation =useNavigation();

//   const Pressed=(()=>{
  
//       navigation.navigate('UserLocation')
//   })
  

//   return (
//     <View style={styles.signup}>
//       <Text style={styles.header}>Login</Text>
//       <View style={styles.details}>
//       <Text style={styles.gender}>Username/Email</Text>
//       <TextInput 
//       style={styles.textinput}
//       />
//       <Text style={styles.password}  >Password</Text>
//       <TextInput 
//       style={styles.textinput}
//       secureTextEntry={true}
//       />
//       </View>
//       <Button title='Login' onPress={Pressed} color='#000000'></Button>
//     </View>
//   )
// }




// export default Login

import { SafeAreaView, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Button from "../components/Button";
import InputText from "../components/InputText";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation=useNavigation()
  const Pressed=(()=>{
  
          navigation.navigate('UserLocation')
      })
  return (
    <View style={tw`mt-6 flex-1 bg-white p-10 h-full`}>
      <View style={tw`items-center mt-5 mb-20`}>
        <Text style={tw`text-3xl font-semibold`}>Login</Text>
      </View>
      <View>
        <Text>USERNAME</Text>
        <InputText secure={false}/>
        <Text>PASSWORD</Text>
        <InputText secure={true}/>
        <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" onPress={(Pressed)}>
        <View style={tw`w-11/12 pt-4 pb-4 mt-5 mb-5 ml-4 bg-black rounded-lg`}>
          <Text style={tw`text-center text-base text-white font-bold`}>
            Login
          </Text>
        </View>
      </TouchableOpacity>
      </View>
      <View style={tw`self-center flex-row`}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={tw`underline`}>Sign up here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
