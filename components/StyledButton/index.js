import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const StyledButton = ({navigation}) => {
    return (
        <View style={styles.container}>
        
        <Pressable 
        style={styles.button}
        onPress={
        ()=> 
        navigation.navigate('Login')
        }
        >

       <Text style={styles.text}>
           Lets get started!
       </Text>
    
        </Pressable>
        
        </View>
    );
};

export default StyledButton
