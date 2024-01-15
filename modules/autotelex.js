const { handleVehicleAutotelexpro } = require("../../../Productie/AutotelexPRO/js/vehicleAutotelexpro.js");
const { handleAanvraagAutotelexpro } = require("../../../Productie/AutotelexPRO/js/aanvraagAutotelexpro.js");
const { handleOpvragenAutotelexpro } = require("../../../Productie/AutotelexPRO/js/opvragenAutotelexpro.js");
const { handleKentekenRaadpleging} = require("../../../Productie/AutotelexPRO/js/KentekenRaadpleging.js");

async function consumeVehicleAutotelexpro  (req, res)  {
 console.log('consumeVehicleAutotelexpro');
 
 
  let setletter = req.query.setletter;
  let idasuser  = req.query.idasuser;
  let applicatie = req.query.applicatie;
  let filiaal    = req.query.filiaal;
  let offerte    = req.query.offerte;
  let kenteken   = req.query.kenteken;
  let taxid      = req.query.taxid;
  let taxdatum   = req.query.taxdatum;
  let inruil     = req.query.inruil;
   
  
  
                      
  
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleVehicleAutotelexpro(setletter, idasuser, applicatie, filiaal, offerte, kenteken, taxid, taxdatum, inruil);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

async function consumeAanvraagAutotelexpro  (req, res)  {
 console.log('consumeAanvraagAutotelexpro');
 
 
  let setletter  = req.query.setletter;
  let idasuser   = req.query.idasuser;
  let applicatie = req.query.applicatie;
  let filiaal    = req.query.filiaal;
  let offerte    = req.query.offerte;
  let kenteken   = req.query.kenteken;
  let kmstand    = req.query.kmstand;
  let klnr       = req.query.klnr;
   
  
                      
  
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleAanvraagAutotelexpro(setletter, idasuser, applicatie, filiaal, offerte, kenteken, kmstand, klnr);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};



async function consumeOpvragenAutotelexpro  (req, res)  {
 console.log('consumeOpvragenAutotelexpro');
 
 
  let setletter  = req.query.setletter;
  let idasuser   = req.query.idasuser;
  let applicatie = req.query.applicatie;
  let filiaal    = req.query.filiaal;
  let offerte    = req.query.offerte;
  let ticketid   = req.query.ticketid; 
  let logging    = req.query.logging;  
   
  
                        
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleOpvragenAutotelexpro(setletter, idasuser, applicatie, filiaal, offerte, ticketid, logging);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

async function consumeKentekenRaadpleging  (req, res)  {
 console.log('consumeKentekenRaadpleging');
 
 
  let setletter  = req.query.setletter;
  let idasuser   = req.query.idasuser;
  let applicatie = req.query.applicatie;
  let filiaal    = req.query.filiaal;
  let offerte    = req.query.offerte;
  let kenteken   = req.query.kenteken;
  let logging    = req.query.logging;  
   
  
                        
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleKentekenRaadpleging(setletter, idasuser, applicatie, filiaal, offerte, kenteken, logging);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};


module.exports = {
  consumeVehicleAutotelexpro : consumeVehicleAutotelexpro,
  consumeAanvraagAutotelexpro : consumeAanvraagAutotelexpro,
  consumeOpvragenAutotelexpro: consumeOpvragenAutotelexpro,
  consumeKentekenRaadpleging: consumeKentekenRaadpleging
  };