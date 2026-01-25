import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import { increment } from "../state/slices/counterSlice";
import { useTelegramAuthMutation } from "../api/endpoints/auth.endpoints";

export const App = () => {
  const value = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  
  // RTK Query хук для авторизации
  const [telegramAuth, { data, isLoading, error }] = useTelegramAuthMutation();
  
  const initData = window.Telegram?.WebApp.initData;
  console.log(initData)

  useEffect(() => {
    if (!window.Telegram?.WebApp?.initData) return;

    // Выполняем запрос через RTK Query
    telegramAuth({
      initData: window.Telegram.WebApp.initData,
    })
      .unwrap()
      .then((response) => {
        console.log("Authorized user:", response);
        // Можно сохранить данные пользователя в Redux store
      })
      .catch((err) => {
        console.error("Auth error:", err);
      });
  }, [telegramAuth]);
  
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      
      {isLoading && <p>Загрузка...</p>}
      {error && <p>Ошибка авторизации</p>}
      {data && (
        <div>
          <p>Пользователь: {data.first_name} {data.last_name}</p>
          <p>Username: {data.username || 'не указан'}</p>
        </div>
      )}
    </div>
  )
};
