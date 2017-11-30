var React = require('react');

class Input extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    this.props.addCity();

    return(
      <div className='input__container'>
        <p className='input__header'>New City</p>
        <input
          className = 'input__input' 
          type='text' 
          placeholder='Type city name'/>
      </div>  
    );
  }
}

module.exports = Input;
