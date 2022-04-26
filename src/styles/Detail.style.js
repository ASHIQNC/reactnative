import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:280,
        
    },
    safearea:{
        backgroundColor:"white",
        flex:1
    },
    
    back:{
        flexDirection:"row",
        backgroundColor:"white",
      
    },
    header:{
        marginTop:10,
        paddingHorizontal: 20,
        paddingVertical:15,
        backgroundColor:"white",
        elevation:5,
        borderRadius:10,
    },
    headertext:{
        fontSize:20,
        fontWeight:"bold",
        left:5,
        color:'black',
        top:-4
    },
    icon:{
        height:20,
        width:25,
        backgroundColor:"white"

    },
    text:{
        flexDirection:"row",
        textAlign:'center',
        color:'gray',
        fontWeight:'bold',
        fontSize:25,
        justifyContent:'space-around',
        paddingTop:20
    },
    image:{
        width: "100%",
         resizeMode: 'contain',
         top: 40,
        height:220,
    },
    discriptions:{
        textAlign:'center',
        paddingTop:40,
        paddingBottom:60,
        
    },
    textdiscription:{

        color:'red',
        fontSize:20,
        borderRadius:10,
        position:'relative',
        top:50,
        backgroundColor:"orange",
    
    },
    cardtextview:{
        alignItems: 'center',
        top:10

    },
    cardtext:{
        color: 'red',
        fontSize:18,
        fontWeight:"bold",
        
    
      }
})
