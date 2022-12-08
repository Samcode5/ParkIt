import { View, Text } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import tw from 'tailwind-react-native-classnames'
import BottomTab from '../components/BottomTab'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Feather';
import {GOOGLE_MAPS_APIKEY} from "@env";

const MapScreen = () => {
  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-4/5`}>
      <Map>
      </Map>
      </View>
      <GooglePlacesAutocomplete
      placeholder='Search'
      styles={{
        container:{
          flex:0,
          },
        textInput:{
          fontSize:18,
          
        }
      }}
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyDMsYREH_pD-6uLwpI61-o_ayzPWBEgtf4',
        language: 'en',
      }}
    />
        
        
      <View style={tw`bg-gray-100`} >
        <BottomTab></BottomTab>
      </View>
    </View>
  )
}

export default MapScreen


