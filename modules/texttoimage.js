const { handleTextToImageNow } = require("../../../Productie/TextToImage/js/handleTextToImage.js");
const { handleResizeImage } = require("../../../Productie/TextToImage/js/handleTextToImage.js");


async function consumeTextToImage  (req, res)  {
 //console.log('consumeTextToImage');
 
  let file      = req.query.file;
  let kenteken  = req.query.kenteken;
  let datumtijd = req.query.datumtijd;
  let naw1      = req.query.naw1;
  let naw2      = req.query.naw2;
  let naw3      = req.query.naw3;
   
   
  var resolve =  await handleTextToImageNow(file, kenteken, datumtijd, naw1, naw2, naw3);
  
  return resolve;	
  
};

async function consumeResizeImage  (req, res)  {
// console.log('consumeResizeImage');
 
  let file      = req.query.file;
  let maxsize   = req.query.maxsize;
   
   
  var resolve =  await handleResizeImage(file, maxsize);
  
  return resolve;	
  
};


module.exports = {
  consumeTextToImage: consumeTextToImage,
  consumeResizeImage: consumeResizeImage
  };