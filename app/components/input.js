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
    this.props.addCity();

    return(
      <div>
        <p>New City</p>
        <StyledInput
          type='text' 
          placeholder='Type city name'/>
      </div>  
    );
  }
}

module.exports = Input;
