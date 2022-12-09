import { Text, View, TextInput } from 'react-native'
import tw from "tailwind-react-native-classnames";
import React from 'react'

const InputText = (props) => {
  return (
    <TextInput style={tw`p-2 pl-3 mt-1 mb-5 bg-gray-50 border-2 border-gray-100 rounded-xl `} secureTextEntry={props.secure} placeholder={props.placeholder}/>
  )
}

export default InputText
