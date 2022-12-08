import { View, Text } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../slices/navSlice'
import { useSelector } from 'react-redux'
import MapViewDirections from 'react-native-maps-directions'
import { selectDestination } from '../slices/navSlice'

const Map = () => {

const origin= useSelector(selectOrigin)
const destination=useSelector(selectDestination);

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
    apikey={AIzaSyD3vD6amrGD_vhjixTiRqXfAsyZ34kAsr0}

    />
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