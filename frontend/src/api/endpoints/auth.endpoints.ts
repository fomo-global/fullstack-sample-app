import { baseApi } from '../baseApi';

// Типы для запроса и ответа
export interface TelegramAuthRequest {
  initData: string;
}

// Тип ответа соответствует тому, что возвращает бэкенд
export interface TelegramAuthResponse {
  id: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  photo_url?: string;
}

// Endpoint для авторизации через Telegram
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Авторизация через Telegram initData
    telegramAuth: builder.mutation<TelegramAuthResponse, TelegramAuthRequest>({
      query: (body) => ({
        url: '/api/telegram',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

// Экспортируем хуки для использования в компонентах
export const { useTelegramAuthMutation } = authApi;

