import React, {useState} from 'react'
import {Text, View, TextInput, Pressable, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { Button, Caption } from 'react-native-paper';
import styles from './styles';

const Forgot = ({navigation}) => {

    const [email, setEmail] = useState('moeed');
    
    return (
        <View style={styles.container}>
<ImageBackground
style={styles.img}
source={require('../../assets/images/bgimg3.jpg')}
/>
       <View style={styles.form}>

        <View style={styles.heading}>
            <Text style={styles.headingtext}>
            Trouble with logging in?
            </Text>
        </View>

        <View style={styles.text}>
            
<Caption style={styles.caption}>
We'll send you a link to get back into your account.     
</Caption>

        </View>

        <TextInput style={styles.input}
        placeholder='Enter your email'
        onChangeText={ (val) => setEmail(val)}
        keyboardType='email-address'
        />


<View style={styles.button}>
<Pressable 
        
        onPress={
        ()=> 
        {
            console.warn('hey there')
            }
        }
        >
       <Text style={styles.buttontext}>
           Send Link
       </Text>
       </Pressable>
       </View>

<View >
<Pressable 
        
        onPress={
        ()=> 
        navigation.navigate('Signup')
        }
        >
       <Text style={styles.linktext}>
           Create new account
       </Text>
       </Pressable>
       </View>

       <View>
<Pressable 
        
        onPress={
        ()=> 
        navigation.navigate('Login')
        }
        >
       <Text style={styles.linktext}>
           Back to log in
       </Text>
       </Pressable>
       </View>
       

        

        

            


        

       </View>

        </View>
    );
};
export default Forgot;


