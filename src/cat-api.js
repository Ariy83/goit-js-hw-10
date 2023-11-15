import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_lkLcnlkMV7otiB4qZPOrW3QlwL7BDqdsWR4rKHqw4y2tltnJOakPXbxreE5g6Nas';

export function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com';
  const END_POINT = '/v1/breeds';
  const url = BASE_URL + END_POINT;

  return axios
    .get(url)
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
}

export function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com';
  const END_POINT = '/v1/images/search';
  const PARAMS = `?breed_ids=${breedId}`;
  const url = BASE_URL + END_POINT + PARAMS;

  return axios
    .get(url)
    .then(res => res.data[0])
    .catch(err => {
      console.log(err);
    });
}
