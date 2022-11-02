import axios, { AxiosRequestConfig } from 'axios';

import { API_URL } from '../utils/constants';
import { Issue } from '../utils/types';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers = {
      ...config.headers,
      Cookie:
        '_octo=GH1.1.305303848.1666015424; logged_in=yes; dotcom_user=stickaround; color_mode=%7B%22color_mode%22%3A%22auto%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; preferred_color_mode=dark; tz=America%2FChicago',
    };
    return config;
  }
);

export const loadIssues = () => api.get<Issue[]>('');
