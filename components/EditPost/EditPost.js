import React ,{useState}from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Pressable,
    
  } from 'react-native';
import { Caption } from 'react-native-paper';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioGroup from 'react-native-radio-buttons-group';




function EditPost({navigation}) {
  const [menucaption, setMenuCaption] = useState('kfc'); 
  
  
  
  
  
  
    return(
    <View style={styles.container}>
        <View style={styles.form}> 

    {/* <View style={styles.heading}>  
<Text style={styles.headingtext}>
    "Edit Post"
</Text>
</View> */}

<View style={styles.entries}>

           
           <Text style={styles.inputhead}>
  Enter Caption
  </Text>
<TextInput 
            style={styles.input}
            placeholder='e.g/had a lot of fun'
            onChangeText={ (val) => setMenuCaption(val)}
            keyboardType='default'
            // multiline='true'
            />
      
           
           
          
           <View style={styles.choosecontainer}>
          
    {/* upload picture */}
    <View style={styles.buttoncontainer}>
        
        <Pressable 
        style={styles.button}
        onPress={
        ()=> 
        {
        console.warn('hey there')
        }
        }
        >

       <Text style={{color:'white',fontSize:15}}>
           Choose Image
       </Text>
    
        </Pressable>
        </View>
        {/* done start */}
        <View>
        <View style={styles.nextbutton}>
        
        <Pressable 
        style={styles.button}
        onPress={
        ()=> 
        navigation.navigate('ProfileScreen')
        }
        >

       <Text style={{color:'white',fontSize:15}}>
           Done
       </Text>
    
        </Pressable>
        
        </View>
      
     {/* next closes */}
      
      

      

        </View>
        </View>


    
           
  
            </View>

        {/* form view */}
        </View>
        {/* container view */}
    </View>
          )
}

export default EditPost
