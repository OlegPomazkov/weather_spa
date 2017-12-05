var React = require('react');
var styled = require('styled-components').default;

const WWrapper = styled.div`
  display: inline-block;
  margin: 10px;
  background: ${props => props.another ? '#fff1f1' : '#f1f1f1'};
`;
const WBox = styled.div`
  position: relative;
  width: 300px;
  font-family: Helvetica, sans-serif;
  border-radius: 5px;
  border: 3px solid #999;
  color: #555;
`;
const BHeader = styled.div`
  height: 55px;
  text-align: left;
  font-size: 17px;
  padding-left: 7px;
  }
`;
const City = styled.p`
  display: inline-block;
  margin: 0;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  padding-right: 10px;
  }
`;
const Time = styled.p`
  display: inline-block;
  margin: 0;
  margin-top: 10px;
  padding-right: 10px;
  }
`;
const Empty = styled.p`
  display: inline-block;
  margin: 0;
  width: 1px;
  height: 1px;
  }
`;
const Sbutton = styled.button`
  float: right;
  margin-right: 5px;
  margin-top: 5px;
  font-size: 23px;

  &:hover {
    background: #bbb;
  }
  }
`;
const BContent = styled.div`
  height: 70px;
  margin: 0;
  color: #111;
`;
const Desc = styled.p`
  display: inline-block;
  width: 40%;
  margin: 0;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  font-style: italic;
  }
`;
const Temp = styled.p`
  display: inline-block;
  width: 40%;
  margin: 0;
  padding: 10px;
  text-align: center;
  font-size: 40px;
  }
`;
const BFooter = styled.div`
  font-size: 14px;
  pading-top: 5px;
`;
const Param = styled.div`
  display: inline-block;
  width: 31%;
  padding-bottom: 5px;
  text-align: center;
`;
const ParamHeader = styled.div`
  font-weight: bold;
`;
const ParamVal = styled.div`
`;

var helpers = require("../helpers/helper.js");

class WeatherWidget extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let weather = this.props.weatherData;
    let infoTemplate;
    let another = this.props.deleteCity ? 'another': '';

    if(weather) {
       infoTemplate = (
        <WBox>
          <BHeader>
            <City>{weather.name}</City>
            <Time>{helpers.getTime(weather.dt)}</Time>
            { this.props.deleteCity ?
              <Sbutton 
                data-city={weather.name}
                onClick={this.props.deleteCity.bind(this)}
                title="Delete city">
                &times;
              </Sbutton>:
              <Empty/>
            }  
          </BHeader>
          <BContent>
            <Desc>
              {helpers.getWeather(weather.weather)}
            </Desc>
            <Temp>  
              {helpers.getTemperature(weather.main.temp)}
            </Temp>
          </BContent>
          <BFooter>
            <Param>
              <ParamHeader>Pressure</ParamHeader>
              <ParamVal>{helpers.getPressure(weather.main.pressure)}</ParamVal>
            </Param>
            <Param>
              <ParamHeader>Wind</ParamHeader>
              <ParamVal>{helpers.getWind(weather.wind)}</ParamVal>
            </Param>
            <Param> 
              <ParamHeader>Humidity</ParamHeader>
              <ParamVal>{helpers.getHumidity(weather.main.humidity)}</ParamVal>
            </Param>            
          </BFooter>            
        </WBox>  
      );
    } else {
       infoTemplate = (
        <div>
          Can not read place!
        </div>  
      ); 
    }

    return(
      <WWrapper another={another}>
        {infoTemplate}
      </WWrapper>  
    );
  }
}

module.exports = WeatherWidget;