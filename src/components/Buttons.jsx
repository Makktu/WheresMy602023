import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import getBuses from '../api/api';
import { util } from 'util';

let parseString = require('react-native-xml2js').parseString;
var xml = '<root>Hello xml2js!</root>';

const Buttons = () => {
  const [errorMessage, setErrorMessage] = useState('');

  // *
  let travellingDirection = '';

  const searchBuses = async (travellingDirection) => {
    if (!travellingDirection) {
      return;
    }
    console.log(travellingDirection);
    try {
      const response = await getBuses.get();
      console.log(response.data);
      // parseString(response.data, function (err, result) {
      //   console.log(result.Siri.ServiceDelivery[0].ResponseTimestamp);
      //   console.log(
      //     result.Siri.ServiceDelivery[0].VehicleMonitoringDelivery[0]
      //       .VehicleActivity[0].MonitoredVehicleJourney[0].DirectionRef
      //   );
      // });
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
