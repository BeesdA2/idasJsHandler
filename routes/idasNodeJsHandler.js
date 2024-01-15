var glob = require( 'glob' );
var express = require('express');
const logger = require("../logger");
var router = express.Router();
var module_dict = {};


//const { getMollie } = require("/Beesda2/NodeJS14/Test/idasJsHandler/modules/mollie.js");
glob.sync( './modules/*.js' ).forEach( function( file ) {
  //console.log('file: ' + file);
  let dash = file.split("/");
  if(dash.length == 3) {
   	let dot = dash[2].split(".");
     if(dot.length == 2) {
       let key = dot[0];
 	//  console.log('key: ' +key); 
       module_dict[key] = require('.'+file);
    }
  }
});



router.get('/:nodeJsPgm', async function(req, res, next) {
	
 
  var nodeJsPgm = req.params.nodeJsPgm;
  var nodeJsFunction = req.query.nodeJsFunction;
  //console.log('req:' + req);
  //eval(nodeJsFunction );
  //eval(module_dict['mollie'].getMollie(req,res));
  //console.log('module_dict["'+nodeJsPgm+'"].'+nodeJsFunction);
 //logger.info('module_dict["'+nodeJsPgm+'"].'+nodeJsFunction);
  
  //console.log('before wait', new Date());
  //await wait(5 * 1000);
  //console.log('after wait', new Date())
  var resolve = await eval('module_dict["'+nodeJsPgm+'"].'+nodeJsFunction);
  
  //console.log('TEST TEST TEST TEST TEST');
  //console.log(resolve);
  return res.json(resolve);
  
});

async function wait (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  });
}

module.exports = router;