import { View, Text, FlatList, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import MapScreen from '../screens/MapScreen'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'



const NavOption = () => {
    const navigation = useNavigation();
    const origin=useSelector(selectOrigin);
  return (
    <View style={tw`flex-row bg-gray-200 p-5 w-1/2`}>
     
        <TouchableOpacity
         onPress={() => navigation.navigate(MapScreen)}
        disabled={!origin}
         >
            <View style={tw`${!origin && "opacity-20"}`}>
            <Image  style={{width:120,height:120,resizeMode:'center'}}
              source={{uri:"https://links.papareact.com/3pn"}}
            />
            <Text style={tw`mt-2 text-lg font-semibold `}>Park it</Text>
            <Icon 
        style={tw `p-2 bg-black rounded-full w-10 mt-4`}
         name="arrowright"  
         color="white" 
          type="antdesign" />
          </View>
        </TouchableOpacity>
   

    </View>
  
  )
}



export default NavOption