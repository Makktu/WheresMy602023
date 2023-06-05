import React from 'react';
import { Image, StyleSheet } from 'react-native';
import TheSixty from '../../img/the_60_bus.png';

const TheImage = () => {
  return <Image style={styles.imageStyle} source={TheSixty} />;
};

const styles = StyleSheet.create({
  imageStyle: {
    margin: 40,
    borderRadius: 50,
    width: '90%',
    height: '30%',
    resizeMode: 'stretch',
  },
});

export default TheImage;
