import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import getBuses from '../api/api';

let parseString = require('react-native-xml2js').parseString;

const Buttons = () => {
  const [errorMessage, setErrorMessage] = useState('');
  let json;
  // *
  let travellingDirection = '';
  const searchBuses = async (travellingDirection) => {
    if (!travellingDirection) {
      return;
    }
    try {
      const response = await getBuses.get();
      parseString(response.data, function (err, result) {
        json = JSON.stringify(result);
        console.log(json);
      });
      setErrorMessage('');
    } catch (err) {
      setErrorMessage(err);
      console.log('💥', err);
    }
  };

  // *_________________________________________________

  return (
    <View style={styles.btnContainerStyle}>
      <TouchableOpacity
        onPress={() => {
          travellingDirection = 'INBOUND';
          searchBuses(travellingDirection);
        }}
        style={styles.workButtonStyle}
      >
        <Text style={styles.textStyle}>To Work</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          travellingDirection = 'OUTBOUND';
          searchBuses(travellingDirection);
        }}
        style={[styles.workButtonStyle, { backgroundColor: 'cyan' }]}
      >
        <Text style={styles.textStyle}>To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  workButtonStyle: {
    height: 100,
    width: 150,
    backgroundColor: 'orange',
    borderRadius: 10,
    margin: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainerStyle: {
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default Buttons;
