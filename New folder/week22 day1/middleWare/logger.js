
// const moment = require("moment");

const logger = (req,resp,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};

module.exports = logger