import React, {useState} from 'react';
import {Text, View, TextInput, Pressable, TouchableOpacity, Image, ImageBackground} from 'react-native';
import RadioButton from '../radio';
import styles from './styles';

const Signup = ({navigation}) => {

const [username, setUsername] = useState('moeed');
const [email, setEmail] = useState('moeed');
const [password, setPassword] = useState('abdc');
    return (
    
        <View style={styles.container}>

            <ImageBackground 
            style={styles.img}
            source={require('../../assets/images/bgimg3.jpg')}/>
            
            {/* logo image start */}

        {/* <View style={styles.image}>
        <ImageBackground
        style={styles.img}
        source={require('./logo.jpeg')}/>

        </View> */}
             
            {/* logo image close */}
        <View style={styles.form}>
            <Text style={styles.heading}> SIGN-UP </Text>

            <TextInput 
            style={styles.input}
            placeholder='Enter your user name'
            onChangeText={ (val) => setUsername(val)}
            keyboardType='default'
            />
            
            <TextInput 
            style={styles.input}
            placeholder='Enter your email'
            onChangeText={ (val) => setEmail(val)}
            keyboardType='email-address'
            />

            <TextInput 
            style={styles.input}
            placeholder='Enter password'
            onChangeText={ (val) => setPassword(val)}
            secureTextEntry
            />
            
            <TextInput 
            style={styles.input}
            placeholder='Re-Enter password'
            onChangeText={ (val) => setPassword(val)}
            secureTextEntry
            />
            {/* radio button */}

{/* <RadioButton/> */}

            {/* log in button */}

        <Pressable 
        style={styles.button}
        onPress={
        ()=> 
        navigation.navigate('BottomNavigator')
        }
        >
       <Text style={styles.log}>
           Sign up
       </Text>
       </Pressable>
            
            
            


{/* sign up */}

       <Text>
           Already have an account ?
       </Text>
           <Pressable 
        onPress={
        ()=> 
        navigation.navigate('Login')
        }
        >
       <Text style={styles.sign}>
           Log in
       </Text>
       </Pressable>
       

             
       
                
    </View>
          {/* form view ending */}

         



    </View>    
    




    );
    };
    
    
      export default Signup;
