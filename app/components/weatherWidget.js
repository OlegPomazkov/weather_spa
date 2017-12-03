var React = require('react');

var helpers = require("../helpers/helper.js");

class WeatherWidget extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let weather = this.props.weatherData;
    let infoTemplate;

    if(weather) {
       infoTemplate = (
        <div>
          <p>{weather.name}</p>
          <p>{helpers.getTime(weather.dt)}</p>
          <p>{helpers.getTemperature(weather.main.temp)}</p>
          <p>{helpers.getPressure(weather.main.pressure)}</p>
          <p>{helpers.getWind(weather.wind)}</p>
        </div>  
      );
    } else {
       infoTemplate = (
        <div>
          Can not read place!
        </div>  
      ); 
    }

    return(
      <div>
        {infoTemplate}
      </div>  
    );
  }
}

module.exports = WeatherWidget;