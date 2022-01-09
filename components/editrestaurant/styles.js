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
   remainder:{
    //    marginTop:5
    alignContent:'flex-start'
        

   },
   options:{
    flexDirection:'column'
   },
   optiontexts:{
    textAlign:'left',
    color:'indianred'
   }


});

export default styles;