const { format, createLogger, transports }  = require('winston');
const { combine, label, json } = format;
  require('winston-daily-rotate-file');

//Label
const CATEGORY = "Log idasJsHandler";

  var transportInfo = new transports.DailyRotateFile({
	level: 'info',
    filename: 'logs/idasjshandler-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: false,
	json: true,
    maxSize: '20m',
    maxFiles: '14d',
	
  });

  var transportError = new transports.DailyRotateFile({
    level: 'error',
    filename: 'logs/idasjshandler-error-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: false,
	json: true,
    maxSize: '20m',
    maxFiles: '14d'
  });

   

  const logger = createLogger({
     
	format: combine(label({ label: CATEGORY }), json()),
	
    transports: [
	 
      transportInfo, // will be used on info level
      transportError,  // will be used on error level
	  new transports.Console(),
	  
    ]
  });

   
  
  logger.info('Start logging');
  
  module.exports = logger;