import axios from 'axios';

const findBusLocation = async (lat, lon) => {
  const res = await axios.get(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`
  );
  // .then((res) => {
  //   return res.data.address.road + ', ' + res.data.address.suburb;
  // });
  console.log(res.data);

  return res.data.address.road + ', ' + res.data.address.suburb;
};

export default findBusLocation;
