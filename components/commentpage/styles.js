import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width:'100%',
        padding:7
      },
    
      header:{
     
     width:'100%',
     alignItems:'center',
     backgroundColor:'indianred',
     padding:5,
     borderRadius:5
     
      },
    
      heading:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
      },
      Image:{
height:400,
margin:5
      },
      cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
      Comments:{
        margin:5
      },
      commentTitle:{
        fontWeight: 'bold',
        fontSize:15,
        color:'indianred'
      },
      commentSubtitle:{

      },


    
    
      
});

export default styles;