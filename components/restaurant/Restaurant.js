import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper/src';
import styles from './styles';
import MyTabs from '../bottomtab/bottomtab';



// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import StarRating from '../components/StarRating';

const Restaurant = ({navigation}) => {
  const [search , setSearch] = React.useState('');
  const [restaurants , setRestaurants] = React.useState([]);

  useEffect(()=>{
    const restaurants = [
      {
        name : 'Mutton Karahi',
        description : 'Mutton Karahi created with special care and love and just the way you like it',
        price:3000
      },
      {
        name : 'Chicken Munchurian',
        description : 'Feel like you are in China just by trying our special chinese dish',
        price:4000
      },
      {
        name : 'Seekh Kabab',
        description : 'Fresh and hot, each serving contains 4 pieces',
        price:1000
      },
      {
        name : 'Milayi Boti',
        description : 'Enough for 4 people easily, served with our special naan',
        price:3000
      },
  
    ]
    setRestaurants(restaurants)


  },[])

  

  const HandleChange = (event)=>{
    setSearch(event.target.value)
  }
  

  return (
    <ScrollView style={styles.container}>
      {/* <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} /> */}

      
       <View style={styles.header}>
         <Text style={styles.heading}>
           Restaurant Menu
         </Text>

         

       </View>

      

      {/* slider code starts */}
      <View style={styles.sliderContainer}>
        
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/bgimg1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          
        
      </View>

      {/* slider code ends */}


      <View style={styles.cardsWrapper}>
        

        {/* search bar */}

        <TextInput style={styles.input}
           placeholder="search Items"
           placeholderTextColor='indianred'
           value = {search}
           onChange={HandleChange}

          
          

         />
        {/* search bar ends */}
        {
          restaurants.filter((restaurant)=>{
            if(restaurant.name.toUpperCase().includes(search.toUpperCase())){
              return restaurant;
            }
          }).map((restaurant)=>{
            return(
              <TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{restaurant.name}</Text>
            
            <Text style={styles.cardDetails}>
              {restaurant.description}
            </Text>
            <Text style={styles.cardprice}>
              {restaurant.price}
            </Text>
          </View>
        </View>
        </TouchableOpacity>

            )
          })
        }
        
       
      </View> 
      
    </ScrollView>
  );
};

export default Restaurant;
