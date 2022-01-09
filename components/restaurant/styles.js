import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width:'100%',
        padding:9
      },
    
      header:{
     backgroundColor:'indianred',
     width:'100%',
     alignItems:'center',
     borderRadius:5
    
      },
    
      heading:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
      },
    
    
      input:{
        height: 35,
        margin: 2,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        borderColor:'grey',
        width:'85%',
        alignSelf:'center'
      },
    
      sliderContainer: {
        height: 300,
        width: '100%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
      },
    
      wrapper: {},
    
      slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
      },
      sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
      },
      categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
      },
      categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
      },
      categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#fdeae7' /* '#FF6347' */,
        borderRadius: 50,
      },
      categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#de4f35',
      },
      cardsWrapper: {
        marginTop: 10,
        width: '90%',
        alignSelf: 'center',
      },
      card: {
        height: 100,
        marginVertical: 8,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      cardImgWrapper: {
        flex: 1,
      },
      cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
      cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
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
        color: '#444',
      },
      cardprice: {
        fontSize: 13,
        color: 'black',
        fontWeight:'bold'
      },

});

export default styles;