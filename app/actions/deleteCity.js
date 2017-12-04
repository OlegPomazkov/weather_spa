var deleteCity = function(data){
  return {
  	type: 'DELETE_CITY',
    payload: data
  };  
};

module.exports = deleteCity;
