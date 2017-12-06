var loadLocalAllWeatherData = function(data){
  return {
  	type: 'LOAD_LOCAL_ALL_WEATHER_DATA',
    payload: data
  };  
};

module.exports = loadLocalAllWeatherData;
