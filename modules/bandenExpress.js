const { handleConsumeWebservice } = require("../../BandenExpress/js/consumeWebservice.js");
const { handleConsumeWebserviceApiWeb } = require("../../BandenExpress/js/consumeWebserviceApiWeb.js");

async function consumeApiWeb  (req, res)  {
 //console.log('consumeApiWeb');
 
 
  let setletter = req.query.setletter;
  let guid      = req.query.guid;
  let applicatie = req.query.applicatie;
  let filiaal    = req.query.filiaal;
  
  
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleConsumeWebservice(setletter,  guid, applicatie);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

async function consumeWebserviceApiWeb  (req, res)  {
 //console.log('consumeWebserviceApiWeb');
 
 
  let setletter = req.query.setletter;
  let guid      = req.query.guid;
  let applicatie = req.query.applicatie;
  let filiaal    = req.query.filiaal;
   
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var responseWebservice =  await handleConsumeWebserviceApiWeb(setletter, filiaal, guid, applicatie);
  let resolve = await responseWebservice; 
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  //console.log('net voor teruggeven resolve in consumeWebservice'); 
  return resolve;	
  
};

module.exports = {
  consumeApiWeb: consumeApiWeb,
  consumeWebserviceApiWeb: consumeWebserviceApiWeb
  };