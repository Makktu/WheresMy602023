import getBuses from './api';
import getLocation from './addressApi';

let parseString = require('react-native-xml2js').parseString;

let theLocation;

let lat, lon;

const reachOut = async (lat, lon) => {
  try {
    const location = await getLocation(lat, lon);
    console.log('getbuslocation - ', location);
    return location;
  } catch (err) {
    console.log('>>>>', err);
  }
};

const searchBuses = async (travellingDirection = 'OUTBOUND') => {
  console.log('DIRECTION:', travellingDirection);
  try {
    const response = await getBuses.get();
    parseString(response.data, function (err, result) {
      let loopAmount =
        result.Siri.ServiceDelivery[0].VehicleMonitoringDelivery[0]
          .VehicleActivity.length;
      console.log('ARRAY LENGTH:', loopAmount);
      let thisBus;
      for (let a = 0; a < loopAmount - 1; a++) {
        // console.log(
        //   a,
        //   result.Siri.ServiceDelivery[0].VehicleMonitoringDelivery[0]
        //     .VehicleActivity[a].MonitoredVehicleJourney[0].DirectionRef,
        //   result.Siri.ServiceDelivery[0].VehicleMonitoringDelivery[0]
        //     .VehicleActivity[a].MonitoredVehicleJourney[0]
        // );
        if (
          result.Siri.ServiceDelivery[0].VehicleMonitoringDelivery[0]
            .VehicleActivity[a].MonitoredVehicleJourney[0].DirectionRef ==
            travellingDirection &&
          result.Siri.ServiceDelivery[0].VehicleMonitoringDelivery[0]
            .VehicleActivity[a].MonitoredVehicleJourney[0].VehicleLocation[0]
            .Latitude < 52.4072268987048
        ) {
          thisBus = a;
          break;
        }
        if (
          result.Siri.ServiceDelivery[0].VehicleMonitoringDelivery[0]
            .VehicleActivity[a].MonitoredVehicleJourney[0].DirectionRef ==
            'OUTBOUND' &&
          result.Siri.ServiceDelivery[0].VehicleMonitoringDelivery[0]
            .VehicleActivity[a].MonitoredVehicleJourney[0].OriginName[0] ==
            'Arena Shopping Park'
        ) {
          thisBus = a;
          break;
        }
        console.log(
          '>>>>...',
          result.Siri.ServiceDelivery[0].VehicleMonitoringDelivery[0]
            .VehicleActivity[a].MonitoredVehicleJourney[0].OriginName[0]
        );
      }
      console.log('thisbus:', thisBus);
      if (!thisBus) return null;
      lat =
        +result.Siri.ServiceDelivery[0].VehicleMonitoringDelivery[0]
          .VehicleActivity[thisBus].MonitoredVehicleJourney[0]
          .VehicleLocation[0].Latitude;
      lon =
        +result.Siri.ServiceDelivery[0].VehicleMonitoringDelivery[0]
          .VehicleActivity[thisBus].MonitoredVehicleJourney[0]
          .VehicleLocation[0].Longitude;
    });
    console.log(lat, lon);
    theLocation = reachOut(lat, lon);
    return theLocation;
  } catch (err) {
    console.log('💥', err);
  }
};

export default searchBuses;
