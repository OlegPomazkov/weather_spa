var helper  = {
  getTime:  (dt) => {
    let date = new Date(dt * 1000);
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric'
    }

    return date.toLocaleString("en-US", options);
  },

  getTemperature: (t) => 'T ' + (t - 273.15) + 'C',

  getPressure: (p) => 'P ' + (p * 0.750062) + 'mmHg',

  getWind: (w) => {
    let dir;

    if((w.deg > 327.5) || (w.deg <= 22.5)) dir = 'North'; 
    if((w.deg > 22.5) && (w.deg <= 67.5)) dir = 'North-East'; 
    if((w.deg > 67.5) && (w.deg <= 112.5)) dir = 'East'; 
    if((w.deg > 112.5) && (w.deg <= 157.5)) dir = 'South-East';
    if((w.deg > 157.5) && (w.deg <= 202.5)) dir = 'South';
    if((w.deg > 202.5) && (w.deg <= 247.5)) dir = 'South-West';
    if((w.deg > 247.5) && (w.deg <= 292.5)) dir = 'West';
    if((w.deg > 292.5) && (w.deg <= 327.5)) dir = 'North-West';

    return 'Wind ' + dir + ' ' + w.speed + ' m/s';
  }

};


module.exports = helper;
