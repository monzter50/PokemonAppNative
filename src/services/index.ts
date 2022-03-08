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
          return reject(defaultErr);
        }
        return response.json();
      })
      .then(result => {
        resolve(result?.results);
      })
      .catch(error => {
        return reject(error.response);
      })
      .finally(() => {});
  });
}
