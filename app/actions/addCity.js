var addCity = function(data){
  return {
  	type: 'ADD_CITY',
    payload: data
  };  
};

module.exports = addCity;
