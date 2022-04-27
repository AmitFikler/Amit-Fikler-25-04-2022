function DailyWeather({ daily }) {
  const dailyIcon =
    ('' + daily.WeatherIcon).length === 1
      ? '0' + daily.WeatherIcon
      : daily.WeatherIcon;
  return (
    <div className='weather-d'>
      <div className='weather-info-d'>
        <h2>Right Now:</h2>
        <div className='temp-d'>
          <h2>
            {daily.Temperature.Metric.Value}
            {daily.Temperature.Metric.Unit}
          </h2>
          <img
            src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${dailyIcon}-s.png`}
            alt='weather icon'
          />
          <p>{daily.WeatherText}</p>
        </div>
      </div>
    </div>
  );
}

export default DailyWeather;
