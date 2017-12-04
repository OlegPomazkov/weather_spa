var React = require('react');
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;

var Input = require("../components/input.js");
var List = require("../components/list.js");
var WeatherWidget = require("../components/WeatherWidget.js");

var addCity = require("../actions/addCity.js");
var addCityRequest = require("../actions/addCityRequest.js");
var loadLocalData = require("../actions/loadLocalData.js");
var checkLocation = require("../actions/checkLocation.js");
var smthHappened = require("../actions/smthHappened.js");

class WeatherReport extends React.Component {
  constructor(props){
    super(props);
  }

  loadLocalData () {
    let myPosition = localStorage.getItem('myPosition');
    let myWeather = localStorage.getItem('myWeather');
    let allWeather = localStorage.getItem('allWeather');

    this.props.loadLocalData({
      myPosition: myPosition ? JSON.parse(myPosition) : '',
      myWeather: myWeather ? JSON.parse(myWeather) : '',
      allWeather: allWeather ? JSON.parse(allWeather) : ''
    });
  }

  checkLocation () {
    this.props.checkLocation(); 
  }

  addCity (e) {
    if (e.keyCode !== 13) return;

    this.props.addCity({
      cityName: e.target.value
    });
  }

  smthHappened() {
    this.props.smthHappened({
      weatherData: 'Something happened!'
    });
  }

  componentWillMount() {
    this.loadLocalData();    
  }

  render() {
    let myWeatherTemplate;

    if ( !this.props.isPositionRenewed ) {
      this.checkLocation();
    }
    if (this.props.myPosition) {
      myWeatherTemplate =(
        <div>
          <h3>Your weather:</h3>
          <WeatherWidget 
            weatherData={this.props.myWeather} /> 
        </div>
      );
    } else {
      myWeatherTemplate =(
        <h3>Can not get your place ...</h3>
      );
    }
    return(
      <div>
          <h1>YourWeatherReporter</h1>
          {myWeatherTemplate} 
          <Input 
            addCity={this.addCity.bind(this)}/>
          <List/>
          <button onClick={this.smthHappened.bind(this)}>
            BIG BEATIFUL BUTTON
          </button>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    isPositionRenewed: state.isPositionRenewed,
    myPosition: state.myPosition,
    myWeather: state.myWeather
  };
} 

function mapDispatchToProps(dispatch) {
  	return bindActionCreators({ 
      loadLocalData,
      addCity,
      checkLocation,
      smthHappened
    }, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(WeatherReport);
