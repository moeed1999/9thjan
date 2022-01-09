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


function ChangeInfo() {
   
    const [useraddress, setUserAddress] = useState('moeed st');
    const [userphone, setUserPhone] = useState('03224423443');
    // const [usersupportemail, setUserName] = useState('moeed');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertext}>
                    Edit Profile
                </Text>

            </View>
{/* header complete */}

            
                
                
                <Caption style={{color:'indianred'}}> 
                    Enter your new Address
                </Caption>
                        
                <TextInput 
            style={styles.input}
            placeholder='e.g/ 38-st,2/johar town, lahore'
            onChangeText={ (val) => setUserAddress(val)}
            keyboardType='default'
            />

<Caption style={{color:'indianred'}}> 
                    Enter your new Phone Number
                </Caption>
                        
                <TextInput 
            style={styles.input}
            placeholder='e.g/ 0322403278'
            onChangeText={ (val) => setUserPhone(val)}
            keyboardType='numeric'
            />




                {/* dczsc
                 */}
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

export default ChangeInfo
