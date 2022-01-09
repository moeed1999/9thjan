import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    image:{
        height:'100%',
        width:'100%',
        resizeMode:'cover',
        position:'absolute',
    
      },
       page: {
       width:'100%',
       height:'100%',
      },
    
      titles:{
       marginTop:'30%',
       width:'100%',
       alignItems:'center',
      },
    
      heading:{
       fontSize: 30,
       fontWeight: 'bold',
       color:'indianred',
    
      },
    
      subHeading:{
        fontSize: 16,
        color: '#5c5e62',
    
        
      },
      
buttoncontainer:{
  width:'100%',
  padding: 30,
  position:'absolute',
  bottom: 35,
  
  },
  button:{
  backgroundColor:'white',
  height: 40,
  borderRadius: 20,
  justifyContent:'center',
  alignItems:'center',
  
  },
  text:{
  fontSize: 12,
  fontWeight: '500',
  textTransform:'uppercase',
  color:'indianred'
  }

});

export default styles;