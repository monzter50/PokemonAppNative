import { baseUrl } from '@monster/constant';

export function configure({
  method = 'GET',
  endpoint = '',
  params = { limit: 10, offset: 0 },
  ...args
}: any) {
  // Opciones por defecto estan marcadas con un *
  let query = Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
  const replace = args.url !== undefined;
  const uri = replace ? args.url : `${baseUrl}${endpoint}?${query}`;
  return fetch(uri, {
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
