//fetchData.js
import axios from 'axios';
import wrapPromise from './WrapPromise';

/**
 * Wrap Axios Request with the wrapPromise function
 * @param {string} url Url to fetch
 * @returns {Promise} A wrapped promise
 */
function fetchData(url: any) {
  const promise = axios.get(url).then(({data}) => data);
  console.log('fetchData')

  return wrapPromise(promise);
}

export default fetchData;