const { handlecreateSaysimpleToken } = require("../../../Productie/SaysimpleToken/js/createSaysimpleToken.js");

async function consumeSaysimpleToken  (req, res)  {
  
 
  let guid  = req.query.guid;
  let filiaal   = req.query.filiaal;
  let lib = req.query.lib;
  let applicatie = req.query.applicatie;
  let apikey = req.query.apikey;	
   
  
  
   
  var resolve =  await handlecreateSaysimpleToken(guid, lib, filiaal, applicatie, apikey);
  return resolve;	
  
};

module.exports = {
  consumeSaysimpleToken: consumeSaysimpleToken
  };