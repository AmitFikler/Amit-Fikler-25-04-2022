import { Autocomplete, Button, FormControl, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  completeAuto,
  changeDaily,
  changeWeekly,
} from '../reducers/weatherSlice';

const { REACT_APP_API_KEY } = process.env;
function SearchCity() {
  const weather = useSelector(({ weather }) => weather);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleTyping = () => {
    return (dispatch) => {
      axios
        .get(
          `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${REACT_APP_API_KEY}&q=${search}`
        )
        .then(({ data }) => {
          dispatch(completeAuto({ auto: data }));
        })
        .catch((error) => {
          // TODO - Add like failure action and dispatch
          console.log(error);
        });
    };
  };
  const handleSearch = () => {
    return async (dispatch) => {
      try {
        const daily = await axios.get(
          `http://dataservice.accuweather.com/currentconditions/v1/${weather.autocomplete[0].Key}?apikey=${REACT_APP_API_KEY}`
        );
        const weekly = await axios.get(
          `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${weather.autocomplete[0].Key}?apikey=${REACT_APP_API_KEY}`
        );
        dispatch(changeDaily({ dailyWeather: daily.data, city: search }));
        dispatch(changeWeekly({ weeklyWeather: weekly.data }));
      } catch (error) {
        console.log(error);
      }
    };
  };
  return (
    <div className='search-city'>
      <FormControl variant='standard' className='search-form'>
        <Autocomplete
          disablePortal
          id='auto-complete'
          onChange={(e, value) => {
            setSearch(value);
          }}
          options={weather.autocomplete?.map((item) => item.LocalizedName)}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Search a city..'
              onKeyUp={(e) => dispatch(handleTyping(e))}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}
        />
        <Button
          variant='contained'
          endIcon={<SearchIcon />}
          onClick={() => dispatch(handleSearch())}>
          Search
        </Button>
      </FormControl>
    </div>
  );
}

export default SearchCity;
