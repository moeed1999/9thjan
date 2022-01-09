import React , {Component} from 'react';
import {Text, View, ImageBackground , Pressable} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';


// const image = require('../../assets/images/bgimg.jpg');

const HomePage = ({navigation}) => {
    
return (

    <View style={styles.page}>
      <ImageBackground 
source={require('../../assets/images/bgimg3.jpg')}
style={styles.image}/>


<View style={styles.titles}>
<Text style={styles.heading}>BY FOOD</Text>
 <Text style={styles.subHeading}>Eat whatever, whereever, whenever</Text>

 </View>
 
 <View style={styles.buttoncontainer}>
        
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

</View>
   

  );
};


  export default HomePage;

