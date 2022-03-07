import {baseUrl} from '../constant';

export function configure({method = 'GET', endpoint = '', ...args}) {
  // Opciones por defecto estan marcadas con un *
  return fetch(`${baseUrl}${endpoint}`, {
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
