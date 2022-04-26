import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../reducers/weatherSlice';
import thunkMiddleWare from 'redux-thunk';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleWare),
});
