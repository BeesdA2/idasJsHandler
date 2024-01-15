const { handleConsumeWebservice } = require("../../ApiWeb/js/consumeWebservice.js");
const { handleConsumeWebserviceApiWeb } = require("../../ApiWeb/js/consumeWebserviceApiWeb.js");

async function consumeApiWeb  (req, res)  {
 console.log('consumeApiWeb');
 
 
  let setletter = req.query.setletter;
  let guid      = req.query.guid;
  let applicatie = req.query.applicatie;
   
  
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleConsumeWebservice(setletter, guid, applicatie);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

async function consumeWebserviceApiWeb  (req, res)  {
 console.log('consumeWebserviceApiWeb');
 
 
  let setletter = req.query.setletter;
  let guid      = req.query.guid;
  let applicatie = req.query.applicatie;
   
  
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleConsumeWebserviceApiWeb(setletter, guid, applicatie);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

module.exports = {
  consumeApiWeb: consumeApiWeb,
  consumeWebserviceApiWeb: consumeWebserviceApiWeb
  };