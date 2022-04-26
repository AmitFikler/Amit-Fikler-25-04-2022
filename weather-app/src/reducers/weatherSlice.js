import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dailyWeather: {},
  weeklyWeather: {},
  autocomplete: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    initialData: (state, { payload }) => {
      return [...payload.data];
    },
    changeDaily: (state, { payload }) => {
      return { ...state, dailyWeather: payload.dailyWeather };
    },
    changeWeekly: (state, { payload }) => {
      return { ...state, weeklyWeather: payload.weeklyWeather };
    },
    completeAuto: (state, { payload }) => {
      return { ...state, autocomplete: payload.auto };
    },
  },
});

// Export the actions
export const { initialData, changeDaily, changeWeekly, completeAuto } =
  weatherSlice.actions;

// Export the reducer
export default weatherSlice.reducer;
