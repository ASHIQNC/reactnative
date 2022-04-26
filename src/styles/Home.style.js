import { StyleSheet } from "react-native";
import {colors} from '../util/color'

export const styles = StyleSheet.create({
    safearea:{
        flex: 1,
        backgroundColor: "white"  
    },

    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor:"white",
        elevation:5,
        borderRadius:10,
        
        

    },
    logout: {

        marginLeft: 340,
        marginTop: -55,


    },
    logoutText: {
        color: 'red'
    },
    text: {

        fontSize: 25,
        flexDirection: "row",
        marginLeft: 10,
        fontWeight: 'bold'

    },
    text2:{
         fontSize: 25 
    },
   
    text3: {
        marginTop: 35,
        position: 'relative',
        right: 180,
        fontSize: 18,
        color: 'gray',
        justifyContent: 'center'
    },
    safeareview:{
        flexDirection: "row"
    },
    
    // card style

  cardview:{
    alignItems: 'center',
    padding:20 
  },
  cardimage:{
    height: 150, 
    width: 150 
  },
  cardtext:{
    color: 'red',
    fontSize:18,
    fontWeight:"bold"

  }

})