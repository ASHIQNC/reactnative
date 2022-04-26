import React,{useState} from "react";
import { styles } from "../styles/Forgetpassword.style";
import { localstring } from "../util/localstrings";

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    StatusBar
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../util/color";



export const Forgetpassword = ({navigation}) => {
    const [oldpassword,setOldPassword]=useState('')
    const [newpassword,setNewPassword]=useState('')
    const [confirmpassword,setConfirmPassword]=useState('')
    const onSubmit=()=>{
        
    

        navigation.navigate('Login')
        alert("password change successfully")
      
      

    
    }

    return (
        <SafeAreaView style={styles.safearea}>

            <View style={styles.container}>
                {/* <Image style={styles.image} source={require("../assets/logo.png")} /> */}

                <StatusBar style="auto" backgroundColor={colors.white} />
               
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder={localstring.oldpassword}
                        placeholderTextColor={colors.red}
                        secureTextEntry={true}
                        value={oldpassword}
                        name="oldpassword"
                        onChangeText={setOldPassword}

                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder={localstring.enternewpassword}
                        placeholderTextColor={colors.red}
                        secureTextEntry={true}
                        value={newpassword}
                        name="newpassword"
                        onChangeText={setNewPassword}

                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder={localstring.confirmpassword}
                        placeholderTextColor={colors.red}
                        secureTextEntry={true}
                        value={confirmpassword}
                        name="password"
                        onChangeText={setConfirmPassword}

                    />
                </View>

                <TouchableOpacity style={styles.loginBtn} onPress={onSubmit}>
                    <Text style={styles.loginText}>SUBMIT</Text>
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
