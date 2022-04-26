import React, {useEffect} from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/Frontscreen.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashScreen from "react-native-splash-screen"

export const FrontScreen = ({ navigation }) => {

    //this function is for navigating to the home screen if we are logged in
    async function getdata(){
        const data=  await AsyncStorage.getItem('isLoggedIn')
  
        if(data ==='1'){
          navigation.navigate('Home')
       }
    // if we are logged in splash screen will hide only after navigating to home screen
       SplashScreen.hide();
  
      }
      
    useEffect(()=>{
    
        getdata();

     },[navigation]) //while giving this way this effect will only triggered when navigation occurred

    return (
        <SafeAreaView style={styles.safearea} >

            <View style={styles.height}>
                <Image style={styles.image} source={require('../assets/food.png')} />
            </View>

            <View style={styles.textcontainer}>

                <View>
                    <Text style={styles.text}>Welcome to food corner</Text>
                </View>

                <View>
                    <Text style={styles.text2}>Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.</Text>
                </View>
            </View>

          {/* button */}
            <View>

                <TouchableOpacity style={styles.loginBtn} onPress={() => { navigation.navigate('Login') }}>
                    <Text style={styles.loginText}>Get Started</Text>
                </TouchableOpacity>

            
            </View>


        </SafeAreaView>
    )
}

// const styles = StyleSheet.create({

//     text: {
//         fontSize: 32,
//         fontWeight: "bold",
//         textAlign: 'center',
//         color: "black"
//     },
//     image:{
//         width: "100%",
//         resizeMode: 'contain',
//         top: -150
//     },

//     loginBtn: {
//         width: "80%",
//         borderRadius: 25,
//         height: 50,
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 40,
//         backgroundColor: "#FF1493",
//         position: "relative",
//         left: 30
//     },
//     textcontainer: {
//         paddingHorizontal:20,
//         justifyContent:"center",
        
//     },
//     loginText:{
//         fontWeight:"bold"
//     }
// })
