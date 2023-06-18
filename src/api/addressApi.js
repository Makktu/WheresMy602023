import axios from 'axios';

export default axios.create({
  baseURL: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`,
  params: {
    lat: lat,
    lon: lon,
  },
  //
});
