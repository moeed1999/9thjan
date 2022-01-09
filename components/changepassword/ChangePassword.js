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
import ProfileScreen from '../profile/ProfileScreen';
import styles from './styles';


function ChangePassword({navigation}) {
   
    const [username, setUserName] = useState('moeed');
    const [newpassword, setNewPassword] = useState('asdas');
    const [newpasswordagain, setNewPasswordAgain] = useState('dfsdfsf');
    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Text style={styles.headertext}>
                    Edit Profile
                </Text>

            </View> */}
{/* header complete */}

            
                
                
                <Caption > 
                    Enter your old password
                </Caption>
                
{/* different options */}
                
                <TextInput 
            style={styles.input}
            placeholder='old password'
            onChangeText={ (val) => setUserName(val)}
            secureTextEntry
            />

<Caption > 
                    Enter your new password
                </Caption>
                
{/* different options */}
                
                <TextInput 
            style={styles.input}
            placeholder='should be strong'
            onChangeText={ (val) => setNewPassword(val)}
            secureTextEntry
            />

<Caption > 
                    Enter your new password again
                </Caption>
                
{/* different options */}
                
                <TextInput 
            style={styles.input}
            placeholder='should match the password you typed before'
            onChangeText={ (val) => setNewPasswordAgain(val)}
            secureTextEntry
            />
                
                {/* button container */}
                <View style={styles.buttoncontainer}>
        
        <Pressable 
        style={styles.button}
        onPress={
        ()=> 
        {
        navigation.navigate(ProfileScreen)
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

export default ChangePassword
