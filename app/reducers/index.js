const initialState = {
  isPositionRenewed: false,
  myPosition: '',
  myWeather: '',
  allWeather: []
}; 

function mainReducer(state = initialState, action) {
  let currentPosition;
  let allWeather = [];

  switch (action.type) {

    case 'LOAD_LOCAL_DATA':

      return Object.assign({}, state, {
        myPosition: action.payload.myPosition,
        myWheather: action.payload.myWheather,
        allWeather: action.payload.allWeather
      });

    case 'LOCATION_CHECKED_SUCCESS':
      currentPosition = {
        lon: action.payload.coords.longitude,
        lat: action.payload.coords.latitude
      }
      localStorage.setItem('myPosition', JSON.stringify(currentPosition));

      return Object.assign({}, state, {
        isPositionRenewed: true,
        myPosition: currentPosition
      });

    case 'LOCATION_WEATHER_SUCCESS':
      console.log('From LOCATION_WEATHER_SUCCESS ----> ', action.payload);
      localStorage.setItem('myWeather', JSON.stringify(action.payload));

      return Object.assign({}, state, {
        myWeather: action.payload
      });

    case 'ADD_CITY_SUCCESS':
      console.log('From LOCATION_WEATHER_SUCCESS ----> ', action.payload.weather);
      allWeather = state.allWeather.map(item => item);

      allWeather[allWeather.length] = action.payload.weather;
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

    case 'LOCATION_CHECKED_ERROR':
    case 'ADD_CITY_ERROR':
      console.log('From LOCATION_CHECKED_ERROR ----> ', action.payload);

      return Object.assign({}, state, {
      });
      
    default:
      return state;
  }
}

module.exports = mainReducer;
