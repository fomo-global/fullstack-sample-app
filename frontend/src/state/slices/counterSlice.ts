import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    reset() {
      return initialState;
    },
  },
});

export const { increment, reset } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
