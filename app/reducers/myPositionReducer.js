const initialState = {
  isPositionRenewed: false,
  myPosition: ''
}; 

function myPositionReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_LOCAL_MY_POSITION_DATA':

      return Object.assign({}, state, {
        myPosition: action.payload.myPosition
      });

    case 'LOCATION_CHECKED_SUCCESS':
      let currentPosition = {
        lon: action.payload.coords.longitude,
        lat: action.payload.coords.latitude
      }
      localStorage.setItem('myPosition', JSON.stringify(currentPosition));

      return Object.assign({}, state, {
        isPositionRenewed: true,
        myPosition: currentPosition
      });

    default:
      return state;
  }
}

module.exports = myPositionReducer;
