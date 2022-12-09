import { View, Text ,Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'


const Profile = () => {
  return (
    <View style={tw`flex-1 bg-white pt-3 `}>
      <Text style={tw`mt-8 text-center text-2xl`}>Profile</Text>
      <View style={tw`flex-row mt-5 justify-between`}>
        <View style={tw`w-1/2 p-2`}> 
         <Image 
          source={require("../images/sameer.png")}
          style={{width:100, heigth:100}}
         />
        </View>

        <View style={tw`w-1/2 mt-5 p-2`}>
          <Text style={tw`text-xl`}>Hello Sameer</Text>
        </View>
      </View>
      <View style={tw`h-0.5 w-100 bg-gray-400`}/>
      <View style={tw`flex-1 mt-10 p-5`}>
        <View style={tw`flex-row justify-center p-5`}>
        <Text style={tw`text-lg text-black `}>Name : </Text>
        <Text style={tw`text-lg text-gray-500`}>Sameer</Text>
        </View>
        <View style={tw`flex-row justify-center p-5`}>
        <Text style={tw`text-lg text-black`}>Vehicle : </Text>
        <Text style={tw`text-lg text-gray-500`}>BMW</Text>
        </View>
        <View style={tw`flex-row justify-center p-5`}>
        <Text style={tw`text-lg text-black`}>Contact : </Text>
        <Text style={tw`text-lg text-gray-500`}>783403451</Text>
        </View>

      </View>
    </View>
  )
}

export default Profile