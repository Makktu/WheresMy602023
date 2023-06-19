import axios from 'axios';

export default function (lat, lon) {
  let location;
  axios
    .get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`
    )
    .then((res) => {
      console.log(res.data.address.road + ', ' + res.data.address.suburb);
      location = res.data.address.road + ', ' + res.data.address.suburb;
    });
  return location;
}
