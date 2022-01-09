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
    Pressable,
    
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

function Comments({navigation}) {
    return (
        <ScrollView style= {styles.container}>
            {/* header starts */}
            <View 
            
            style={styles.header}>
                <Text style={styles.heading}>
                    Comments
                </Text>
            </View>
            {/* header ends */}

             {/* image start */}
             <View style={styles.Image}>
            <Image
              source={require('../../assets/images/bgimg2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
            </View>
            {/* image end */}

            {/* comments start */}
            <View style={styles.Comments}>
            <Text style={styles.commentTitle}>
              Moeed
            </Text>
            <Text style={styles.commentSubtitle}>
              amazing taste.. you should try it
            </Text>
 {/* examples */}
       
 <Text style={styles.commentTitle}>
              Sadam
            </Text>
            <Text style={styles.commentSubtitle}>
              I have money but no time
            </Text>

            <Text style={styles.commentTitle}>
              Usama
            </Text>
            <Text style={styles.commentSubtitle}>
              i have money but i dont like ice cream
            </Text>

            <Text style={styles.commentTitle}>
              Ahsan
            </Text>
            <Text style={styles.commentSubtitle}>
              i have money but i also dont have money
            </Text>

            <Text style={styles.commentTitle}>
              fateh
            </Text>
            <Text style={styles.commentSubtitle}>
              wait.. you guys have money?
            </Text>
            <Text style={styles.commentTitle}>
              ali abdullah
            </Text>
            <Text style={styles.commentSubtitle}>
              i have also tried this
            </Text>
            <Text style={styles.commentTitle}>
              usama
            </Text>
            <Text style={styles.commentSubtitle}>
              ok
            </Text>



 {/* examples ends */}


            </View>
       
        {/* comments ends here */}
        
        
        </ScrollView>
    )
}

export default Comments
