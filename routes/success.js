const path = require('path');

const express = require('express');


const router = express.Router();

router.get('/successfully',(req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'success.html')); 
});

router.post('/successfully',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;