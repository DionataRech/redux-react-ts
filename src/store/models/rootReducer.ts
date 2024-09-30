import { combineReducers } from '@reduxjs/toolkit';
import CounterSlice from './CounterSlice';
import CategoriesSlice from './CategoriesSlice';
import ProductsSlice from './ProductsSlice';
import LoginSlice from './LoginSlice';

export default combineReducers({
  counter: CounterSlice,
  categories: CategoriesSlice,
  products: ProductsSlice,
  login: LoginSlice,
});
