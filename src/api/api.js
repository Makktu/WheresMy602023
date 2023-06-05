import axios from 'axios';

export default axios.create({
  baseURL:
    'https://data.bus-data.dft.gov.uk/api/v1/datafeed?boundingBox=-1.42625%2C%2052.36964%2C%20-1.59502%2C%2052.45649&operatorRef=SCNH&lineRef=60&api_key=93b0e2fee16e881a1ccd4a49736d71c44b376744',
  //
});

// headers: {
//     Authorization:
//       'Bearer pmNa_25iPGdkTHqTcC6TRphKi0m8qODsxpp6exZ7a4mgbDD3Qv-4tdwCSOUSc0YRTLU_0Eiehm9H3Y8WbshJKz_jkz_3zg25muOg8S7aN7YaaDj29U4iQEDVBdBbZHYx',
//   },
