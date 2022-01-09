import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";


const styles = StyleSheet.create({

container:{
    flex:1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    

},
img:{
    resizeMode:'cover',
    position:'absolute',
    height:'100%',
    width:'100%',
},
form:{

backgroundColor:'white',
width:'85%',
alignItems:'center',
flexDirection:'column',
justifyContent:'space-between',
borderRadius:20,
padding:10
},
heading:{
marginTop:10
},
headingtext:{
fontSize:20,
fontWeight: 'bold',
color:'indianred',

},
text:{

},
caption:{
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    marginHorizontal:10,
    alignSelf:'center',
    
},
input:{
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius:7,
    borderColor:'grey',
    width:250,
},
button:{
    width:'30%',
    backgroundColor:'indianred',
    alignItems:'center',
    justifyContent:'center',
    padding:7,
    marginTop:5,
    borderRadius:5

},
buttontext:{
    color:'white'
},
linktext:{
color:'indianred'
},
signup:{

},
signuptext:{

},
login:{

},
logintext:{

},



});
export default styles;