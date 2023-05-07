import { createSlice } from '@reduxjs/toolkit';
import { Auth } from './type';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authenticated: false,
    token: '',
    userName: 'test',
  },
  reducers: {
    login: (state: Auth,action: any) => {
      return {
        ...state,
        ...action.payload //渡されたデータでステートを上書きする
      }
    },
    logout: (state: Auth,action: any) => {
      return {
        authenticated: true,
        token: '',
        userName: '',
      }
    }
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;


