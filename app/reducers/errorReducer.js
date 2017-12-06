function errorReducer(state = {}, action) {
  switch (action.type) {
    case 'LOCATION_CHECKED_ERROR':
    case 'ADD_CITY_ERROR':
    case 'UPDATE_CITYS_ERROR':
      console.log('From LOCATION_CHECKED_ERROR ----> ', action.payload);

      return Object.assign({}, state);
      
    default:
      return state;
  }
}

module.exports = errorReducer;
