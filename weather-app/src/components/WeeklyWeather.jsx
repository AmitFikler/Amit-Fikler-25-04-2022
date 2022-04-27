import moment from 'moment';
import { useSelector } from 'react-redux';

function WeeklyWeather() {
  const weather = useSelector(({ weather }) => weather);

  return (
    <>
      {weather.weeklyWeather.DailyForecasts.map((day, index) => {
        const dailyIcon =
          ('' + day.Day.Icon).length === 1 ? '0' + day.Day.Icon : day.Day.Icon;
        return (
          <div className='weather-w'>
            <div className='weather-info-w'>
              <p>{moment(day.Date).format('dddd, MMMM Do YYYY')}</p>
              <div className='temp'>
                <h2>
                  {day.Temperature.Maximum.Value}
                  {day.Temperature.Maximum.Unit} / {'  '}
                  {day.Temperature.Minimum.Value}
                  {day.Temperature.Minimum.Unit}
                </h2>
                <img
                  src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${dailyIcon}-s.png`}
                  alt='weather icon'
                />
                <p className='icon-phrase'>{day.Day.IconPhrase}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default WeeklyWeather;
