import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

   container:{
       flex:1,
       width:'100%',
    //    justifyContent:'center',
    //    alignItems:'center',
       padding:7
   },
   header:{
       backgroundColor:'indianred',
       width:'100%',
       justifyContent:'center',
       alignItems:'center',
       padding:7,
       borderRadius:5
       
   },
   headertext:{
       color:'white',
       fontSize:30,
       fontWeight:'bold'
   },
   
   
   input: {
    height: 40,
    // margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius:5,
    borderColor:'grey',
    width:'100%',
  },

  buttoncontainer:{
    width:'100%',
    padding: 30,
    position:'absolute',
    bottom: 35,
    
    },
    button:{
    backgroundColor:'indianred',
    height: 40,
    borderRadius: 5,
    justifyContent:'center',
    alignItems:'center',
    
    },
    text:{
    fontSize: 12,
    fontWeight: '500',
    textTransform:'uppercase',
    color:'white'
    }
    

});

export default styles;