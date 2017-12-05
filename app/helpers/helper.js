var helper  = {
  getTime:  (dt) => {
    let date = new Date(dt * 1000);
 
    let options = {
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric'
    }

    return date.toLocaleString("en-US", options);
  },

  getWeather: (w) => w.map( item => item.main ).join(', '),

  getTemperature: (t) => Math.round(t - 273.15) + '°C',

  getPressure: (p) => Math.round(p * 0.750062) + 'mmHg',

  getHumidity: (h) => h + '%',

  getWind: (w) => {
    let dir = '';

    if((w.deg > 327.5) || (w.deg <= 22.5)) dir = 'N'; 
    if((w.deg > 22.5) && (w.deg <= 67.5)) dir = 'NE'; 
    if((w.deg > 67.5) && (w.deg <= 112.5)) dir = 'E'; 
    if((w.deg > 112.5) && (w.deg <= 157.5)) dir = 'SE';
    if((w.deg > 157.5) && (w.deg <= 202.5)) dir = 'S';
    if((w.deg > 202.5) && (w.deg <= 247.5)) dir = 'SW';
    if((w.deg > 247.5) && (w.deg <= 292.5)) dir = 'W';
    if((w.deg > 292.5) && (w.deg <= 327.5)) dir = 'NW';

    return dir + ' ' + Math.round(w.speed) + 'm/s';
  }

};


module.exports = helper;
