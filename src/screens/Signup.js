// import { View, Text,TextInput, Button,SafeAreaView,TouchableOpacity } from 'react-native'
// import React from 'react'
// import styles from '../styles/form';


// const Signup = ({navigation}) => {

// const Pressed=(() =>{
//     navigation.navigate('Login')
   
// })

//   return (
//     <View style={styles.signup}>
//       <SafeAreaView>
//         <View style={styles.details}>
//         <Text style={styles.header}>Signup</Text>
//       <Text style={styles.name}>Name</Text>
//       <TextInput 
//       style={styles.textinput}
//       />
//       <Text style={styles.email}>Email</Text>
//       <TextInput 
//       style={styles.textinput}
//       />
//       <Text style={styles.gender}>Gender</Text>
//       <TextInput 
//       style={styles.textinput}
//       />
//       <Text style={styles.password}  >Password</Text>
//       <TextInput 
//       style={styles.textinput}
//       secureTextEntry={true}
//       />
//       </View>
//       <Button onPress={(Pressed)} title='Sign in' color="#000000" />
//       <View style={styles.bottom}>
//       <Text style={styles.already}>Already Signup?</Text>
//       <TouchableOpacity onPress={Pressed}>
//         <Text>Sign in</Text>
//       </TouchableOpacity>
//       </View>
      
   
//       </SafeAreaView>
//     </View>
//   )
// }

// export default Signup
import { SafeAreaView, View, Text, TouchableHighlight, TouchableOpacity} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Button from "../components/Button";
import InputText from "../components/InputText";
import { useNavigation } from "@react-navigation/native";


const RegisterScreen = () => {
  const navigation=useNavigation()
  const Pressed=(()=>{
  
    navigation.navigate('Login')
})

  return (
    <View style={tw`p-10 h-full flex-1 bg-white`}>
      <View style={tw`items-center mt-5 mb-10`}>
        <Text style={tw`text-3xl font-semibold`}>Register</Text>
      </View>
      <View>
        <Text>NAME</Text>
        <InputText secure={false} />
        <Text>VEHICLE</Text>
        <InputText secure={false} />
        <Text>CONTACT</Text>
        <InputText secure={false} />
        <Text>USERNAME</Text>
        <InputText secure={false} />
        <Text>PASSWORD</Text>
        <InputText secure={true} />
        <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" onPress={(Pressed)}>
        <View style={tw`w-11/12 pt-4 pb-4 mt-5 mb-5 ml-4 bg-black rounded-lg`}>
          <Text style={tw`text-center text-base text-white font-bold`}>
             Sign in
          </Text>
        </View>
      </TouchableOpacity>
      </View>
      <View style={tw`self-center flex-row`}>
        <Text>Have an account already? </Text>
        <TouchableOpacity>                          
          <Text style={tw`underline`} onPress={(Pressed)}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
