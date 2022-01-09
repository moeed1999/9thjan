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
import ChangePassword from '../changepassword/ChangePassword';




function EditUser({navigation}) {
  const [username, setUserName] = useState('moeed'); 
  const [useraddress, setUserAddress] = useState('31st road');
  const [userphone, setUserPhone] = useState('1000');
  // drop down
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Desi', value: 'Desi'},
    {label: 'Chinese', value: 'Chinese'},
    {label: 'Fastfood', value: 'Fastfood'},
  ]);
  
  
    return(
    <View style={styles.container}>
        <View style={styles.form}> 

    <View style={styles.heading}>  
<Text style={styles.headingtext}>
    "Edit User"
</Text>
</View>

<View style={styles.entries}>
<Text style={styles.inputhead}>
  Change User Name
  </Text>
<TextInput 
            style={styles.input}
            placeholder='e.g/Abdul Moeed'
            onChangeText={ (val) => setUserName(val)}
            keyboardType='default'
            multiline={true}
            />
           
           <Text style={styles.inputhead}>
  change Address
  </Text>
<TextInput 
            style={styles.input}
            placeholder='e.g/31st road'
            onChangeText={ (val) => setUserAddress(val)}
            keyboardType='default'
            multiline={true}
            />
<Text style={styles.inputhead}>
  Change Phone Number
  </Text>
<TextInput 
            style={styles.input}
            placeholder='e.g/03002323123'
            onChangeText={ (val) => setUserPhone(val)}
            keyboardType='numeric'
            
            />
        </View>
          
           <View style={styles.choosecontainer}>
           {/* <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder='Choose Category'
      textStyle={{
        color:'indianred'
      }}
    />      */}
    {/* upload picture */}
    <View style={styles.buttoncontainer}>
        {/*change password  */}
        <Pressable 
        style={styles.button}
        onPress={
        ()=> 
        {
        navigation.navigate(ChangePassword)
        }
        }
        >

       <Text style={{color:'white',fontSize:15}}>
           Change Password
       </Text>
    
        </Pressable>
      
      {/* change profile */}
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
        {/* next start */}
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


    
           
  
            

        {/* form view */}
        </View>
        {/* container view */}
    </View>
          )
}

export default EditUser
