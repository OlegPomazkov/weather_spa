var React = require('react');

var WeatherWidget = require("../components/WeatherWidget.js");

class List extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let listItemsTemplate = [];
    let bindedDeleteCity = this.props.deleteCity;

    if(this.props.allWeather && this.props.allWeather.length) {
      listItemsTemplate = this.props.allWeather.map((item, index) => {
        return <WeatherWidget 
          weatherData={item}
          key={'list_item_'+index}
          deleteCity={bindedDeleteCity}/> 
      });
    } else {
      listItemsTemplate = (<p>No city chosen yet</p>); 
    }

    return( 
      <div>
        {listItemsTemplate}
      </div>  
    );
  }
}

module.exports = List;