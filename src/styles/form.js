import React from 'react'
import { View, Text,StyleSheet, Button,SafeAreaView } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'white',
      justifyContent:"center"
      
   
    },

    signup:{
        flex:1,
        backgroundColor: 'white',
        paddingHorizontal:30,
        justifyContent:'center'

    },

    header:{
        fontSize:18,
        color:'#7d7d7d',
        lineHeight:25,
        marginBottom:5,
        textAlign:'center'
        
       
       
    },
    textinput:{
        borderWidth:1,
        borderRadius:20,
        borderColor:"#7d7d7d",
        paddingVertical:7,
        paddingHorizontal:15,
        fontSize:15,
        marginBottom:10
    },

    details:{
        marginBottom:30
    },

    already:{
        color:"#7F8487"

    },

    bottom:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:30,
        paddingTop:50
        
    

        
    },


    bottomTab:{
     flex:1,
     
    }


  });


  export default styles;