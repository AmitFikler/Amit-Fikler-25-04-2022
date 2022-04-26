import SearchCity from './SearchCity';
import '../styles/mainScreen.css';
import DailyWeather from './DailyWeather';
import WeeklyWeather from './WeeklyWeather';
import { useSelector } from 'react-redux';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';
function MainScreen() {
  const weather = useSelector(({ weather }) => weather);
  console.log(weather);
  return (
    <>
      <SearchCity />
      {weather.dailyWeather && weather.weeklyWeather && (
        <div className='main'>
          <div style={{ display: 'flex' }}>
            <h1>{weather.city}</h1>
            <span>
              {weather.favorites.includes(weather.city) ? (
                <IconButton aria-label='favorite' style={{ color: 'yellow' }}>
                  <StarIcon />
                </IconButton>
              ) : (
                <IconButton aria-label='unfavorite' style={{ color: 'yellow' }}>
                  <StarBorderIcon />
                </IconButton>
              )}
            </span>
          </div>
          <DailyWeather />
          <div className='forecast'>
            <WeeklyWeather />
          </div>
        </div>
      )}
    </>
  );
}

export default MainScreen;
