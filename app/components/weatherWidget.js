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
          <p>
            {weather.name}
            {helpers.getTime(weather.dt)}
          </p>
          <p>
            {helpers.getTemperature(weather.main.temp)}
            {helpers.getPressure(weather.main.pressure)}
            {helpers.getWind(weather.wind)}
          </p>
          { this.props.deleteCity ?
            <button 
              city={weather.name}
              onClick={this.props.deleteCity.bind(this)}>
              Delete
            </button>:
            <p></p>
          }  
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