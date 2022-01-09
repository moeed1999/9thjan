import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";



const styles = StyleSheet.create({

    text:{
        color:'blue',
        alignSelf:'center',
        fontSize:30

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
});
export default styles;