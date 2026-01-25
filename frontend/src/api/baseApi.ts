import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Базовый URL API (можно вынести в конфиг)
const API_BASE_URL = 'https://3cd0ed61b56d.ngrok-free.app';

// Базовый API с RTK Query
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: () => ({}),
});

