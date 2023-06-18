import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import getBuses from '../api/api';
// import getLocation from '../api/addressApi';

let parseString = require('react-native-xml2js').parseString;

function printLoc(lat, lon) {
  let places;
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      places = JSON.parse(this.responseText);
      console.log(places);
      if (places.address.road) {
        locationOfBus = `${places.address.road}, ${places.address.suburb}`;
      } else if (places.address.suburb) {
        locationOfBus = `${places.address.suburb}`;
      } else {
        locationOfBus = null;
      }

      if (locationOfBus) {
        if (locationOfBus.length > 29) {
          locationOfBus = locationOfBus.substring(0, 29);
        }
        console.log(`${locationOfBus}`);
      }
    }
  };
  xhttp.open(
    'GET',
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`,
    true
  );
  xhttp.send();
}

const Buttons = () => {
  const [errorMessage, setErrorMessage] = useState('');
  // *

  const searchBuses = async (travellingDirection) => {
    if (!travellingDirection) {
      return;
    }
    console.log(travellingDirection);
    try {
      const response = await getBuses.get();
      // console.log(response.data);
      parseString(response.data, function (err, result) {
        let lat =
          +result.Siri.ServiceDelivery[0].VehicleMonitoringDelivery[0]
            .VehicleActivity[0].MonitoredVehicleJourney[0].VehicleLocation[0]
            .Latitude;
        let lon =
          +result.Siri.ServiceDelivery[0].VehicleMonitoringDelivery[0]
            .VehicleActivity[0].MonitoredVehicleJourney[0].VehicleLocation[0]
            .Longitude;
        console.log(lat, lon);
        printLoc(lat, lon);
        // console.log(result.Siri.ServiceDelivery[0].ResponseTimestamp);
        // console.log(
        //   result.Siri.ServiceDelivery[0].VehicleMonitoringDelivery[0]
        //     .VehicleActivity[0].MonitoredVehicleJourney[0].DirectionRef
        // );
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
          searchBuses('INBOUND');
        }}
        style={styles.workButtonStyle}
      >
        <Text style={styles.textStyle}>To Work</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          searchBuses('OUTBOUND');
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
