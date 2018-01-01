// @flow

// Place your API_KEY here
// You can get it from: 
//  https://docs.google.com/forms/d/e/1FAIpQLSfkmEBqH76HLMMiCC-GPPnhcvHC9aJS86E32dOd0Z8MpY2rvQ/viewform
export const API_KEY = '';

export const BASE_URL = 'https://api.harvardartmuseums.org/object';

const SAMPLE_QUERY = `http://api.harvardartmuseums.org/object?apikey=${API_KEY}&fields=*&sort=random&size=25&q=*:*`;