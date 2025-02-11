import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const contact = () => {
  return (
    <View style={{backgroundColor:"black",width:"auto",height:"100%"}}>
      <Text style={styles.text}>Contact Nike Store</Text>
    </View>
  )
}

export default contact

const styles=StyleSheet.create({
    text:{
      color:"white",
      fontSize:30,
      fontWeight:"bold",
      margin:30
    }

})