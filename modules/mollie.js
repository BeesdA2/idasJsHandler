const { molliePayments } = require("../../Mollie/js/createPayment.js");
var express = require('express');

async function getMollie (req, res) {
 console.log('Get Mollie');
  var setletter = '';
  var filiaal='';
  var ordernr  = '';
  var logging = '';
  
  if (req.query.setletter !== 'undefined')
  {
   setletter = req.query.setletter;
  }
  if (req.query.filiaal !== 'undefined')
  {
   filiaal   = req.query.filiaal;
  }
  if (req.query.ordernr !== 'undefined')
  {
   ordernr   = req.query.ordernr;
  }
  
  
  
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve = await molliePayments(setletter, filiaal, ordernr);
  //res.send('Mollie is uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  return resolve;
};

module.exports = {
  getMollie: getMollie
  };