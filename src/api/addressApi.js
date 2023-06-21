import axios from 'axios';

const findBusLocation = async (lat, lon) => {
  const res = await axios.get(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`
  );
  // ? console.log(res.data);
  let result = '';
  if (res.data.address.road) {
    result += res.data.address.road + ', ';
  }
  if (res.data.address.suburb) {
    result += res.data.address.suburb;
  }
  return result;
};

export default findBusLocation;
