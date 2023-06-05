import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Buttons = () => {
  return (
    <View style={styles.btnContainerStyle}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={{ fontSize: 30 }}>Work</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={{ fontSize: 30 }}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'orangered',
    borderRadius: 10,
    margin: 10,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 40,
    bottom: 10,
  },
  btnContainerStyle: {
    flexDirection: 'row',
  },
});

export default Buttons;
