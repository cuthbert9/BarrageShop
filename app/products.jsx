import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { Appearance } from 'react-native'
import { Colors } from '@/constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Platform } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FlatList } from 'react-native'
import shouseList from '@/constants/NikesList'
import NikeImages from '@/constants/NikesImages'
import barra from '@/assets/images/barage1.jpg'

const products = () => {

    const Container=Platform.OS==="web"?ScrollView:SafeAreaView;

    const colorTheme=Appearance.getColorScheme();
    const theme=colorTheme==="dark"?Colors.dark:Colors.light;  

   const styles=createStylesheet(theme,colorTheme);


   console.log(shouseList);





  return (
    <Container style={styles.container} >         
      <Text style={styles.text} >Choose Your Barrage</Text>
        <View>
            <View>
                <Text style={styles.text}>{shouseList.nikeShoes[1].name}</Text>
                <Text></Text>
            </View>
            <Image
            source={NikeImages[2]}
            
            />


        </View>


    

    </Container>
    
  )
}

export default products

const createStylesheet=(theme,colorTheme)=>{

    return StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:theme.background,
           
        },
        text:{
            color:theme.text,
            fontSize:30,
            textAlign:"center"
            
        }
       
         

    })
}