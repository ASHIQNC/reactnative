// import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{useEffect,useCallback} from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, FlatList,Alert,BackHandler } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { foods } from '../component/Food'
import { styles } from "../styles/Home.style";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const Home = ({ navigation }) => {

    // useEffect(()=>{
    //     navigation.addListener('beforeRemove',(event)=>{
    //         //to prevent the default behaivior
    //         event.preventDefault();

    //         Alert.alert('Go back','Are you sure you want to go back',[
    //             {
    //                 text:'No',
    //                 style:'cancel',
    //                 onPress:()=>{}
    //             },
    //             {
    //                 text:'Yes',
    //                 style:'destructive',
    //                 onPress:()=>{ navigation.dispatch(event.data.action)}

    //             }
    //         ])

    //     })

    // },[])


    const  backs = ()=> {

        Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
        return true

    }

    //it will called when ever the stack has focus or perticular page has been changed
    useFocusEffect(
        useCallback(() => {
            console.log("remove listerner")
            BackHandler.addEventListener('hardwareBackPress',backs)
    
            return ()=>{
                BackHandler.removeEventListener("hardwareBackPress",backs)
            }
          }, [])

        
   
    )



//alert
    const alertlog=()=>{
        Alert.alert(
            "Logout",
            "Do you wish to logout",
            [
                {
                    text:"OK",
                    onPress:()=>{
                        AsyncStorage.removeItem('isLoggedIn',()=>{console.log("logout successful")})
                       
                        
                        navigation.reset({
                            index:0,
                            routes:[{
                                name:'Login'
                            }]
                        })
                        navigation.navigate('Login')
                    }
                },
                {
                    text:"cancel",
                    style:"cancel"
                }
            ]
        )
    }





    const Card = ({ food }) => {

        return (
            <TouchableOpacity onPress={() => 
                 { BackHandler.removeEventListener("hardwareBackPress", backs),
             navigation.navigate('Detail',food) }}>
                {/* image of food */}
                <View style={styles.cardview}>
                    <Image source={food.image} style={styles.cardimage} />

                </View>
                {/* price and name of food */}
                <View style={{alignItems:'center'}}>
                        <Text style={styles.cardtext}>{food.name}</Text>
                        <Text style={styles.cardtext}>${food.price}</Text>
                </View>

            </TouchableOpacity>
        )

    }

    return (
        <SafeAreaView style={styles.safearea} >
            <View style={styles.header}>
                <View>
                    <View style={styles.safeareview}>
                        <Text style={styles.text2}>Hello,</Text>
                        <Text style={styles.text}>Ashiq</Text>


                    </View>
                </View>

                <View>
                    <Text style={styles.text3}>Choose your fav food</Text>
                </View>



            </View>

            {/* logout */}
            <View style={{ flexDirection: "row" }}>
                <View style={styles.logout}>

                    <TouchableOpacity style={styles.loginBtn} onPress={() => {alertlog()}}>
                        <Image source={require('../assets/logout.png')}></Image>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>

                </View>


            </View>
            
            {/* used to display the content in scrollable way. */}
            {/* if we dont want to see the scrollable indicator,put "showsVerticalScrollIndicator=false" */}

            <FlatList showsVerticalScrollIndicator={false}

                data={foods}
                renderItem={({ item }) => { return (<Card food={item} />) }}
                keyExtractor={item => item.id}

            />

        </SafeAreaView>
    )
}

// const styles = StyleSheet.create({

//     header: {
//         marginTop: 50,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingHorizontal: 20
//     },
//     logout: {

//         marginLeft: 340,
//         marginTop: -90,


//     },
//     logoutText: {
//         color: 'red'
//     },
//     text: {

//         fontSize: 25,
//         flexDirection: "row",
//         marginLeft: 10,
//         fontWeight: 'bold'

//     },
//     text2: {
//         marginTop: 35,
//         position: 'relative',
//         right: 180,
//         fontSize: 18,
//         color: 'gray',
//         justifyContent: 'center'
//     },
   
// })