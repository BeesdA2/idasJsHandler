const { handleEWS } = require("../../ewsmail/js/handleApiMailEWS.js");

async function sendEWS  (req, res)  {
 console.log('sendEWS');
 
 
  let mailnr = req.query.mailnr;
   
  
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleEWS(mailnr);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

module.exports = {
  sendEWS: sendEWS
  };