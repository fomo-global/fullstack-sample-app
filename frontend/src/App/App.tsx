import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import { increment } from "../state/slices/counterSlice";

export const App = () => {
  const value = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const [state, setState] = useState('')
  const initData = window.Telegram?.WebApp.initData;
  console.log(initData)

  useEffect(() => {
  if (!window.Telegram?.WebApp?.initData) return;

  fetch("https://3cd0ed61b56d.ngrok-free.app/api/telegram", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      initData: window.Telegram.WebApp.initData,
    }),
  })
    .then(r => {
      if (!r.ok) throw new Error("Auth failed");
      return r.json();
    })
    .then(user => {
      console.log("Authorized user:", user);
      setState(user)
    })
    .catch(console.error);
  }, []);
  
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      {/* <div>{state}</div> */}
    </div>
  )
};
