import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DailyWeather from './DailyWeather';

function FavoriteScreen() {
  const weather = useSelector(({ weather }) => weather);
  const [favorites, setFavorites] = useState([]);
  console.log(weather.favorites);
  console.log(favorites);
  useEffect(() => {
    setFavorites([]);
    weather.favorites.forEach((fav) => {
      axios
        .get(
          `http://dataservice.accuweather.com/currentconditions/v1/${fav.cityId}?apikey=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          setFavorites((prev) => [
            ...prev,
            { data: res.data[0], city: fav.city },
          ]);
        });
    });
  }, []);
  return (
    <div className='favorite-screen'>
      <div className='favorite-list'>
        {favorites.map((fav) => {
          return (
            <div key={fav.city}>
              <h1>{fav.city}</h1>
              <DailyWeather daily={fav.data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FavoriteScreen;
