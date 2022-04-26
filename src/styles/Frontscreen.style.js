import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safearea:{
        flex: 1, 
        backgroundColor: "white"
    },
    height:{

        height: 400
    },


    text: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: 'center',
        color: "black"
    },
    text2:{
        fontSize: 18,
        color: "gray",
        marginTop: 20,
        textAlign: 'center'
    },

    image:{
        width: "100%",
        resizeMode: 'contain',
        top: -150
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
        position: "relative",
        left: 30
    },
    textcontainer: {
        paddingHorizontal:20,
        justifyContent:"center",
        
    },
    loginText:{
        fontWeight:"bold"
    }
})
