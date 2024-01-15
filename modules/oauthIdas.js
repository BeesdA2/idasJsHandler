const { handleOauthValidate } = require("../../../Productie/oauthIdas/js/oauthValidate.js");

async function consumeOauthValidate  (req, res)  {
 console.log('consumeOauthValidate');
 
  let setletter  = req.query.setletter;
  let idasuser   = req.query.idasuser;
  let applicatie = req.query.applicatie;
  
   
  var resolve =  await handleOauthValidate(setletter, idasuser, applicatie);
  
  return resolve;	
  
};

module.exports = {
  consumeOauthValidate: consumeOauthValidate
  };