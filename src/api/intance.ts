import axios from 'axios';

export const instance = axios.create({
  baseURL: '/api',
});

export const oauthInstance = axios.create({
  baseURL: '/oauth2',
});
