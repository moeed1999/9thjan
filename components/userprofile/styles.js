import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:10
      
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 15,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color:'indianred'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuhead:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },

    input:{
      height: 30,
      borderWidth: 1,
      padding: 8,
      borderRadius:12,
      borderColor:'#dddddd',
      width:'100%',
      marginTop:5
    },
    cardsWrapper: {
      width: '90%',
      alignSelf: 'center',
      padding:'5%',
      borderWidth:1,
      borderColor:'pink',
      borderRadius:12
    },
    card: {
      height: 300,
      marginVertical: 10,
      flexDirection: 'column',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    cardImgWrapper: {
    //   flex: 3,
    height:'60%'
    },
    cardImg: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
    },

    cardinfocover:{
        flexDirection:'row',height:'40%'
    },
    cardInfo: {
      flex: 1,
      padding: 10,
      borderColor: 'white',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#fff',
    },
    cardTitle: {
      fontWeight: 'bold',
      color:'indianred'
    },
    cardDetails: {
      fontSize: 12,
      color: '#333',
    },
    cardCategory: {
      fontSize: 10,
      color: '#333',
    },
    cardPrice: {
      fontSize: 10,
      color: '#333',
    },


  menu:{
    fontWeight:'bold',
    fontSize:18,
    color:'#333',
    alignSelf:'center'
    
  }

  });
export default styles;