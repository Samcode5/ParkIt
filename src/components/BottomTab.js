import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
;



const BottomTab = () => {
  
  const navigation= useNavigation();
  return (
    <View style={tw `flex-row mt-2 justify-between `}>
     <TouchableOpacity>
       <View style={tw`p-3`}>
      <Icon name="home" size={25}/>
      <Text>Home</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("BookingScreen")}>
      <View style={tw`p-3`}>
      <Icon name="book"  size={25}/>
      <Text>Booking</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("Profile")}>
      <View style={tw`p-3`}>
      <Icon name="settings"  size={25} />
      <Text>Profile</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default BottomTab