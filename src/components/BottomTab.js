import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Icon from 'react-native-vector-icons/Feather';



const BottomTab = () => {
  return (
    <View style={tw `flex-row mt-2 justify-between `}>
       <View style={tw`p-3`}>
      <Icon name="home" size={25}/>
      <Text>Home</Text>
      </View>
      <View style={tw`p-3`}>
      <Icon name="book"  size={25}/>
      <Text>Booking</Text>
      </View>
      <View style={tw`p-3`}>
      <Icon name="settings"  size={25} />
      <Text>Settings</Text>
      </View>
    </View>
  )
}

export default BottomTab