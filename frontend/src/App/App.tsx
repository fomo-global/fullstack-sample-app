import { useAppSelector, useAppDispatch } from "../state/hooks";
import { increment } from "../state/slices/counterSlice";

export const App = () => {
  const value = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const initData = window.Telegram?.WebApp.initData;
  console.log(initData)
  
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
};
