var React = require('react');
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;

var Input = require("../components/input.js");
var List = require("../components/list.js");
var WeatherWidget = require("../components/WeatherWidget.js");

var addCity = require("../actions/addCity.js");
var deleteCity = require("../actions/deleteCity.js");
var loadLocalData = require("../actions/loadLocalData.js");
var checkLocation = require("../actions/checkLocation.js");
var updateAllWeather = require("../actions/updateAllWeather.js");

var styled = require('styled-components').default;

const StyledApp = styled.div`
  position: relative;
  width: 800px;
  height:100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: Helvetica, sans-serif;
  color: #555;
`;
const StyledHeader = styled.div`
  display: inline-block;
  margin-top: 10px;
  font-size: 40px;
  color: #999;
`;
const StyledSubHeader = styled.div`
  font-size: 25px;
  color: #999;
`;

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
      allWeather: allWeather ? JSON.parse(allWeather) : []
    });
  }

  checkLocation () {
    this.props.checkLocation(); 
  }

  updateAllWeather () {
    if( !this.props.allWeather.length ) return;

    let ids = this.props.allWeather.map(item => item.id)
    this.props.updateAllWeather( ids ); 
  }

  addCity (e) {
    if (e.keyCode !== 13) return;
    if (this.props.allWeather.map(item => 
      item.name.toUpperCase())
      .indexOf(e.target.value.toUpperCase()) !== -1 ) {
      e.target.value = '';

      return;
    }

    this.props.addCity({
      cityName: e.target.value
    });
    e.target.value = '';
  }

  deleteCity (e) {
    this.props.deleteCity({
      cityName: e.target.getAttribute('data-city')
    });
  }

  componentWillMount() {
    this.loadLocalData();    
  }

  render() {
    let myWeatherTemplate;

    if ( !this.props.isPositionRenewed ) {
      this.checkLocation();
      this.updateAllWeather();
    }
    if (this.props.myPosition) {
      myWeatherTemplate =(
        <div>
          <StyledSubHeader>Your weather:</StyledSubHeader>
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
      <StyledApp>
          <StyledHeader>CurrentWeatherReporter</StyledHeader>
          {myWeatherTemplate} 
          <Input 
            addCity={this.addCity.bind(this)}/>
          <List 
            allWeather={this.props.allWeather}
            deleteCity={this.deleteCity.bind(this)}/>
      </StyledApp>
    );
  }
}

function mapStateToProps (state) {
  return {
    isPositionRenewed: state.isPositionRenewed,
    myPosition: state.myPosition,
    myWeather: state.myWeather,
    allWeather: state.allWeather
  };
} 

function mapDispatchToProps(dispatch) {
  	return bindActionCreators({ 
      loadLocalData,
      addCity,
      updateAllWeather,
      deleteCity,
      checkLocation
    }, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(WeatherReport);
