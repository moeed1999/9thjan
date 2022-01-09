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


// radio button
const radioButtonsData = [{
  id: '1', 
  label: 'Dine In',
  value: 'Dine In'
}, {
  id: '2',
  label: 'Take Away',
  value: 'Take Away'
}]

function ChangeUserName({navigation}) {
  const [restaurantname, setRestaurantName] = useState('kfc'); 
  const [restaurantaddress, setRestaurantAddress] = useState('mm alam road');
  // drop down
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Desi', value: 'Desi'},
    {label: 'Chinese', value: 'Chinese'},
    {label: 'Fastfood', value: 'Fastfood'},
  ]);
  // radio button
  const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }
  
    return(
    <View style={styles.container}>
        <View style={styles.form}> 

    <View style={styles.heading}>  
<Text style={styles.headingtext}>
    "Create Restaurant"
</Text>
</View>

<View style={styles.entries}>
<Text style={styles.inputhead}>
  Enter Restaurant Name
  </Text>
<TextInput 
            style={styles.input}
            placeholder='e.g/KFC'
            onChangeText={ (val) => setRestaurantName(val)}
            keyboardType='default'
            // multiline='true'
            />
           
           <Text style={styles.inputhead}>
  Enter Restaurant Address
  </Text>
<TextInput 
            style={styles.input}
            placeholder='e.g/MM Alam road/Lahore'
            onChangeText={ (val) => setRestaurantAddress(val)}
            keyboardType='default'
            // multiline='true'
            />
        {/* radio button */}
           
           <View style={{marginTop:10}}>
           <Caption style={{color:'indianred',fontSize:14}}>
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
            style={styles.radio}
            layout='row'
            
        />
           </Caption>
           </View>
          
           <View style={styles.choosecontainer}>
           <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder='Choose your type'
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
        navigation.navigate('Addmenu')
        }
        >

       <Text style={{color:'white',fontSize:15}}>
           Next
       </Text>
    
        </Pressable>
        
        </View>
      
     {/* next closes */}
      <Text style={{alignSelf:'center',color:'indianred'}}>
        OR
      </Text>
      
      

      <View style={styles.nextbutton}>
        
        <Pressable 
        style={styles.button}
        onPress={
        ()=> 
        navigation.navigate('BottomNavigator')
        }
        >

       <Text style={{color:'white',fontSize:15}}>
           Skip
       </Text>
    
        </Pressable>
        
        </View>

        </View>
        </View>


    
           
  
            </View>
<View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end',marginRight:30}}>
<Caption>
  <Text >
    page 1 of 2
  </Text>
</Caption>
</View>
        {/* form view */}
        </View>
        {/* container view */}
    </View>
          )
}

export default ChangeUserName
