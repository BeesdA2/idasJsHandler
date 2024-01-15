// app.js
var express = require('express');
var winston = require('winston'), expressWinston = require('express-winston');
require('winston-daily-rotate-file');

var cors = require('cors');
var app = express();


//Label
const CATEGORY = "Log idasJsHandler";

var transportInfo = new winston.transports.DailyRotateFile({
	level: 'info',
    filename: 'logs/idasjshandler-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: false,
	json: true,
    maxSize: '20m',
    maxFiles: '1d',
	
  });
  
 
var transportError = new winston.transports.DailyRotateFile({
	level: 'error',
    filename: 'logs/idasjshandler-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: false,
	json: true,
    maxSize: '20m',
    maxFiles: '1d',
	
  });

app.use(expressWinston.logger({
	   
      transports: [
	    transportInfo,
		 
        new winston.transports.Console()
      ],
      format: winston.format.combine(
	    winston.format.label({ label: CATEGORY }),
        winston.format.colorize(),
        winston.format.json()
      ),
      meta: true, // optional: control whether you want to log the meta data about the request (default to true)
      msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
      expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
      colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
      ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
    }));

app.use(cors());
//  Explanation: requests to `localhost:3000/` should be redirected to `routes/home.js`
var homeRouter = require('./routes/home')
app.use('/', homeRouter);




var idasNodeJsHandlerRouter = require('./routes/idasNodeJsHandler');
app.use('/idasNodeJsHandler', idasNodeJsHandlerRouter);

app.use(expressWinston.errorLogger({
	   
      transports: [
	    transportError,
		
        new winston.transports.Console()
      ],
      format: winston.format.combine(
	    winston.format.label({ label: CATEGORY }),
        winston.format.colorize(),
        winston.format.json()
      ),
      meta: true, // optional: control whether you want to log the meta data about the request (default to true)
      msg: "HTTP {{err.message}} {{res.statusCode}} {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
      expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
      colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
      ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
    }));

module.exports = app;

