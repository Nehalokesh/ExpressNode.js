const path = require('path');

exports.getcontroller=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../', 'views', 'contact-us.html'));

}

exports.postcontroller=(req, res, next)=>{
    console.log(req.body);
    res.redirect('/success/successfully');
}