import React from 'react';
import {View, SafeAreaView,Image,ScrollView,TouchableOpacity,Button, Pressable,TextInput} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const UserProfile = ({navigation}) => {



  return (
    <SafeAreaView style={styles.container}>
<ScrollView>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={require('../../assets/images/bgimg2.jpg')}
            size={80}
          />
          <View style={{marginLeft: 20,}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Abdul Moeed</Title>
            <Caption style={styles.caption}>@abdulmoeedcj@gmail.com</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        {/* pressable edit button */}
        
      <View style={styles.row}>
          <Icon name="pencil" color="indianred" size={20}/>
          <Pressable 
                style={{color:"black", marginLeft: 20}}
                onPress={
                 ()=> 
                navigation.navigate('EditUser')
              }>
          <Text style={{color:'indianred'}}>
          Edit Profile
          </Text>
          </Pressable>
      </View>
        
      </View>


      

<View style={styles.cardsWrapper}>
        
        <View style={styles.menuhead}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color:'indianred'
          }}>
          Your Posts
        </Text>
        
        
        <View
        style={{
          flexDirection:'row'
        }}
        >

          <Pressable      
            onPress={
                ()=> 
                {
                 console.warn('hey there')
                }
              }>
          <Icon name="plus-box" color="indianred" size={22}/>  
          </Pressable>

        </View>


        </View>
        {/* <TextInput style={styles.input}
           placeholder="search here"
           placeholderTextColor='indianred'

         /> */}
{/* cards start */}
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg1.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>

          <View style={styles.cardinfocover}>
          <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Moeed</Text>
            
            <Text style={styles.cardDetails}>
              this place is the best
            </Text>
            <Text style={styles.cardTitle}>Ahsan</Text>
            
            <Text style={styles.cardDetails}>
              not really
            </Text>
            
            
          </View>
          <Pressable      
            onPress={
                ()=> 
                {
                 console.warn('hey there')
                }
              }>
          <Icon style={{margin:2}}
          name="delete" color="indianred" size={18}/>
          </Pressable>

          <Pressable      
            onPress={
                ()=> 
                {
                 console.warn('hey there')
                }
              }>
          <Icon style={{margin:2}} 
          name="pencil" color="indianred" size={18}/>
          </Pressable>
        </View>
       </View>
       {/* cards ends */}
 {/*examples start  */}

 <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>

          <View style={styles.cardinfocover}>
          <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Moeed</Text>
            
            <Text style={styles.cardDetails}>
              this place is the best
            </Text>
            <Text style={styles.cardTitle}>Ahsan</Text>
            
            <Text style={styles.cardDetails}>
              not really
            </Text>
            
            
          </View>
          <Pressable      
            onPress={
                ()=> 
                {
                 console.warn('hey there')
                }
              }>
          <Icon style={{margin:2}}
          name="delete" color="indianred" size={18}/>
          </Pressable>

          <Pressable      
            onPress={
                ()=> 
                {
                 console.warn('hey there')
                }
              }>
          <Icon style={{margin:2}} 
          name="pencil" color="indianred" size={18}/>
          </Pressable>
        </View>
       </View>

       <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>

          <View style={styles.cardinfocover}>
          <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Moeed</Text>
            
            <Text style={styles.cardDetails}>
              this place is the best
            </Text>
            <Text style={styles.cardTitle}>Ahsan</Text>
            
            <Text style={styles.cardDetails}>
              not really
            </Text>
            
            
          </View>
          <Pressable      
            onPress={
                ()=> 
                {
                 console.warn('hey there')
                }
              }>
          <Icon style={{margin:2}}
          name="delete" color="indianred" size={18}/>
          </Pressable>

          <Pressable      
            onPress={
                ()=> 
                {
                 console.warn('hey there')
                }
              }>
          <Icon style={{margin:2}} 
          name="pencil" color="indianred" size={18}/>
          </Pressable>
        </View>
       </View>
        
        {/* example ends */}
        
        
        </View>



      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;

