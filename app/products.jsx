import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Appearance } from 'react-native'
import { Colors } from '@/constants/Colors'

const products = () => {

    const colorTheme=Appearance.getColorScheme();
    const theme=colorTheme==="dark"?Colors.dark:Colors.light;  

   const styles=createStylesheet(theme);





  return (
    <View  style={styles.container}>
      <Text style={styles.text} >Choose Your Barrage</Text>
    </View>
  )
}

export default products

const createStylesheet=(theme)=>{

    return StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:theme.background
        },
        text:{
            color:theme.text,
            fontSize:30,
            textAlign:"center"
            
        }
       
         

    })
}