const initialState = {
  isPositionRenewed: false,
  myPosition: '',
  myWheather: '',
  allWeather: ''
}; 

function mainReducer(state = initialState, action) {
  let currentPosition;

  switch (action.type) {

    case 'LOAD_LOCAL_DATA':
      return Object.assign({}, state, {
        myPosition: action.payload.myPosition,
        myWheather: action.payload.myWheather,
        allWeather: action.payload.allWeather
      });

    case 'ADD_CITY':
      console.log('From ADD_CITY ----> ', action.payload);

      return Object.assign({}, state, {
      });

    case 'LOCATION_CHECKED_SUCCESS':
      currentPosition = {
        lon: action.payload.coords.longitude,
        lat: action.payload.coords.latitude
      }

      return Object.assign({}, state, {
        isPositionRenewed: true,
        myPosition: currentPosition
      });

    case 'LOCATION_WEATHER_SUCCESS':
      console.log('From LOCATION_WEATHER_SUCCESS ----> ', action.payload);

      return Object.assign({}, state, {
        myWeather: action.payload
      });

    case 'ADD_CITY_SUCCESS':
      console.log('From LOCATION_WEATHER_SUCCESS ----> ', action.payload);

      return Object.assign({}, state
      );

    case 'LOCATION_CHECKED_ERROR':
    case 'ADD_CITY_ERROR':
      console.log('From LOCATION_CHECKED_ERROR ----> ', action.payload);

      return Object.assign({}, state, {
      });
    
    case 'ON_SMTH_HAPPENED':
      console.log('From ON_SMTH_HAPPENED ----> ', action.payload);

      return Object.assign({}, state, {
      });
      
    default:
      return state;
  }
}

module.exports = mainReducer;
