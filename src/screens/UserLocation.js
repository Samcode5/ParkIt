import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import NavOption from '../components/NavOption';
import { useDispatch } from 'react-redux';
import { setDestination,setOrigin } from '../slices/navSlice';


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
        key: 'AIzaSyDMsYREH_pD-6uLwpI61-o_ayzPWBEgtf4',
        language: 'en',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
    />
    <NavOption></NavOption>
    </View>
  )
}

export default UserLocation