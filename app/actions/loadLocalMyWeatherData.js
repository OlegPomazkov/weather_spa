var loadLocalMyWeatherData = function(data){
  return {
  	type: 'LOAD_LOCAL_MY_WEATHER_DATA',
    payload: data
  };  
};

module.exports = loadLocalMyWeatherData;
