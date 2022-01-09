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
  SafeAreaView
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

const HomeScreen = ({navigation}) => {
  const [search , setSearch] = React.useState('');
  const [restaurants , setRestaurants] = React.useState([]);

  useEffect(()=>{
    const restaurants = [
      {
        key:1,
        name : 'Bundu Khan',
        description : 'We provide our customers with the best service as we can as this is the reason we are still one of the top restaurants of pakistan even after 15 years',
      },
      {
        key:2,
        name : 'Tofu Restaurant',
        description : 'Enjoy our best meals with an amazing view of the city as we are based on the top an 8th floor building'
      },
      {
        key:3,
        name : 'Arcadian Cafe',
        description : 'Enjoy best deals and offers as we are always bringing in something new to the table."no pun intended"'
      },
      {
        key:4,
        name : 'McDonalds',
        description : 'you already about us'
      },
  
    ]
    setRestaurants(restaurants)


  },[])

  

  const HandleChange = (event)=>{
    setSearch(event.target.value)
  }
  

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView >
      {/* <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} /> */}

      
       <View style={styles.header}>
         <Text style={styles.heading}>
           BY-F00D
         </Text>

         

       </View>

      

      {/* slider code starts */}
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          height={200}
          activeDotColor="white">
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/bgimg1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/bgimg2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/bgimg3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      {/* slider code ends */}


      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: 'indianred',
          }}>
          "Scroll through Restaurants"
        </Text>

        {/* search bar */}

        <TextInput style={styles.input}
           placeholder="search here"
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
              <TouchableOpacity
              onPress={
                ()=> 
                
                navigation.navigate('Restaurant')
                }>
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
          </View>
        </View>
        </TouchableOpacity>

            )
          })
        }
        
       
      </View> 
      
    </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
