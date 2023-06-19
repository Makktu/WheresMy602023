import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Buttons from './src/components/Buttons';
import TheImage from './src/components/TheImage';
import DisplayLocation from './src/components/DisplayLocation';
import getBusLocation from './src/api/getBusLocation';

let parseString = require('react-native-xml2js').parseString;

export default function App() {
  const [busLocation, setBusLocation] = useState('');

  const updateLocation = async (travellingDirection) => {
    let theLocation = 'NOT YET?';
    try {
      theLocation = await getBusLocation(travellingDirection);
      console.log('App.jsx -', theLocation);
      setBusLocation(theLocation);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <HomeScreen />
        <TheImage />
        <DisplayLocation busLocation={busLocation} />
        <Buttons updateLocation={updateLocation} />
        {/* <AboutScreen style={{ marginTop: 100 }} /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#181717',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    margin: 100,
    borderRadius: 50,
  },
});
