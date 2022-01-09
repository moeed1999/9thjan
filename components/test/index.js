import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
const TestScreen = () => {
return(
<SafeAreaView>
    <Text style={styles.text}> 
        my name is moeed
    </Text>
{/* 
    <View style={styles.cardsWrapper}>
        <Text
          >
          Top Rated Restaurants
        </Text>
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
            <Text style={styles.cardTitle}>Bundu Khan</Text>
            
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        </View> */}


<View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>Dine-In</Title>
            <Caption>Available</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>Take-Away</Title>
            <Caption>Available</Caption>
          </View>
      </View>
</SafeAreaView>
);

};
export default TestScreen;