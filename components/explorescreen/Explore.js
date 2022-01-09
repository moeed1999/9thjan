import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Pressable
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import navigation from '../navigation/navigation';
import styles from './styles';

function Explore({navigation}) {
    return (
        <ScrollView style= {styles.container}>
            {/* header starts */}
            <View style={styles.header}>
                <Text style={styles.heading}>
                    Explore Page
                </Text>
            </View>
            {/* header ends */}

             {/* cards start */}
             <View style={styles.cardsWrapper}>
        <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
        </View>
        <View style={styles.cardInfo}>
            
            <View style={{
            flexDirection:'row',
            justifyContent:'space-between'
             }}>
            <View>
            <Text style={styles.cardTitle}>Moeed</Text>
            
            <Text style={styles.cardDetails}>
              this place is the best
            </Text>
            </View>

            <View>
                <Pressable
                onPress={
                    ()=> 
                    navigation.navigate('Comments')
                  }>
                <Icon name="arrow-down-drop-circle" color="indianred" size={20}/>
                
                </Pressable>
            </View>
            </View>

            <View style={styles.comment}> 
            <Text style={styles.cardTitle}>
              Ahsan
            </Text>
            <Text style={styles.cardDetails}>
              yup you'r right
            </Text>
            
            </View>

            
          </View>
         
        </View>
        </View>
        {/* card ends here */}
        
        {/* examples */}
        <View style={styles.cardsWrapper}>
        <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
        </View>
        <View style={styles.cardInfo}>
            
            <View style={{
            flexDirection:'row',
            justifyContent:'space-between'
             }}>
            <View>
            <Text style={styles.cardTitle}>Moeed</Text>
            
            <Text style={styles.cardDetails}>
              this place is the best
            </Text>
            </View>

            <View>
                <Pressable
                onPress={
                    ()=> 
                    navigation.navigate('Comments')
                  }>
                <Icon name="arrow-down-drop-circle" color="indianred" size={20}/>
                
                </Pressable>
            </View>
            </View>

            <View style={styles.comment}> 
            <Text style={styles.cardTitle}>
              Ahsan
            </Text>
            <Text style={styles.cardDetails}>
              yup you'r right
            </Text>
            
            </View>
          </View>
         
        </View>
        </View>

        {/* examples ends */}
        <View style={styles.cardsWrapper}>
        <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
        </View>
        <View style={styles.cardInfo}>
            
            <View style={{
            flexDirection:'row',
            justifyContent:'space-between'
             }}>
            <View>
            <Text style={styles.cardTitle}>Moeed</Text>
            
            <Text style={styles.cardDetails}>
              this place is the best
            </Text>
            </View>

            <View>
                <Pressable
                onPress={
                    ()=> 
                    navigation.navigate('Comments')
                  }>
                <Icon name="arrow-down-drop-circle" color="indianred" size={20}/>
                
                </Pressable>
            </View>
            </View>

            <View style={styles.comment}> 
            <Text style={styles.cardTitle}>
              Ahsan
            </Text>
            <Text style={styles.cardDetails}>
              yup you'r right
            </Text>
            
            </View>
          </View>
         
        </View>
        </View>


{/* last example ends */}

        </ScrollView>
    )
}

export default Explore
