const { handleGetContract } = require("../../../Productie/Rob-Api-V2/js/getContract.js");
const { handleGetTires } = require("../../../Productie/Rob-Api-V2/js/getTires.js");
const { handleCreateServiceRequest } = require("../../../Productie/Rob-Api-V2/js/createServiceRequest.js");
const { handleCreateReliefVehicleRequest } = require("../../../Productie/Rob-Api-V2/js/createReliefVehicleRequest.js");
const { handleCancelServiceRequestLine } = require("../../../Productie/Rob-Api-V2/js/cancelServiceRequestLine.js");
const { handleGetComponents } = require("../../../Productie/Rob-Api-V2/js/getComponents.js");
const { handleStatusServiceRequest } = require("../../../Productie/Rob-Api-V2/js/statusService.js");
 

async function consumeGetContract  (req, res)  {
 console.log('consumeGetContract');
 
 
  let guidmsg    = req.query.guidmsg;
  let lib        = req.query.lib;
  let filiaal    = req.query.filiaal;
  let applicatie = req.query.applicatie;
  let kenteken   = req.query.kenteken;
   
  
   
   console.log('consumeGetContract');
  
  
                      
  
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleGetContract(guidmsg, lib, filiaal, applicatie, kenteken);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

async function consumeGetTires  (req, res)  {
  
 
  let guidmsg    = req.query.guidmsg;
  let lib        = req.query.lib;
  let filiaal    = req.query.filiaal;
  let applicatie = req.query.applicatie;
  let kenteken   = req.query.kenteken;
  let selectie   = req.query.selectie;
   
  
   
   console.log('consumeGetTires');
   
  
                      
  
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleGetTires(guidmsg, lib, filiaal, applicatie, kenteken, selectie);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

async function consumeCreateServiceRequest  (req, res)  {
  
 
  let guidmsg    = req.query.guidmsg;
  let lib        = req.query.lib;
  let filiaal    = req.query.filiaal;
  let applicatie = req.query.applicatie;
  let werkorder  = req.query.werkorder;
  
  console.log('consumeCreateServiceRequest');
  
   
  
  
                      
  
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleCreateServiceRequest(guidmsg, lib, filiaal, applicatie, werkorder);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

async function consumeCreateReliefVehicleRequest  (req, res)  {
 
 
 
  let guidmsg    = req.query.guidmsg;
  let lib        = req.query.lib;
  let filiaal    = req.query.filiaal;
  let applicatie = req.query.applicatie;
  let verhuurorder  = req.query.verhuurorder;
   
  
   
   console.log('consumeCreateReliefVehicleRequest');
    
  
  var resolve =  await handleCreateReliefVehicleRequest(guidmsg, lib, filiaal, applicatie, verhuurorder);
 
  return resolve;	
 };

async function consumeCancelServiceRequestLine  (req, res)  {
 console.log('consumeCancelServiceRequestLine');
 
 
  let guidmsg    = req.query.guidmsg;
  let lib        = req.query.lib;
  let filiaal    = req.query.filiaal;
  let applicatie = req.query.applicatie;
  let guidorder  = req.query.guidorder;
  let guidline   = req.query.guidline;
   
   
  
  
  
                      
  
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleCancelServiceRequestLine(guidmsg, lib, filiaal, applicatie, guidorder, guidline);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

async function consumeGetComponents  (req, res)  {
  
 
  let guidmsg    = req.query.guidmsg;
  let lib        = req.query.lib;
  let filiaal    = req.query.filiaal;
  let applicatie = req.query.applicatie;
   
  
   
   console.log('consumeGetComponents');
    
   
  
  
                      
  
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleGetComponents(guidmsg, lib, filiaal, applicatie);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};


async function consumeStatusServiceRequest  (req, res)  {
  
 
 
  let guidmsg    = req.query.guidmsg;
  let lib        = req.query.lib;
  let filiaal    = req.query.filiaal;
  let applicatie = req.query.applicatie;
  let guid       = req.query.guid;
   
  
   
   console.log('consumeStatusServiceRequest');
    
 
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleStatusServiceRequest(guidmsg, lib, filiaal, applicatie, guid);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};




module.exports = {
  consumeGetContract : consumeGetContract,
  consumeGetTires: consumeGetTires,
  consumeCreateServiceRequest: consumeCreateServiceRequest,
  consumeCreateReliefVehicleRequest: consumeCreateReliefVehicleRequest,
  consumeCancelServiceRequestLine: consumeCancelServiceRequestLine,
  consumeGetComponents: consumeGetComponents,
  consumeStatusServiceRequest, consumeStatusServiceRequest
  
  
  };