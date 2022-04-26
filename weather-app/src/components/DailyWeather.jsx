import { useSelector } from 'react-redux';
import { daily } from '../mockData';

function DailyWeather() {
  const weather = useSelector(({ weather }) => weather);

  const dailyIcon =
    ('' + weather.dailyWeather.WeatherIcon).length === 1
      ? '0' + weather.dailyWeather.WeatherIcon
      : weather.dailyWeather.WeatherIcon;
  console.log(weather.dailyWeather.DailyWeather);
  return (
    <div className='weather-d'>
      <div className='weather-info-d'>
        <h2>Right Now:</h2>
        <div className='temp-d'>
          <h2>
            {weather.dailyWeather.Temperature.Metric.Value}
            {weather.dailyWeather.Temperature.Metric.Unit}
          </h2>
          <img
            src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${dailyIcon}-s.png`}
            alt='weather icon'
          />
          <p>{weather.dailyWeather.WeatherText}</p>
        </div>
      </div>
    </div>
  );
}

export default DailyWeather;
