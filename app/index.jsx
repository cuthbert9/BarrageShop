import { View, Text,StyleSheet,ImageBackground,Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import Barage from "@/assets/images/barrage4.webp";

const app = () => {
  return (
    <View style={style.container}>
        <ImageBackground
        source={Barage}
        resizeMode='cover'
        style={{height:"100%",width:"auto",justifyContent:"center"}}
        >
        <Text style={style.text}>Barrage Shop!! Welcome</Text>  

        <Link href='/products' asChild >
              <Pressable style={style.btn}>
                    <Text style={style.Btntext}>
                       Buy Barrage
                    </Text>
              </Pressable>     
          </Link>

      
        <Link href='/contact' asChild >
              <Pressable style={style.btn}>
                    <Text style={style.Btntext}>
                        Contacts
                    </Text>
              </Pressable>     
          </Link>
         
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
      fontSize:30,
      textAlign:"center",
      fontWeight:"bold",
      margin:20  

      
    },
    Btntext:{
      color:"white",
      fontSize:30,
      textAlign:"center",
      fontWeight:"bold",
      
     
      
    },
    btn:{
      backgroundColor:"rgba(0,0,0,0.65)",
      padding:5,
      borderRadius:30,
      marginHorizontal:50,
      margin:10
      
    
      

    }

})