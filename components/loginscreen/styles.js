import { StyleSheet } from "react-native";
// import { abs } from "react-native-reanimated";

const styles = StyleSheet.create({

container:{
    width:'100%',
    // backgroundColor:'deeppink',
    height:'100%',
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'

},
form:{
    width:'80%',
    backgroundColor:'white',
    // height: 300,
    // marginTop:'60%',
    borderRadius: 20,
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'space-between',
    


    

},

heading:{
    fontSize: 25,
    fontWeight: 'bold',
    color:'indianred',
    margin:3
},

input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius:20,
    borderColor:'grey',
    width:'85%',
  },

  forgotbutton:{
    backgroundColor:'white',
    height: 40,
    width:200 ,
    borderRadius: 15,
    justifyContent:'center',
    alignItems:'center',
    marginTop:5
    

  },

forgot:{

    color:'indianred',
    margin: 1,
    
},
sign:{

    color:'indianred',
    margin:3
},

button:{
    backgroundColor:'indianred',
    height: 40,
    width:150,
    borderRadius: 15,
    justifyContent:'center',
    alignItems:'center',
    margin:3
},
log:{
 color:'white'
},

image:{
width:'80%',
height:'30%',
// backgroundColor:'yellow',
marginTop:40

},
img:{
    resizeMode:'cover',
    position:'absolute',
    height:'100%',
        width:'100%',
},



});
export default styles;