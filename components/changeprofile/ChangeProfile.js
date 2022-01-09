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


function ChangeProfile() {
   
    const [username, setUserName] = useState('moeed');
    const [newpassword, setNewPassword] = useState('asdas');
    const [newpasswordagain, setNewPasswordAgain] = useState('dfsdfsf');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertext}>
                    Edit Profile
                </Text>

            </View>
{/* header complete */}

            
                
                
                <Text style={{color:'indianred'}}>
                    Choose new picture
                    </Text>
                    <Pressable 
        style={styles.browse}
        onPress={
        ()=> 
        {
        console.warn('hey there')
        }
        }
        >

       <Text style={styles.text}>
           BROWSE
       </Text>
    
        </Pressable>
                
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

export default ChangeProfile
