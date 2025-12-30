import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// ✅ Хук для типизированного dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// ✅ Хук для типизированного selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector