import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { changeDaily, changeWeekly } from '../reducers/weatherSlice';
import DailyWeather from './DailyWeather';
import '../styles/favorite.css';

function FavoriteScreen() {
  const weather = useSelector(({ weather }) => weather);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    weather.favorites.forEach((fav) => {
      axios
        .get(
          `https://dataservice.accuweather.com/currentconditions/v1/${fav.cityId}?apikey=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          console.log('in then');
          setFavorites((prev) => [
            ...prev,
            { data: res.data[0], city: fav.city, cityId: fav.cityId },
          ]);
        });
    });
  }, []);

  console.log(favorites);

  const handleClick = (cityId, city) => {
    return async (dispatch) => {
      try {
        const daily = await axios.get(
          `https://dataservice.accuweather.com/currentconditions/v1/${cityId}?apikey=${process.env.REACT_APP_API_KEY}`
        );
        const weekly = await axios.get(
          `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`
        );
        dispatch(changeDaily({ dailyWeather: daily.data, city }));
        dispatch(changeWeekly({ weeklyWeather: weekly.data }));
        navigate('/');
      } catch (error) {
        toast.error(error.message);
      }
    };
  };
  return (
    <div className='favorite-screen'>
      <div className='favorite-list'>
        {favorites.map((fav, i) => {
          return (
            <div
              key={i}
              onClick={() => dispatch(handleClick(fav.cityId, fav.city))}
              style={{ cursor: 'pointer' }}>
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
