import React, {useState} from 'react';
import {Text, View, TextInput, Pressable, TouchableOpacity, Image, ImageBackground} from 'react-native';
import RadioButton from '../radio';
import styles from './styles';

const Login = ({navigation}) => {
    
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
            <Text style={styles.heading}> LOG-IN </Text>

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
           Log In
       </Text>
       </Pressable>
            
            
            


{/* sign up */}

       <Text>
           Don't have an account ?
       </Text>
           <Pressable 
        onPress={
        ()=> 
        navigation.navigate('Signup')
        }
        >
       <Text style={styles.sign}>
           sign up
       </Text>
       </Pressable>
       

             
       
                
    </View>
          {/* form view ending */}

          {/* forgot password button */}
    <TouchableOpacity
        style={styles.forgotbutton}
        onPress={
        ()=> 
        
        navigation.navigate('Forgot')
        
        }
        >
       <Text style={styles.forgot}>
           forgot password?
       </Text>
       </TouchableOpacity>



    </View>    
    




    );
    };
    
    
      export default Login;
