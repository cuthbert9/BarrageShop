import { View, Text,StyleSheet,ImageBackground } from 'react-native'
import React from 'react'

const app = () => {
  return (
    <View style={style.container}>
      <ImageBackground>
      <Text style={style.text}>Coffee Shop</Text> 
      </ImageBackground>
      
    </View>
  )
}

export default app

const style=StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column',

    },
    text:{
      color:"white",
      fontSize:50,
      textAlign:"center",
      
    }

})