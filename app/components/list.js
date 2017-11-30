var React = require('react');

class List extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className='list__container'>
        JUST LIST CONTAINER
      </div>  
    );
  }
}

module.exports = List;