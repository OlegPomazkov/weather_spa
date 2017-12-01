var smthHappened = function(data){
  return {
  	type: 'SMTH_HAPPENED',
    payload: data
  };  
};

module.exports = smthHappened;
