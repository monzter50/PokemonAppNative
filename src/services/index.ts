import {configure} from './settings';
import {OptionsProps} from '../types';
export function get(
  options: OptionsProps,
  defaultErr = 'Error in request get',
): Promise<any> {
  return new Promise(function (resolve, reject) {
    const {endpoint, ..._arguments} = options;
    configure({
      method: 'GET',
      endpoint: endpoint,
      ..._arguments,
    })
      .then(response => {
        if (response.status !== 200) {
          return reject({defaultErr, status: response.status});
        }
        return response.json();
      })
      .then(result => {
        let response = result;
        if (response.results) {
          response = response.results;
        }
        resolve({data: response, count: result?.count || 0});
      })
      .catch(error => {
        return reject(error.response);
      })
      .finally(() => {});
  });
}
