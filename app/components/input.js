var React = require('react');
var styled = require('styled-components').default;


const StyledInput = styled.input`
  font-size: 20px;
  color: #999;
  font-weight: bold;
`;

class Input extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return(
      <div>
        <p>New City</p>
        <StyledInput
          type='text' 
          placeholder='Enter city name'
          onKeyDown={this.props.addCity.bind(this)}/>
      </div>  
    );
  }
}

module.exports = Input;
