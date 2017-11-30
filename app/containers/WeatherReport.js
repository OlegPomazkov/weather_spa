var React = require('react');
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;

var Input = require("../components/input.js");
var List = require("../components/list.js");

var addCity = require("../actions/addCity.js");
var loadLocalData = require("../actions/loadLocalData.js");

class WeatherReport extends React.Component {
  constructor(props){
    super(props);
  }

  loadLocalData () {
    this.props.loadLocalData({
      storeString: 'Just empty string yet'
    });
  }

  addCity (e) {
    this.props.addCity({
      weatherData: 'Just another empty string'
    });
  }

  render() {
    this.loadLocalData();

    return(
      <div className='application'> 
          <Input 
            addCity={this.addCity.bind(this)}/>
          <List/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
  };
} 

function mapDispatchToProps(dispatch) {
  	return bindActionCreators({ 
      loadLocalData,
      addCity
    }, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(WeatherReport);
