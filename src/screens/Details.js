import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/Detail.style";

const Detail = ({ navigation, route }) => {
    //in the iem we get the details about the product which is passed from home
    const item = route.params
    console.log(item)

    return (
        <SafeAreaView style={styles.safearea} >
            {/* header */}
            <View style={styles.header}>
                {/* goBack is used to going back to the previous page */}
                <TouchableOpacity style={styles.back}  onPress={navigation.goBack}>

                    <Image style={styles.icon} source={require('../assets/backbutton.png')} />
                    <Text style={styles.headertext}>Detail</Text>

                </TouchableOpacity >

            </View>


            <Text style={styles.text}>All you need is love what you eat!!</Text>
            {/* image of the food */}

            <ScrollView >
                <View style={styles.container}>
                    <Image style={styles.image} source={item.image} />

                </View>
                <View style={styles.cardtextview}>
                    <Text style={styles.cardtext}>{item.name}</Text>
                    <Text style={styles.cardtext}>${item.price}</Text>
                </View>

                {/* discription of food */}
                <View style={styles.discriptions}>
                    <Text style={styles.textdiscription}>
                        {item.discription}
                    </Text>

                </View>

            </ScrollView>



        </SafeAreaView>
    )
}

// const styles=StyleSheet.create({
//     container:{
//         justifyContent:'center',
//         alignItems:'center',
//         height:280,

//     },
//     text:{
//         flexDirection:"row",
//         textAlign:'center',
//         color:'gray',
//         fontWeight:'bold',
//         fontSize:25,
//         justifyContent:'space-around',
//         paddingTop:20
//     },
//     image:{
//         width: "100%",
//         resizeMode: 'contain',
//         top: 40,


//     },
//     discriptions:{
//         textAlign:'center',
//         justifyContent:'space-around',
//         flex:0.5,
//         padding:20,


//     },
//     textdiscription:{

//         color:'red',
//         fontWeight:'bold',
//         fontSize:20,
//         borderRadius:20,
//         borderColor:'red',
//         elevation:20,
//         backgroundColor:'white',
//         position:'relative',
//         top:50,
//         height:200,


//     }
// })

export default Detail