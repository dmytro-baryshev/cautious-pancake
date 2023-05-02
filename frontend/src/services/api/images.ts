import axios from 'axios';

axios.defaults.baseURL = '/images';

export const fetchImages = async () => {
  const { data } = await axios('/');
  return data;
};
