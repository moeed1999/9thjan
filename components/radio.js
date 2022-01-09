import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const RadioButton = () => {
  const [checked, setChecked] = useState(0);
  var val = ['User', 'Restaurant'];
  return (
    <View>
      <View style={styles.btn}>
        {val.map((val, key) => {
          return (
            <View key={val}>
              {checked == key ? (
                <TouchableOpacity style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require('./loginscreen/checked.png')}
                  />
                  <Text>{val}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setChecked(key);
                  }}
                  style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require('./loginscreen/unchecked.png')}
                  />
                  <Text>{val}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
      {/* <Text>{val[checked]}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
  },
  img: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RadioButton;