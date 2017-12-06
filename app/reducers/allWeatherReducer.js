const initialState = {
  allWeather: []
}; 

function allWeatherReducer(state = initialState, action) {
  let allWeather = [];

  switch (action.type) {

    case 'LOAD_LOCAL_ALL_WEATHER_DATA':

      return Object.assign({}, state, {
        allWeather: action.payload.allWeather
      });

    case 'ADD_CITY_SUCCESS':
      allWeather = state.allWeather.map(item => item);

      debugger;

      allWeather[allWeather.length] = action.payload.weather;
      localStorage.setItem('allWeather', JSON.stringify(allWeather));

      return Object.assign({}, state, {
        allWeather: allWeather
      });

    case 'UPDATE_CITYS_SUCCESS':
      allWeather = action.payload.weather;

      localStorage.setItem('allWeather', JSON.stringify(allWeather));

      return Object.assign({}, state, {
        allWeather: allWeather
      });

    case 'DELETE_CITY':
      allWeather = state.allWeather.map(item => item);
      
      let indexToDelete = allWeather.map( item => item.name).indexOf(action.payload.cityName);
      
      allWeather.splice(indexToDelete, 1);
      localStorage.setItem('allWeather', JSON.stringify(allWeather));

      return Object.assign({}, state, {
        allWeather: allWeather
      });

    default:
      return state;
  }
}

module.exports = allWeatherReducer;
