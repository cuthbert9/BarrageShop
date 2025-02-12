import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Appearance } from 'react-native'
import { Colors } from '@/constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Platform } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FlatList } from 'react-native'
import shouseList from '@/constants/NikesList'
import NikeImages from '@/constants/NikesImages'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const products = () => {

    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

    const colorTheme = Appearance.getColorScheme();
    const theme = colorTheme === "dark" ? Colors.dark : Colors.light;

    const styles = createStylesheet(theme, colorTheme);

    const FooterComp = <Text style={styles.textFooter}>LIST END</Text>
    const emptyComp = <Text style={styles.textFooter}>No items</Text>


    return (
        <Container style={styles.container} >
            <Text style={styles.text} >Choose Your Barrage</Text>

            <FlatList
                data={shouseList.nikeShoes}
                keyExtractor={(item) => item.id.toString()}
                ListFooterComponent={FooterComp}
                ListEmptyComponent={emptyComp}
                renderItem={({ item }) => (
                    <View style={styles.List}>

                        <Image
                            source={NikeImages[item.id - 1]}
                            style={styles.image}
                        />

                        <View style={styles.ListHeading}>
                            <Text style={styles.shouTitle}>{item.name}</Text>

                            <View style={styles.subHeadin} >
                                <View  style={styles.priceCont}>
                                <Ionicons name="pricetag" size={24} color="white" />

                                <Text style={styles.shouTitle}>{item.price}$</Text>
                                </View>
                                <View style={styles.priceCont}>
                                <FontAwesome name="calendar" size={24} color="white" />                                    
                                <Text style={styles.shouTitle}>{item.releaseYear}</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                )}
            />

        </Container>

    )
}

export default products

const createStylesheet = (theme, colorTheme) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,


        },
        text: {
            color: theme.text,
            fontSize: 30,
            textAlign: "center",
            margin: 5
        }, textFooter: {
            color: theme.text,
            fontSize: 15,
            textAlign: "center",
            margin: 5,
            fontFamily: "cursive"
        },
        shouTitle: {
            color: theme.text,
            fontSize: 20,
            textAlign: "center"
        },
        image: {
            width: "100%",
            height: 300,
            margin: "auto",
            borderRadius: 20
        },
        List: {
            flexDirection: "column",
            borderWidth: 3,
            borderColor: "white",
            borderRadius: 20,
            margin: 10
        },
        ListHeading: {
            flexDirection: "column"

        },
        subHeadin: {
            flexDirection: "row",
            margin: "auto",
            gap: 30
        },
        priceCont:{
            flexDirection:"row",
            gap:10,
            marginVertical:10

        }
    })
}