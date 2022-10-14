const path = require('path');

exports.getcontroller=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
} 

exports.postcontroller=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}