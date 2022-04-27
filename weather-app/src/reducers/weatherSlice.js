import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dailyWeather: undefined,
  weeklyWeather: undefined,
  autocomplete: [],
  favorites: [],
  city: '',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    initialData: (state, { payload }) => {
      return [...payload.data];
    },
    changeDaily: (state, { payload }) => {
      return {
        ...state,
        dailyWeather: payload.dailyWeather[0],
        city: payload.city,
      };
    },
    changeWeekly: (state, { payload }) => {
      return { ...state, weeklyWeather: payload.weeklyWeather };
    },
    completeAuto: (state, { payload }) => {
      return { ...state, autocomplete: payload.auto };
    },
    handleFavorite: (state, { payload }) => {
      if (payload.favorite) {
        return {
          ...state,
          favorites: state.favorites.filter(
            (item) => item.city !== payload.city
          ),
        };
      }
      return {
        ...state,
        favorites: [
          ...state.favorites,
          { city: payload.city, cityId: payload.cityId },
        ],
      };
    },
  },
});

// Export the actions
export const {
  initialData,
  changeDaily,
  changeWeekly,
  completeAuto,
  handleFavorite,
} = weatherSlice.actions;

// Export the reducer
export default weatherSlice.reducer;
