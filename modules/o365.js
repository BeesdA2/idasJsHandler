const { handleO365 } = require("../../O365MAIL-API/js/handleApiMail.js");

async function sendO365  (req, res)  {
 console.log('sendO365');
 
 
  let mailnr = req.query.mailnr;
  
  
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleO365(mailnr);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

module.exports = {
  sendO365: sendO365
  };