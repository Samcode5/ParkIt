import { View, Text } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../slices/navSlice'
import { useSelector } from 'react-redux'
import MapViewDirections from 'react-native-maps-directions'
import { selectDestination } from '../slices/navSlice'
const GOOGLE_MAPS_APIKEY = 'AIzaSyCKhQLwdC36c_xsTnvhwL1FvH4hQOlEoss';
 
const Map = () => {

const origin= useSelector(selectOrigin)
const destination=useSelector(selectDestination);

const coordinates=[
  {
    latitude:origin.location.lat,
    longitude:origin.location.lng

  },
  {
    latitude:12.9692,
    longitude:79.1559
  }
]

return (
 <MapView
 style={tw`flex-1`}
 initialRegion={{
    latitude: origin.location.lat,
    longitude:origin.location.lng,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  }}
 >

  {origin && destination && (
    <MapViewDirections
    origin={origin.description}
    destination={destination.description}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    strokeColor="black"

    />
  )}
  { destination?.location && (
    <Marker
    coordinate={
        {
        latitude:destination.location.lat,
        longitude:destination.location.lng,
        }
    }

    title="Destination"
    description={destination.description}
    >
    </Marker>
    )}



  { origin?.location && (
    <Marker
    coordinate={
        {
        latitude:origin.location.lat,
        longitude:origin.location.lng,
        }
    }

    title="Origin"
    description={origin.description}
    pinColor="green">
    </Marker>
    )}
 </MapView>
  )
}

export default Map