const path = require('path');

exports.getcontroller=(res,req,next)=>{
    res.sendFile(path.join(__dirname,'../', 'views', 'success.html'));
}



exports.postcontroller =(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
}

