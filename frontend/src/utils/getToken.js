import axios from 'axios';

const getToken = async () => {
  const url = '/oauth/token';
  const query =
    '?' +
    'grant_type=client_credentials' +
    '&' +
    'client_id=' +
    '1cfa80163094e499e10108bfa2adb76409f5daec2084c00ce81a9c3a38416deb' +
    '&' +
    'client_secret=' +
    '1a3c7803cac7d2019618214318b6000842ce4983f37ac958407b5b3d50817422' +
    '&' +
    'redirect_uri=' +
    'http://betti.kr:9003/' +
    '&' +
    'scope=public';
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Mobile': 'false',
      'response-Type': 'text',
    },
  };
  try {
    // const fetchToken = await fetch(url + query, config);
    const fetchToken = await axios.post(url + query, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Mobile': 'false',
        'response-Type': 'text',
      },
    });
    const response = await fetchToken.json();
    // console.log(fetchToken);
    // console.log(response);

    return response;
  } catch (e) {
    // alert('getToken failed');
    return e;
  }
};

export default getToken;
