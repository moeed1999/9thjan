import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container:{
      flex:1,
      backgroundColor:'lightgrey',
      justifyContent:'center',
      alignItems:'center'
      
  },
  form:{
// height:'60%',
backgroundColor:'white',
width:'90%',
borderRadius:12,
padding:7


  },
  heading:{
      textAlign:'center'
  },
  headingtext:{
color:'indianred',
fontSize:20,
fontWeight:'bold'
  },
entries:{
margin:5
},
  inputhead:{
    marginLeft:5,
    color:'indianred'
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius:5,
    borderColor:'grey',
    width:'90%',
//     height: 'auto',
// min-height: '10px'
  },
  choosecontainer:{
// flex:1,
width:'100%'
// flexDirection:'row',
// justifyContent:'space-between'

  },

buttoncontainer:{
  width:'50%',
  // padding: 30,
  
  
  },
  button:{
  backgroundColor:'indianred',
  height: 40,
  borderRadius: 5,
  justifyContent:'center',
  alignItems:'center',
  
  },
  nextbutton:{
    marginTop:5,
    width:'100%',
  }
});

export default styles;