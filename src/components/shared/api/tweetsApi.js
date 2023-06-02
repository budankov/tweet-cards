import axios from 'axios';

axios.defaults.baseURL = 'https://6478c3f3362560649a2e6bb5.mockapi.io';

export const getAllUsers = async () => {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
