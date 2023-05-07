import { createSlice } from '@reduxjs/toolkit';
import { Counter } from './type';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state: Counter) => {
      state.value += 1;
    },
    decrement: (state: Counter) => {
      state.value -= 1;
    },
    incrementByAmount: (state: Counter, action: any) => {
      state.value += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

