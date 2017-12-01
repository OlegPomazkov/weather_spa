const initialState = {
  isPositionRenewed: false,
  currentPosition: {},
  previousWhether: {},
}; 

function mainReducer(state = initialState, action) {
  let currentPosition;

  switch (action.type) {
    case 'LOAD_LOCAL_DATA':  
      if (!action.payload.storeString) return Object.assign({}, state);

      let dataObject = JSON.parse(action.payload.storeString);

      currentPosition = {
        lon: dataObject.currentPosition.lon,
        lat: dataObject.currentPosition.lat
      }

      return Object.assign({}, state, {
        currentPosition: currentPosition
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
        currentPosition: currentPosition
      });

    case 'LOCATION_WEATHER_SUCCESS':
      console.log('From LOCATION_WEATHER_SUCCESS ----> ', action.payload.text());

      return Object.assign({}, state, {
      });

    case 'LOCATION_CHECKED_ERROR':
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
