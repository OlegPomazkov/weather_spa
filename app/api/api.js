
const key = '60acc8160072c82960b8bb8ef3f1b49c'; //'6228322183a06b8deda72f5acabf9004';

class Api {
  getPosition(options){

    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  getPositionWeather(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=' + key;

    return fetch(url)
      .then((res) => {
        if( res.status !== 200 ) throw {message: 'myPosition request failed!'};
      
        return res.json();
      });
  }

  getByNameWeather(name) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + name + '&APPID=' + key;

    return fetch(url)
      .then((res) => {
        if( res.status !== 200 ) throw {message: 'Weather by name request failed!'};
      
        return res.json();
      });
  }

  getByIdsWeather(ids) {
    let url = 'http://api.openweathermap.org/data/2.5/group?id=' + ids.join(',') + '&APPID=' + key;

    return fetch(url)
      .then((res) => {
        if( res.status !== 200 ) throw {message: 'Weather by ids request failed!'};
      
        return res.json();
      });
  }
}

module.exports = Api;