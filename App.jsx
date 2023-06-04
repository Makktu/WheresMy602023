import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <HomeScreen />
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
});
