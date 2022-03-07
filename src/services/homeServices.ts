import {get} from './index';
import {JSONObject} from '../types';
function getPokemons(params: JSONObject = {}) {
  return get({
    endpoint: 'pokemon/',
    data: {},
    params,
  });
}

function getInformation(url: string = '') {
  return get({
    endpoint: '',
    data: {},
    url,
  });
}

export default {
  getPokemons,
  getInformation,
};
