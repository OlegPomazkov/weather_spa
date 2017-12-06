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
      console.log('From ADD_CITY_SUCCESS ----> ', action.payload.weather);
      allWeather = state.allWeather.map(item => item);

      debugger;

      allWeather[allWeather.length] = action.payload.weather;
      localStorage.setItem('allWeather', JSON.stringify(allWeather));

      return Object.assign({}, state, {
        allWeather: allWeather
      });

    case 'UPDATE_CITYS_SUCCESS':
      console.log('From UPDATE_CITYS_SUCCESS ----> ', action.payload.weather);
      allWeather = action.payload.weather;

      localStorage.setItem('allWeather', JSON.stringify(allWeather));

      return Object.assign({}, state, {
        allWeather: allWeather
      });

    case 'DELETE_CITY':
      console.log('From LOCATION_WEATHER_SUCCESS ----> ', action.payload);
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
