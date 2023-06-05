import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import Buttons from './src/components/Buttons';
import TheImage from './src/components/TheImage';
import AboutScreen from './src/components/AboutScreen';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <HomeScreen />
        <TheImage />
        <Buttons />
        <AboutScreen style={{ marginTop: 100 }} />
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
