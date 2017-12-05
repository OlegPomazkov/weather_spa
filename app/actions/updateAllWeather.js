var updateAllWeather = function(data){
  return {
  	type: 'UPDATE_ALL_WEATHER',
    payload: {ids: data}
  };  
};

module.exports = updateAllWeather;
