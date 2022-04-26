import React, { useState } from "react";
import credential from "../component/Authenticate";
import { styles } from "../styles/Login.style";
import { colors } from "../util/color";
import { localstring } from "../util/localstrings";
import AsyncStorage from "@react-native-async-storage/async-storage";


import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    StatusBar,
    Alert,
    
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const userInfo=credential
export const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const  onSubmit =async()=>{
        if(userInfo.email ===email &&userInfo.password===password){
            //if the user put the value correctly then we are putting async storage as 1 and navigate to home
          await AsyncStorage.setItem('isLoggedIn','1')

          //here we get value that we have given in the setItem 
          const value= await AsyncStorage.getItem('isLoggedIn',()=>{console.log('login successfull')})
          console.log(value)
         
          //we can use this method also for preventing backword
        //   navigation.reset({
        //       index:0,
        //       routes:[{
        //           name:'Home'
        //       }]
        //   })
          navigation.navigate('Home')
            
        }else{
            alert('unable to login')
        }
    }

    // const onSubmit = () => {
    //     console.log(email)
    //     console.log(password)

    //     //  navigation.navigate('Home')

    //     //checking the credentials
    //     var flag = 0
    //     credential.map((credential) => {

    //         console.log(credential)

    //         if (credential.email === email && credential.password === password) {
    //             flag = 1
                
    //         }
    //     })
    //     if (flag == 1) {
    //         navigation.navigate('Home')
            
    //     }
    //     else {
    //         alert("invalid credential")
    //     }


    // }



    return (
        <SafeAreaView style={styles.safearea}>

            <View style={styles.container}>
                <Image style={styles.image} source={require("../assets/logo.png")} />

                <StatusBar style="auto" backgroundColor={colors.white} />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder={localstring.enteremail}
                        placeholderTextColor={colors.red}
                        value={email}
                        name="email"
                        onChangeText={setEmail}

                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder={localstring.enterpassword}
                        placeholderTextColor={colors.red}
                        secureTextEntry={true}
                        value={password}
                        name="password"
                        onChangeText={setPassword}

                    />
                </View>

                <TouchableOpacity onPress={() => { navigation.navigate('Forgetpassword') }}>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} onPress={onSubmit}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },

//     image: {
//         marginBottom: 30,
//         position: "relative",
//         backgroundColor: 'white'

//     },

//     inputView: {
//         backgroundColor: "#FFC0CB",
//         borderRadius: 30,
//         width: "70%",
//         height: 45,
//         marginBottom: 20,

//         alignItems: "center",
//     },

//     TextInput: {
//         height: 50,
//         flex: 1,
//         padding: 10,
//         marginLeft: 20,
//     },

//     forgot_button: {
//         height: 30,
//         marginBottom: 30,
//     },

//     loginBtn: {
//         width: "80%",
//         borderRadius: 25,
//         height: 50,
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 40,
//         backgroundColor: "#FF1493",
//     },
//     loginText:{
//         fontWeight:"bold"
//     }
// });
