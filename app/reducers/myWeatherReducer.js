const initialState = {
  myWeather: ''
}; 

function myWeatherReducer(state = initialState, action) {
  switch (action.type) {

    case 'LOAD_LOCAL_MY_WEATHER_DATA':
      return Object.assign({}, state, {
        myWheather: action.payload.myWheather
      });
          
   case 'LOCATION_WEATHER_SUCCESS':
      console.log('From LOCATION_WEATHER_SUCCESS ----> ', action.payload);
      localStorage.setItem('myWeather', JSON.stringify(action.payload));

      return Object.assign({}, state, {
        myWeather: action.payload
      });
      
    default:
      return state;
  }
}

module.exports = myWeatherReducer;
