var React = require('react');
var styled = require('styled-components').default;

const InputWrappper = styled.div`
  margin-top: 15px;
  margin-bottom: 5px;
`;
const StyledInput = styled.input`
  display: inline-block;
  height: 24px;
  padding-left: 7px;
  font-size: 18px;
  color: #555;
`;
const StyledButton = styled.div`
  display: inline-block;
  height: 24px;
  margin-left: 5px;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 17px;
  background: #f1f1f1;
  color: #000;
  border-radius: 3px;
  border: 1px solid #999;

  &:hover {
    background: #d1d1d1;
  }
`;

class Input extends React.Component {
  constructor(props){
    super(props);
  }

  triggerClick (e) {
    let newEvent = {
      keyCode: 13,
      target: e.target.previousSibling
    }
    
    this.props.addCity(newEvent);
  }

  render() {

    return(
      <InputWrappper>
        <StyledInput
          type='text' 
          placeholder='Add new city'
          onKeyDown={this.props.addCity.bind(this)}/>
        <StyledButton onClick = {this.triggerClick.bind(this)} >Add</StyledButton>  

      </InputWrappper>  
    );
  }
}

module.exports = Input;
