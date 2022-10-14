const path = require('path');

exports.getcontroller =(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../', 'views', 'shop.html')); 
}

