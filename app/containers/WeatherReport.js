var React = require('react');
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;

var Input = require("../components/input.js");
var List = require("../components/list.js");

var addCity = require("../actions/addCity.js");
var loadLocalData = require("../actions/loadLocalData.js");
var checkLocation = require("../actions/checkLocation.js");
var smthHappened = require("../actions/smthHappened.js");

class WeatherReport extends React.Component {
  constructor(props){
    super(props);
  }

  loadLocalData () {
    this.props.loadLocalData({
      storeString: localStorage.getItem('localData')
    });
  }

  checkLocation () {
    this.props.checkLocation(); 
  }

  addCity (e) {
    this.props.addCity({
      weatherData: 'Just another empty string'
    });
  }

  smthHappened() {
    this.props.smthHappened({
      weatherData: 'Something happened!'
    });
  }

  render() {
    this.loadLocalData();
    if ( !this.props.isPositionRenewed ) {
      this.checkLocation();
    }

    return(
      <div> 
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
    isPositionRenewed: state.isPositionRenewed
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
