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
import EditMenu from '../editmenu/EditMenu';


const ProfileScreen = ({navigation}) => {
  const [search , setSearch] = React.useState('');

  const HandleSearchChange = (event)=>{
    setSearch(event.target.value)
  }

  const menuItems = [
    {
      title : 'karachi Biryani',
      description : 'amazing taste loved everything about it.. definitely coming again ',
      type : 'Desi',
      price : 1000
    },
    {
      title : 'tikka biryani',
      description : 'i like it, love it, tbh i dont even know how to actually praise it',
      type : 'Desi',
      price : 1000
    },
    {
      title : 'Chersi tikka',
      description : 'mazah nahi aya yar itna',
      type : 'Desi',
      price : 1000
    },{
      title : 'haleem',
      description : 'kmaal yaar .. mazaha agya .. utna nahi.. lykin phir b..kamal',
      type : 'Desi',
      price : 1000
    },

  ]



  return (
    <SafeAreaView style={styles.container}>
<ScrollView style={{marginTop:12}}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={require('../../assets/images/bgimg3.jpg')}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Abdul Moeed</Title>
            <Caption style={styles.caption}>abdulmoeedcj@gmail.com</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Pakistan, Lahore</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{color:"#777777", marginLeft: 20}}>0900-78601</Text>
        </View>
        {/* <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Bundukhan@gmail.com</Text>
        </View> */}
        
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
      {/* pressable logout button */}
      <View style={styles.row}>
          <Icon name="cog-outline" color="indianred" size={20}/>
          <Pressable 
                style={{color:"black", marginLeft: 20}}
                onPress={
                 ()=> 
                navigation.navigate('Login')
              }>
          <Text style={{color:'indianred'}}>
          Logout
          </Text>
          </Pressable>
      </View>
        
      </View>

{/* take-away or dine in option */}

      {/* <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>Dine-In</Title>
            <Icon name="check" color="#777777" size={22}/> 
          </View>
          <View style={styles.infoBox}>
            <Title>Take-Away</Title>
            <Icon name="check" color="#777777" size={22}/>            
          </View>
      </View> */}
      

<View style={styles.cardsWrapper}>
        
        <View style={styles.menuhead}>
        {/* <View
        style={{
          flexDirection:'row'
        }}
        >

          <Pressable      
            onPress={
                ()=> 
                navigation.navigate('AddPost')
              }>
          <Icon name="plus-box" color="indianred" size={22}/>  
          </Pressable>

        </View> */}
       
       {/*  adsda*/}
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
                navigation.navigate('AddPost')
              }>
          <Icon name="plus-box" color="indianred" size={22}/>  
          </Pressable>

        </View>


        </View>
        <TextInput style={styles.input}
           placeholder="search here"
           placeholderTextColor='black'
           value = {search}
           onChange = {HandleSearchChange}

         />

        {
          menuItems.filter((item)=>{
            if(item.title.toUpperCase().includes(search.toUpperCase())){
              return item;
            }
          }).map((item)=>{
            return(
             <Pressable
             onPress={
              ()=> 
              navigation.navigate('Comments')
            }
             >
               
             <View style={styles.card}>
                
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            {/* <Text style={styles.cardTitle}>{item.title}</Text> */}
            
            <Text style={styles.cardDetails}>
              {item.description}
            </Text>
            {/* <Text style={styles.cardCategory}>
              {item.type}
            </Text> */}
            {/* <Text style={styles.cardPrice}>
              {item.price}
            </Text> */}
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
                navigation.navigate('EditPost')
              }>
          <Icon style={{margin:2}} 
          name="pencil" color="indianred" size={18}/>
          </Pressable>
        </View>
        </Pressable>
        
            )
          })
        }
       

        
        {/* <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>

            <Text style={styles.cardTitle}>Biriyani</Text>
            
            <Text style={styles.cardDetails}>
              Very Tasty
            </Text>
            <Text style={styles.cardCategory}>
              Desi
            </Text>
            <Text style={styles.cardPrice}>
              1000
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
        

        
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Fish</Text>
            
            <Text style={styles.cardDetails}>
              Very Tasty
            </Text>
            <Text style={styles.cardCategory}>
              Desi
            </Text>
            <Text style={styles.cardPrice}>
              1000
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
        </View> */}
        
        
        
        </View>



      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

