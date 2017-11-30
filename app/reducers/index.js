const initialState = {
}; 

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_LOCAL_DATA':  
      console.log('From LOAD_LOCAL_DATA ----> ', action.payload);

      return Object.assign({}, state, {
      });

    case 'ADD_CITY':
      console.log('From ADD_CITY ----> ', action.payload);

      return Object.assign({}, state, {
      });
    default:
      return state;
  }
}

module.exports = mainReducer;
