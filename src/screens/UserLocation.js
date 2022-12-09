import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import NavOption from '../components/NavOption';
import { useDispatch } from 'react-redux';
import { setDestination,setOrigin } from '../slices/navSlice';
import InputText from '../components/InputText';
import { TextInput } from 'react-native-gesture-handler';
import { BorderOutlined } from '@ant-design/icons';


const data=[
    {
        id:"123",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen"
    }
]

const UserLocation = () => {
    const navigation =useNavigation();
    const dispatch= useDispatch();


  return (
    <View style={tw`flex-1 text-center bg-white p-10`}>
      <GooglePlacesAutocomplete
      placeholder='Where from'
      styles={{
        container:{
          flex:0,
          },
        textInput:{
          fontSize:18,
          borderColor:"gray200",
          border:"2px solid"
          
        }
      }}
      fetchDetails={true}
      enablePoweredByContainer={false}
      onPress={(data, details = null) => {
        console.log(details.geometry.location)
        console.log(data.description)
        dispatch(
            setOrigin({
            location:details.geometry.location,
            description:data.description
        })
       
        );
         dispatch(setDestination(null));
      }}
      query={{
        key: 'AIzaSyCKhQLwdC36c_xsTnvhwL1FvH4hQOlEoss',
        language: 'en',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
    />
    <TextInput  style={tw`p-2 pl-3 mt-1 mb-5 bg-gray-50 border-2 border-gray-100 rounded-xl`}placeholder='Arrival time'/>
    <TextInput  style={tw`p-2 pl-3 mt-1 mb-5 bg-gray-50 border-2 border-gray-100 rounded-xl`}placeholder='leave time'/>
    <NavOption></NavOption>
    </View>
  )
}

export default UserLocation