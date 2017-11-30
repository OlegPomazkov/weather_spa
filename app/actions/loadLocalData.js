var loadLocalData = function(data){
  return {
  	type: 'LOAD_LOCAL_DATA',
    payload: data
  };  
};

module.exports = loadLocalData;
