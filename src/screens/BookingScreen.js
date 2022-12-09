import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import tw from "tailwind-react-native-classnames";
import BottomButton from "../components/BottomButton";
import { useNavigation } from "@react-navigation/native";
// import user from "../../data/UserData";
// import parkingspot from "../../data/ParkingSpotsData";

const BookingScreen = () => {
    const navigation= useNavigation()
  return (
    <View style={tw` flex-1 bg-white  h-full`}>
        
      <View style={tw`w-full flex-row `}>
        {/* <View style={tw`p-4 pr-0`}>
          <TouchableOpacity>
            <Icon name="arrow-left" type="material-community" size={40} />
          </TouchableOpacity>
        </View> */}
        <View style={tw`p-5 mt-5`}>
          <Text style={tw`text-2xl font-bold`}>Booking Details</Text>
        </View>
      </View>
      <View style={tw`w-full flex-row`}>
        <View style={tw`w-1/2 p-3 justify-center border-t border-b border-gray-100`}>
          <Text style={tw`text-center text-gray-400 font-semibold text-base`}>
            Arriving at
          </Text>
          <Text style={tw`text-center font-bold text-lg`}>11:00 am</Text>
        </View>
        <View style={tw`w-1/2 p-3 justify-center  border-t border-b border-gray-100`}>
          <Text style={tw`text-center text-gray-400 font-semibold text-base`}>
            Leaving at
          </Text>
          <Text style={tw`text-center font-bold text-lg`}>12:00 am</Text>
        </View>
      </View>
      <View style={tw`h-4 bg-gray-100`} />
      <View style={tw`w-full mt-6 pl-7 pr-7`}>
        <Text style={tw`text-xl mb-4 font-semibold`}>Vehicle Details</Text>
        <View style={tw`flex-row pl-1 pr-4 justify-between`}>
          <Text style={tw`text-gray-400`}>Name</Text>
          <Text style={tw`mb-4`}>BMW</Text>
        </View>
        <View style={tw`flex-row pl-1 pr-4 justify-between`}>
          <Text style={tw`text-gray-400`}>Type</Text>
          <Text style={tw`mb-4`}>Sedan</Text>
        </View>
        <View style={tw`flex-row pl-1 pr-4 justify-between`}>
          <Text style={tw`text-gray-400`}>Registration</Text>
          <Text style={tw`mb-4`}>GR120108</Text>
        </View>
      </View>
      <View style={tw`bg-yellow-300 mt-4 p-4 pr-8`}>
        <View style={tw`flex-row justify-around`}>
        <Text style={tw`text-xl font-bold text-center`}>AMOUNT TO BE PAID</Text>
        <Text style={tw`text-xl font-bold text-center`}>₹100</Text>
        </View>
      </View>
      <Text style={tw`pl-7 pr-7 pt-4`}>The closest empty and unreserved parking slot will be allocated to you after your payment.</Text>

      <BottomButton title="Pay and Reserve" />
    </View>
  );
};


export default BookingScreen;
