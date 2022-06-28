import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export async function login(body: any) {
  const { data } = await axiosInstance.post('login', body);

  return data;
}

export async function getExample(params = {}) {
  const { data } = await axiosInstance.get('example', { params });

  return data;
}
