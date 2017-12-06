function getPosition(options){

  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

function getPositionWeather(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let key = '6228322183a06b8deda72f5acabf9004';

  let url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=' + key;

  return fetch(url)
    .then((res) => {
      if( res.status !== 200 ) throw {message: 'Weather request failed!'};
      
      return res.json();
    });
}

function getByNameWeather(name) {
  let key = '6228322183a06b8deda72f5acabf9004';
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + name + '&APPID=' + key;

  return fetch(url)
    .then((res) => {
      if( res.status !== 200 ) throw {message: 'Weather request failed!'};
      
      return res.json();
    });
}

function getByIdsWeather(ids) {
  let key = '6228322183a06b8deda72f5acabf9004';
  let url = 'http://api.openweathermap.org/data/2.5/group?id=' + ids.join(',') + '&APPID=' + key;

  return fetch(url)
    .then((res) => {
      if( res.status !== 200 ) throw {message: 'Weather request failed!'};
      
      return res.json();
    });
}

module.exports.getPosition = getPosition;
module.exports.getPositionWeather = getPositionWeather;
module.exports.getByNameWeather = getByNameWeather;
module.exports.getByIdsWeather = getByIdsWeather;