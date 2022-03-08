import {baseUrl} from '../constant';

export function configure({
  method = 'GET',
  endpoint = '',
  params = {limit: 10, offset: 0},
  ...args
}: any) {
  // Opciones por defecto estan marcadas con un *
  let query = Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
  return fetch(`${baseUrl}${endpoint}?${query}`, {
    method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    ...args,
  });
  // parses JSON response into native JavaScript objects
}
