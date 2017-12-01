//multi transport:
// npm install winston
var winston = require('winston');
const tStamp = ()=>(new Date()).toLocaleTimeString();
const logger = new (winston.Logger)({
    transports:[
        new (winston.transports.Console)({
                colorize:true,
                timestamp:tStamp,
                level:'info'
            }),
            new (winston.transports.File)({
                name:'debug-file',
                filename:'mylogDebug.log',
                timestamp:tStamp,
                level:'debug'
            }),
            new (winston.transports.File)({
                name:'warn-file',
                filename:'mylogWran.log',
                timestamp:tStamp,
                level:'warn'
            })
    ]
});
logger.level = 'debug';
logger.info("Hello..");
logger.debug("Hello Debug...");
logger.warn("Hello Warn...");










/*winston=require('winston');
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: function() {
        return Date.now();
      },
      formatter: function(options) {
        // Return string will be passed to logger. 
        return options.timestamp() +' '+ options.level.toUpperCase() +' '+ (options.message ? options.message : '') +
          (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
      }
    })
  ]
});
logger.info('Data to log.');*/

/*var winston=require('winston')

var logger=new (winston.Logger)({
    transports:[
        new (winston.transports.Console)(),
        new(winston.transports.File)({filename:'mylogger.log'})
    ]
})


logger.info("Info log");

logger.level='debug';
logger.log('debug','hjkhkhk');*/