import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ProductsSlice from './ProductsSlice';

export interface LoginType {
  email: string;
  password: string;
  checked: boolean;
  id?: number;
}

const initialState: LoginType[] = [];

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<LoginType>) => {
      const nextId = state.length + 1;
      state.push({ ...action.payload, id: nextId });
      return state;
    },
  },
});

export const { addUser } = loginSlice.actions;
export default loginSlice.reducer;
