import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import barrage from '@/assets/images/barrage7.jpeg'
import AntDesign from '@expo/vector-icons/AntDesign';

const contact = () => {
  return (
    <View style={{backgroundColor:"black",width:"auto",height:"100%"}}>
      <Image 
        source={barrage}
        style={styles.image}
      />


      <View style={styles.ContactHead}>
      <Text style={styles.text}>Contact Us</Text>
      <AntDesign name="contacts" size={24} color="white" />
      </View>

      <View  style={styles.contactWrap}>
      <Text  style={styles.textcontact}> Email📩:CathbertJohnson9@gmail.com</Text>
      <Text  style={styles.textcontact}> Phone☎️:+255620218477</Text>
      <Text  style={styles.textcontact}> Location📍:Posta</Text>

      </View>
     
    </View>
  )
}

export default contact

const styles=StyleSheet.create({
  text:{
    color:"white",
    fontSize:25,
    fontWeight:"bold",
    marginVertical:20,
    textAlign:"center"
  },  textcontact:{
    color:"white",
    fontSize:15,
   
   
  },
    image:{
      width:"100%",
      height:250
    },
    contactWrap:{
        flexDirection:"column",
        marginHorizontal:"auto",
        gap:10
    },
    ContactHead:{
      flexDirection:"row",
      justifyContent:"center",
       alignItems:"center",
       gap:5
    }

})