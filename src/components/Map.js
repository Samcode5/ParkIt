import { View, Text } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'

const Map = () => {
  return (
 <MapView
 style={tw`flex-1`}
 initialRegion={{
    latitude: 18.4690,
    longitude: 73.8651,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  }}
 >
    <Marker
    coordinate={
        {
        latitude:18.4690,
        longitude:73.8651
        }
    }

    title="Flat"
    ></Marker>
 </MapView>
  )
}

export default Map