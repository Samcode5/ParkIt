import { View, Text } from 'react-native'
import React, { useState,useEffect } from 'react'
import Map from '../components/Map'
import tw from 'tailwind-react-native-classnames'
import BottomTab from '../components/BottomTab'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Feather';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import axios from 'axios'


const MapScreen = () => {
  const dispatch=useDispatch();
  // const [destinationLoc,setDestinationLoc] =useState("");

  // useEffect(() =>{
  //   async function getDestinationLoc()
  //   {
  //     try{
  //       let desLoc= await axios.get('http://127.0.0.1:8000/api/request-slot/')
  //       console.log(desLoc.data)
  //       setDestinationLoc(desLoc)
        
  //     }

  //     catch(error){
  //         console.log(error)
  //     }
  //   }
  //   getDestinationLoc()
  // })

  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-4/5`}>
      <Map>
      </Map>
      </View>
      <GooglePlacesAutocomplete
      placeholder='Where to'
      styles={inputBoxStyle}
      fetchDetails={true}
      onPress={(data, details = null) => {

        console.log(details.geometry.location)
        console.log(data.description)
        dispatch(
          setDestination({
          location:details.geometry.location,
          description:data.description
        }));
       
      }}
      query={{
        key: 'AIzaSyCKhQLwdC36c_xsTnvhwL1FvH4hQOlEoss',
        language: 'en',
      }}
    />
        <View style={tw`bg-white`} >
        <BottomTab></BottomTab>
      </View>
    </View>
  )
}

const inputBoxStyle= StyleSheet.create({
  container:{
    backgroundColor:"white",
    paddingTop:10,
    flex:0
  },

  textInput:{
    backgroundColor:"#DDDDDF",
    borderRadius:10,
    fontSize:18
  },

  textInputContainer:{
    paddingHorizontal:10,
    paddingBottom:0
  }
})

export default MapScreen


