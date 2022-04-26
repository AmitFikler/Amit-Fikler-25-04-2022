import SearchCity from './SearchCity';
import '../styles/mainScreen.css';
import DailyWeather from './DailyWeather';
import WeeklyWeather from './WeeklyWeather';
import { useDispatch, useSelector } from 'react-redux';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';
import { handleFavorite } from '../reducers/weatherSlice';
function MainScreen() {
  const weather = useSelector(({ weather }) => weather);
  const dispatch = useDispatch();
  let cityId;
  if (weather.autocomplete.length) {
    cityId = weather.autocomplete[0].Key;
  }
  const handleStar = (favorite) => {
    return (dispatch) => {
      dispatch(handleFavorite({ city: weather.city, cityId, favorite }));
    };
  };

  return (
    <>
      <SearchCity />
      {weather.dailyWeather && weather.weeklyWeather && (
        <div className='main'>
          <div style={{ display: 'flex' }}>
            <h1>{weather.city}</h1>
            <span>
              {weather.favorites.some((fav) => fav.city === weather.city) ? (
                <IconButton
                  aria-label='favorite'
                  style={{ color: 'yellow' }}
                  onClick={() => dispatch(handleStar(true))}>
                  <StarIcon />
                </IconButton>
              ) : (
                <IconButton
                  aria-label='unfavorite'
                  style={{ color: 'yellow' }}
                  onClick={() => dispatch(handleStar(false))}>
                  <StarBorderIcon />
                </IconButton>
              )}
            </span>
          </div>
          <DailyWeather daily={weather.dailyWeather} />
          <div className='forecast'>
            <WeeklyWeather />
          </div>
        </div>
      )}
    </>
  );
}

export default MainScreen;
