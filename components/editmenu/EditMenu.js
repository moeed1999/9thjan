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




function EditMenu({navigation}) {
  const [menuname, setMenuName] = useState('Chicken Supreme Pizza'); 
  const [menudescription, setMenuDescription] = useState('Tasty and Delicious Pizza');
  const [menuprice, setMenuPrice] = useState('1000');
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
    "Edit Menu"
</Text>
</View>

<View style={styles.entries}>
<Text style={styles.inputhead}>
  Enter Food Name
  </Text>
<TextInput 
            style={styles.input}
            placeholder='e.g/Chicken Supreme Pizza'
            onChangeText={ (val) => setMenuName(val)}
            keyboardType='default'
            multiline={true}
            />
           
           <Text style={styles.inputhead}>
  Enter Description
  </Text>
<TextInput 
            style={styles.input}
            placeholder='e.g/Tasty and Delicios Pizza'
            onChangeText={ (val) => setMenuDescription(val)}
            keyboardType='default'
            multiline={true}
            />
<Text style={styles.inputhead}>
  Enter Price
  </Text>
<TextInput 
            style={styles.input}
            placeholder='e.g/1000.RS'
            onChangeText={ (val) => setMenuPrice(val)}
            keyboardType='numeric'
            
            />
        </View>
          
           <View style={styles.choosecontainer}>
           <DropDownPicker
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
    />     
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

export default EditMenu
