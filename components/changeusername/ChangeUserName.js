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


function ChangeUserName() {
   
    const [username, setUserName] = useState('moeed');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertext}>
                    Edit Profile
                </Text>

            </View>
{/* header complete */}

            
                <View style={styles.page}>
                
                <Caption style={{ textAlign:'center'}}> 
                    Enter your new user name
                </Caption>
                
{/* different options */}
                
                <TextInput 
            style={styles.input}
            placeholder='e.g/moeed'
            onChangeText={ (val) => setUserName(val)}
            keyboardType='default'
            />

            </View>
                


                {/* button container */}
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

       <Text style={styles.text}>
           confirm
       </Text>
    
        </Pressable>
        
        </View>

            </View>
        
    )
}

export default ChangeUserName
