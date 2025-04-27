import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// import { userCounter } from '../features/counter/counterSlice';
import {jodoe} from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: jodoe
  }
});



