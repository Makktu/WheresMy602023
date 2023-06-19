import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Buttons = ({ updateLocation }) => {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <>
      <View style={styles.btnContainerStyle}>
        <TouchableOpacity
          onPress={() => {
            updateLocation('INBOUND');
          }}
          style={styles.workButtonStyle}
        >
          <Text style={styles.textStyle}>To Hospital</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            updateLocation('OUTBOUND');
          }}
          style={[styles.workButtonStyle, { backgroundColor: 'cyan' }]}
        >
          <Text style={styles.textStyle}>To Willenhall</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  workButtonStyle: {
    height: 100,
    width: 180,
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
  locationStyle: {
    color: 'orangered',
  },
});

export default Buttons;
