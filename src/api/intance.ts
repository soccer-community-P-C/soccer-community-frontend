import axios from 'axios';

export const instance = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
  },
});
